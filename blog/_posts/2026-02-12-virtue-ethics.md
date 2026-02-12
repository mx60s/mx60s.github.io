---
layout: post
title:  "Virtue Ethics, Alignment, Antiqua et Nova"
date:   2026-02-12 10:00:00 +0000
categories: jekyll update
author: Maggie von Ebers
tags: [ai, alignment, philosophy]
---

# The Prix Fixe: Catholic Virtue Ethics as an Alignment Framework

I have like an hour to write this up and I am not a Catholic scholar and I have not done a lot of the requisite studying of the canonical alignment texts, so please forgive any minor theological errors and feel free to admonish Claude and I about major ones. But today I wanted to write about the internal consistency of virtue ethics in Catholicism — I'm pretty confident that this can be useful to some people in understanding why Catholics (and potentially Christians) might have certain attitudes to AI development, and I think it could also be useful down the line to guide smarter people in their development of useful alignment tactics.

A few months ago I started diving into the current Pope's comments towards AI and leading a reading group on X on this topic. I started doing this because I thought it would be funny, and a thing to do, and I enjoyed the idea that my 10 years of Catholic schooling and teenage angst during my apologetics class would be useful in some way for the current field that I'm in. So far we've gone into the Thomistic metaphysics supporting the church's stance that AI cannot be conscious, we've flirted with some modern defenses of this metaphysics, and finally we've moved on to conceptions of the self within the Catholic framework.

