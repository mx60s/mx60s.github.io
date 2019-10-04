#include <SDL2/SDL.h>
#include <emscripten.h>
#include <cstdlib>
#include <cmath>
#include <vector>
#include <iostream>
#include <fstream>
#include <stdio.h>

const int RESOLUTION = 20, PADDING = 0;
const int SQUARE_SIZE = 200;
const int WS = 12, HS = 12;
const int WIDTH = (2 * PADDING) + (SQUARE_SIZE * WS);
const int HEIGHT = (2 * PADDING) + (SQUARE_SIZE * HS);

class xorshift128 {
private:
    int a;
    int b, c, d;
    int m;

public:
    xorshift128(int seed) {
        a = seed;
        b = 0, c = 0, d = 0;
        m = pow(2, 31);

        for (int i = 128; i > 0; i--) {
            this->next();
        }
    }

    int next() {
        int f = this->a ^ (this->a << 11);
        this->a = this->b;
   	    this->b = this->c;
   	    this->c = this->d;
        return this->d ^= (this->d >> 19) ^ f ^ (f >> 8);
    }
    
    double nextDouble() {
        return this->next() / this->m;
    }
};

class Perlin {
private:
    std::vector<std::pair<float, float> > grid;
    int w, h;
    xorshift128* rand;

public:
    Perlin(int width, int height, int seed) {
        rand = new xorshift128(seed);
        for (int i = 0; i < w * h; i++) {
            float theta = 3.14159265 * 10.0 * rand->nextDouble();
            grid.push_back(std::make_pair(cos(theta), sin(theta)));
        }
    }

    float smoothfn(float t) {
        return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
    }
    float linearInterpolate(float a, float b, float p) {
        return a + (this->smoothfn(p) * (b - a));
    }
    float dotGradient(int nx, int ny, float x, float y) {
        int ind = 2 * nx * h + ny;
        return ((x - nx) * grid[ind].first) + 
   		        ((y - ny) * grid[ind].second);
    }
    float get(float x, float y) {
        int x0 = floor(x);
        int y0 = floor(y);
        int x1 = x0 + 1;
        int y1 = y1 + 1;

        printf("%i %i\n", x1, y1);

        float g0 = this->dotGradient(x0, y0, x, y);
        float g1 = this->dotGradient(x1, y0, x, y);
        float g2 = this->dotGradient(x1, y1, x, y);
        float g3 = this->dotGradient(x1, y1, x, y);
        printf("%f\n", g0);

        float lintx0 = this->linearInterpolate(g0, g1, x - x0);
        float lintx1 = this->linearInterpolate(g2, g3, x - x0);
        
        return this->linearInterpolate(lintx0, lintx1, y - y0);
    }
};

struct context
{
    SDL_Renderer *renderer;
    Perlin *p;
    std::ofstream *fout;
    int iteration;
};

float round_num(float var) 
{ 
    float value = (int)(var * 100 + .5); 
    return (float)value / 100; 
} 

void mainloop(void *arg)
{
    context *ctx = static_cast<context*>(arg);
    SDL_Renderer *renderer = ctx->renderer;
    Perlin* p = ctx->p;

    // set the canvas to blank white
    SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);
    SDL_RenderClear(renderer);

    for (int x = PADDING; x < (WIDTH - PADDING - SQUARE_SIZE); x += RESOLUTION) {
        for (int y = PADDING; y < (HEIGHT - PADDING - SQUARE_SIZE); y += RESOLUTION) {
            float squarex = (x - PADDING) / SQUARE_SIZE;
            float squarey = (y - PADDING) / SQUARE_SIZE;
            float val = p->get(squarex, squarey);
            //if ((val == 0.10) || (val == 0.30) || (val == 0.40) || (val == 0.50) || (val == 0.07) || (val == 0.02)) {
            //if ((val <= 1) && (val >= 0.05)){
                //SDL_SetRenderDrawColor(renderer, 237, 239, 242, 255);
                //*ctx->fout << "hit" << std::endl;
            //    SDL_SetRenderDrawColor(renderer, 255, 0, 0, 255);
            //} else {
                SDL_SetRenderDrawColor(renderer, val * 255, val * 255, val * 255, 255);
            //}
            SDL_Rect r;
            r.x = x;
            r.y = y;
            r.w = 10;
            r.h = 10;
            SDL_RenderFillRect(renderer, &r);
            SDL_RenderPresent(renderer);
        }
    }

/*
    SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
    SDL_Rect r;
    r.x = 40;
    r.y = 10;
    r.w = 10;
    r.h = 10;
    SDL_RenderFillRect(renderer, &r);

    SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
    //SDL_Rect r;
    r.x = 20;
    r.y = 10;
    r.w = 10;
    r.h = 10;
    SDL_RenderFillRect(renderer, &r);

    SDL_RenderPresent(renderer);
*/
    ctx->iteration++;
}

int main()
{
    std::ofstream myfile;
    myfile.open("logs.txt");
    int perl_seed = rand() % 10 + 1;
    
    Perlin* p = new Perlin(WS, HS, perl_seed);

    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window *window;
    SDL_Renderer *renderer;
    SDL_CreateWindowAndRenderer(WIDTH, HEIGHT, 0, &window, &renderer);

    context ctx;
    ctx.renderer = renderer;
    ctx.p = p;
    ctx.iteration = 0;
    ctx.fout = &myfile;

    const int simulate_infinite_loop = 1; // call the function repeatedly
    const int fps = 1; // call the function as fast as the browser wants to render (typically 60fps)
    emscripten_set_main_loop_arg(mainloop, &ctx, fps, simulate_infinite_loop);
    
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    myfile.close();
    return EXIT_SUCCESS;
}