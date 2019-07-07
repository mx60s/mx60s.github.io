window.onload = main;

let rendering = false;
const squareSize = 200,
     squareSize2 = 200,
     padding = 0,
     ws = 12,
     hs = 12,
     w = (2*padding) + (squareSize * ws),
     h = (2*padding) + (squareSize * hs);

/* Simple seedable random number generation
 * Implementation of the xor shift algorithm
 *  detailed here: http://www.jstatsoft.org/v08/i14/paper
 */
class xorshift128 {
   constructor(seed){
   	this.a = seed;
   	this.b = 0;
   	this.c = 0;
   	this.d = 0;
   	this.m = Math.pow(2, 31);
   	// Discard first 128 values
   	for(let q = 128; q--; ){
   		this.next();
   	}
   }
   next(){
   	let f = this.a ^ (this.a << 11);
   	this.a = this.b;
   	this.b = this.c;
   	this.c = this.d;
   	return this.d ^= (this.d >> 19) ^ f ^ (f >> 8);
   }
   nextDouble(){
   	return this.next() / this.m;
   }
}

// Perlin nosie implementation
class perlin {
   constructor(_w, _h, seed) {
   	this.grid = [];
   	this.w = _w;
   	this.h = _h;
   	let rand = new xorshift128(seed);
   	// Generate a random 2D vector for each point in a 6*6 grid
   	for(let i = 0; i < _w * _h; i++) {
   		let theta = Math.PI * 10 * rand.nextDouble();
   		this.grid.push(Math.cos(theta), Math.sin(theta));
   	}
   }
   smoothfn(t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
   }
   linearInterpolate(a, b, p) {
        return a + (this.smoothfn(p) * (b - a));
   }
   dotGradient(nx, ny, x, y) {
   	return ((x - nx) * this.grid[2 * (nx * this.h + ny)]) + 
   		   ((y - ny) * this.grid[2 * (nx * this.h + ny) + 1]);
   }
   get(x, y) {
   	let x0 = x | 0, // floor
   		y0 = y | 0,
   		x1 = x0 + 1,
   		y1 = y0 + 1;
   	let g0 = this.dotGradient(x0, y0, x, y),
   		g1 = this.dotGradient(x1, y0, x, y),
   		g2 = this.dotGradient(x0, y1, x, y),
   		g3 = this.dotGradient(x1, y1, x, y);
   	let lintx0 = this.linearInterpolate(g0, g1, x - x0),
   		lintx1 = this.linearInterpolate(g2, g3, x - x0),
   		linty  = this.linearInterpolate(lintx0, lintx1, y - y0);
   	return linty;
   }
}


// App
let render = function(ctx_elevation, perlin) {
   
    if(rendering) {
        return;
    }
    rendering = true;
    ctx_elevation.clearRect(0, 0, w, h);
    let resolution = 2;
    for(let x = padding; x < (w - padding - squareSize); x += resolution) {
        for(let y = padding; y < (h - padding - squareSize); y += resolution) {
   	    let squarex = (x - padding) / squareSize;
   	    let squarey = (y - padding) / squareSize;
   	    let val = perlin.get(squarex, squarey);
   		
   	    if ((val.toFixed(2) == 0.10) || (val.toFixed(2) == 0.30)
               || (val.toFixed(2) == 0.40) || (val.toFixed(2) == 0.50)
               || (val.toFixed(2) == 0.07) || (val.toFixed(2) == 0.02))
                ctx_elevation.fillStyle = "#edeff2";
            else
                ctx_elevation.fillStyle = "#FFFFFF";
   		
        ctx_elevation.fillRect(x, y, resolution, resolution);
        }
    }
    rendering = false;
}

function main() {
    const c_elevation = document.createElement("canvas");
    c_elevation.width = 300;
    c_elevation.height = 300;

    const ctx_elevation = c_elevation.getContext("2d");
    
    let perl_seed = Math.floor(Math.random() * 10);
    if (perl_seed == 0) {
        perl_seed = 1;
    }

    var perlin1 = new perlin(ws,  hs,  perl_seed);
    c_elevation.style.display = "block";
    c_elevation.width = ctx_elevation.width = w;
    c_elevation.height = ctx_elevation.height = h;
    c_elevation.style.width = `${w}px`;
    c_elevation.style.height = `${h}px`;
    render(ctx_elevation, perlin1);
    document.body.style.background = "url(" + c_elevation.toDataURL() + ")";
}

//main();