Pope Leo XIV chose his name from his predecessor, Pope Leo XIII. (On a side note, I've always thought it was funny that popes choose their names like this. We once had a kitten named Mushu that died of a congenital issue and when we eventually got another one, my very Catholic mother named him Mushu II.) Leo XIII served as pope from 1878 to 1903 and wrote an encyclical laying out how human dignity should be preserved during the rise of industrialization and socialism, and our current Chicagoan Pope has decided that he will similarly guide the laity through the rise of AI automation.

Last year, the late Pope Francis released an official position on AI development, *Antiqua et Nova*, and LessWrong user jchan wrote a [great breakdown here](https://www.lesswrong.com/posts/yDyRgLSvpsD3PqQHC/thoughts-on-antiqua-et-nova-catholic-church-s-ai-statement). I wanted to respond to this specifically because it breaks down the Catholic position quite well and identifies a few pieces of it which might be genuinely useful to think about as targets for alignment. However, the author also identifies a few areas of the text which feel underspecified or confusing and I think this can be cleared up by bringing in some of the (very rigorous!) intellectual tradition of the church which is not fully elucidated in the encyclical. Some of the things identified in the post as potentially valid and useful to alignment, like relationality and embodiment, are not independent pieces but instead load-bearing parts of a single architecture, and we might find some use in viewing the architecture as a whole, even as secularists.

## The Framework

I'm going to try and lay out the framework which supports virtue ethics as briefly as possible. I'm not really going to use official terms for things. If you're interested in knowing more, you can go look at [Edward Feser's blog](https://edwardfeser.blogspot.com/) where he has a wealth of work about hylomorphic dualism and its implications.

The basic structure of reality is that things have essences which are oriented towards ends. A cat is not a cat because of its molecular composition at any given moment; it's a cat because it has the essential form of a cat, which includes what a cat is "for" — its capacities and their proper expression. A cat that cannot meow is still a cat, but it's a cat that is failing to fully realize its catness. For any entity there exists some fact of the matter about what it would look like for that entity to be flourishing or fully expressing its nature. This is the concept of *telos*. It's also why embodiment is critical in Catholicism.

There are three types of souls according to Aquinas — the vegetative (basically that it grows), the sensitive (that it processes sensory input and reacts), and the rational. Only human beings possess the last type, and this specifically refers to the ability to grasp universals. A human being alone can understand that a triangle has three sides and that its angles sum to 180 degrees. This concept is supplied of course by sensory information but critically when a human is comprehending a triangle to give you this information, the concept is present to the intellect *as such*, not as a specific recollection of a triangle or a generalization built from examples. This is naturally a tough one for secularists to accept on a number of levels — I think most people would probably say that their conception of a triangle does indeed come from something like a generalization built from examples — but it also feels difficult to say that this is not what a sufficiently advanced AI could do. For Aquinas, understanding is not the processing of a representation of a concept but the concept becoming present in the intellect. The form of the thing understood and the act of understanding are the same event. Kind of a frustrating thing to hear as a neuroscientist but interesting.

Two asides: because the soul is the form of a living thing, it relies on its instantiation, which is both why animal souls are destroyed upon death, and why human souls persist — because the "knowing" of immaterial things is a two-way function of sorts, the human soul is immaterial in its knowing. So the human soul persists when the body dies, but the human body will be resurrected in the second coming, because the flourishing of the human soul requires that the body is present as well.

Selfhood within Catholicism rests critically on this idea of knowing being a function which transforms both the knower and the known. On the Aquinas account, the intellect understands itself "by its acts" and "like other things." Kind of restating the above: you do not have some special introspective faculty that observes your own mind from a privileged vantage point. Instead, in the act of understanding anything at all, the intellect is also present to itself. This is potentially important because it means selfhood and rationality are not two separate features that happen to coexist in humans. This also helps to explain relationality — the self only ever exists in relation to something else.

Finally we can discuss virtue. Virtue, in the Thomistic system, is the organization of the entire integrated structure around its proper end. More than following the right rules, it requires that a person use their rationality during unique situations to understand how their action would align with their flourishing under God. It is fundamentally rational, truth-seeking, embodied, and relational.

## Back to the Post

So going back to the LessWrong post — I mentioned there were some misunderstandings that arise from lack of knowledge of this entire framework. I won't go pick through them but this is one that arises when you don't know what the church is saying happens during human reasoning:

> "This betrays a lack of confidence in the point made immediately prior (paragraphs 32 and 33) which claims (unjustifiably, in my opinion) that there are certain capabilities that are fundamentally out-of-reach for AI: 'Since AI lacks the richness of corporeality, relationality, and the openness of the human heart to truth and goodness, its capacities — though seemingly limitless — are incomparable with the human ability to grasp reality' (paragraph 33) - but I think it's only a matter of time before AI has all of that 'richness'."

I think we could go so far as making a brain in silicon and the church would still not feel called to label that as human, which is definitely a difficult position for them to be going into the future! It would be far easier to loop intelligent aliens into the mix as opposed to human-created intelligence as much of the delineation of what makes something human appears to rely heavily on what existed when these lines were drawn. But all this to say that we should not expect capabilities to change the mind of the church any time soon.

## Open Questions

Anyways, beyond quibbling with the original poster, I do agree that relationality and embodiment are potentially very useful qualities to a system that would be aligned with virtue ethics, just on an empirical secular level. So I guess there's a few open questions:

**Do we think these requirements are valid for successfully conducting virtue ethics on a system?** If so, and they're not fulfilled, what gaps can we expect to see?

**If we do think this is a valid path to robust alignment,** and we agree that rationality, embodiment (in some form, or at least thoughtful considerations for the form of the AI), relationality, and truth-seeking are useful as parts in a system something like the one detailed above, **how does one remove God from the equation?** Is it load bearing? The post mentions something like this as well which I appreciate:

> "There are ways to set up a similar concept non-theistically, by regarding truth, philosophy, mathematics, etc. as something worth striving for for non-utilitarian reasons. E.g. 'It appeared to me that the dignity of which human existence is capable is not attainable by devotion to the mechanism of life, and that unless the contemplation of eternal things is preserved, mankind will become no better than well-fed pigs' (Bertrand Russell, Autobiography). However, this seems like a very niche interest of a peculiar sort of person."

I am that niche peculiar sort of person! :^) Is this the reason why many alignment researchers appreciate Buddhism? I also appreciate the appeal to dignity. If we feel there's a possibility that these systems are having conscious experiences of some kind, I would like them to have a dignified existence, and I'm interested in discussing what that entails.

**If we try to stick with this framework but with a secular framing,** how do current efforts like the Claude "soul document" or the investigations into emergent introspection change the conversation?

---

Anyways this mostly served to organize my thoughts — maybe someone else will find it interesting! I'll try to write a bit more soon about how the church's social teachings have adapted and will apply as work is increasingly automated.
