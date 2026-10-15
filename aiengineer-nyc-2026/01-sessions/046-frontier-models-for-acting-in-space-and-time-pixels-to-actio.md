---
session_id: "046"
title: "Frontier Models for Acting in Space and Time"
agenda_title: "Frontier Models for Acting in Space and Time"
speakers: ["Pim de Witte"]
start_wall: "4:16:45 PM ET"
end_wall: "4:35:42 PM ET"
video_start: "07:28:53"
video_end: "07:47:50"
video_url: "https://www.youtube.com/watch?v=akEqiXFo3GM&t=26933s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "keynote"
tags: ["pixel-to-action", "world-models", "robotics", "game-data", "foundation-models", "agents"]
confidence: "high"
---

# Frontier Models for Acting in Space and Time

> General Intuition CEO Pim de Witte presents one model family that converts pixels to actions in real time — trained on Medal's game-play action data, it plays video games at the highest level and controls over 10 robot types, on the theory that scaling pixel space repeats Anthropic's bet on coding space.

## TL;DR
- Pim de Witte, co-founder and CEO of General Intuition, argues that LLMs are turn-based predictors and hit a wall in environments that unfold in space and time. His company builds purpose-built models that observe while they act.
- The data engine is Medal, the world's largest video game recorder. It sees about 1 billion uploaded videos per year, is on track for 3 billion, and yields over 1.5 trillion action tokens per month. By his comparison, frontier labs' total robotics training data is collected in about half a day at that rate.
- The core insight: humans teleoperate robots with the same brain, and often the same game controller, they use to play games. So the action space of games and of teleoperation is often the same.
- The strategy copies Anthropic's playbook in a new domain: Anthropic scaled coding space and people moved problems into it; General Intuition scales pixel space and bets people will bring problems there.
- Ship plan: release late November or early December, early access over the next few months, and three hackathons (first in New York City mid-November, then London).

## Key lessons
1. The product primitive is pixels in, actions out. The model takes frames plus an optional text prompt and returns keyboard, mouse, or game-controller actions through an API. De Witte describes it as "equivalent to that of an enhanced computer use model with more actions on the output space" [07:34:17]. One model plays video games at the highest level and controls over 10 robot types with the same primitives.
2. Game recordings are the scale advantage. Medal (rendered "Metal" and "Meta" in the automatic transcript) records tens of thousands of different games: about 1 billion videos per year now, on track for 3 billion this year, over 1.5 trillion labeled action tokens per month. Each recording links inputs and actions to the actual frames, and the actions carry semantic labels for interpretability.
3. Do not predict motor torque. Most robotics companies try to solve control end-to-end and predict exact poses or motor values. De Witte says humans cannot do that either — instead, every robot below a certain degree of freedom ships with a game controller, and the supply chains already work that way. Use that interface instead of rebuilding it.
4. Turn-based versus continuous is the LLM limit. Code is turn-based, so LLMs fit workloads where the future does not unfold while you predict. General Intuition's models continuously receive frames from a robot camera or a screen and predict everything as if it were a video game. The metaphor is Olaf in Frozen, who reassembles after rolling down the mountain because he observes as he acts.
5. High actions-per-minute (APM) data unlocks high-frequency control. Gamers take far more actions than teleoperators. For workloads that need many small corrections, such as flying a drone, start from game data rather than teleoperation, because the human teleoperator supplies much less information.
6. Learning in the human's native modality removes a slow pipeline. If a robot must learn from what a human shows it, you do not want that to pass through an LLM, a generated digital twin, deployment, and verifier checks. Models that learn from pixels learn by looking around, so they learn faster and run "significantly faster than any LLM" at these tasks [07:37:47].
7. JEPA is more correct but less practical. JEPA does not train alongside action labels; it infers them. De Witte calls it "the more correct approach" in the limit, but less practical in the short term because it needs a separate scaling law for action inference. His action data transfers better to action sequences than to pixel generation — you cannot tell a plane's rudder position from video frames.
8. Deploy behind an orchestrator and aim it at specific gaps. Pair the models with an orchestrator such as Gemini or Astra for long-term planning. Early use cases he names: UX intuitiveness testing (the model uses the interface like a human), accessibility (a user with one arm controls the mouse while the model predicts keyboard actions, and it skips the keys the user already presses), and agents that explore LLM- or Gemini-generated simulated environments so you do not have to.

## Notable quotes
> "I want you to zoom out for a second and think about if somebody were to tell you today that we would take all the information on the internet, and then we would train a model on it, and we would use that in order to solve scientific problems that were not on the internet." — [07:29:23 | 4:17:14 PM]

> "The total amount of data that Frontier Labs use today to train robotics models, we collect in, at the moment, half a day." — [07:35:47 | 4:23:39 PM]

> "We just bet on scaling pixel space the same way that anthropic scaled coding space, and betting that people will just, as we scale, data compute into pixel space, that people will bring more problems into pixel space." — [07:36:09 | 4:24:00 PM]

> "But we have essentially one model which can play video games at the highest level and control over 10 types of robots using the exact same primitives." — [07:39:36 | 4:27:27 PM]

## Session narrative
The MC, Alex Lieberman, handed over at 4:16 PM with a one-line teaser about "frontier models built to act in space and time" (the hand-off lines are also recorded in the adjacent segment 045). Pim de Witte opened with a framing bet: if someone told you we would train on all the information on the internet and then solve scientific problems that were not on the internet, you would call it crazy — and his company's work has the same shape. His central image was Olaf the snowman from Frozen, who tumbles apart down a mountain and reassembles. Olaf can do that because he observes as he acts. LLMs, which autoregressively predict tokens, cannot. That, he argued, is the fundamental gap between LLM demos and native architectures when they face robotics and other environments that unfold in space and time.

The core of the talk explained where the data comes from. General Intuition started with Medal, the world's largest video game recorder, which de Witte called "the internet" of this domain. People record tens of thousands of games, and because humans teleoperate robots with the same brain and often the same controller they game with, the action space of games matches the action space of the real world. The team labels the actions, ties them to frames, and trains a vision-based model: frames and a text prompt go in, controller actions come out. The scale numbers carried the argument — about a billion videos per year now, 3 billion expected this year, over 1.5 trillion action tokens per month, meaning frontier labs' entire robotics training corpus equals about half a day of collection. He framed the strategy as a repeat of Anthropic's play: Anthropic was never the best at raw text, it nailed coding and people moved problems into coding space; General Intuition scales pixel space and expects problems to move there.

The roadmap portion was concrete but demo-free — because the talk was on a livestream, he said he could not share the release videos without breaking the surprise, though the team is in New York and showing the model live on request. One model plays video games at the highest level and controls over 10 robot types in real time. Release is planned for late November or early December, with early access rolling out over the following months to waitlist signups in order. He sketched uses: an orchestrator model (he named Gemini and Astra) handles long-term planning while these models act; UX teams can test whether an interface is intuitive; a person with one arm can play games while the model predicts keyboard inputs; and the models can explore environments generated by other AI so humans do not have to. He closed the pitch with the team — New York City based, three teams (world modeling, policy/agent, and data plus environment generation), hiring engineers with the environment generation team as the best entry point — and three hackathons, the first in New York City mid-November and another in London.

The final minutes were audience Q&A, which also appears as the separate segment 047. Asked how the work differs from JEPA, de Witte answered that JEPA trains without action labels and bets on inferring them, which he judged more correct in the limit but less practical short term because it requires a second scaling law for action inference; General Intuition uses some JEPA concepts, and he expects ideas to flow both ways. He used a plane's rudder as the case for real action data: no amount of video frames tells you its position. He took one more question slot, thanked the audience at 4:35:42 PM, and left the stage for the final talk of the day.

## Speaker details
**Pim de Witte** - Co-Founder & CEO, General Intuition. Pim de Witte co-founded and leads General Intuition, a frontier lab for models that act in space and time. He previously founded Medal, the world's largest and fastest-growing platform for gaming clips, where millions of gamers share their best moments. Earlier he worked with Médecins Sans Frontières and, at 14, ran the largest Runescape private server. General Intuition recently raised $650M+ from Khosla and General Catalyst. Website: https://generalintuition.com

## Full timestamped transcript

Note: the automatic transcription renders some names phonetically. "Metal" and "Meta" refer to Medal, the gaming clip platform, and the MC's intro line renders the speaker's name as "Pim de Wit."

```
[07:28:53 | 4:16:45 PM] And now, let's take a look at frontier models built to act in space and time.
[07:28:59 | 4:16:51 PM] Please welcome co-founder and CEO of General Intuition, Pim de Wit.
[07:29:20 | 4:17:12 PM] Hello.
[07:29:23 | 4:17:14 PM] I want you to zoom out for a second and think about if somebody were to tell you today that we would take all the information on the internet, and then we would train a model on it, and we would use that in order to solve scientific problems that were not on the internet.
[07:29:39 | 4:17:30 PM] I think a lot of people would tell you that that's crazy.
[07:29:43 | 4:17:34 PM] And what we're doing has a lot of parallels to that story.
[07:29:49 | 4:17:40 PM] And so if you think about how intelligence works, imagine for a second that you're in the movie Frozen and you're Olaf, the snowman.
[07:30:00 | 4:17:52 PM] If Olaf was an LLM, and it—
[07:30:03 | 4:17:54 PM] There's a scene which is one of my favorites, which is where he rolls down the mountain, and there's a little stone that pops up, and Olaf spreads out, temporarily becomes a disassembled snowman, and then becomes an assembled snowman.
[07:30:17 | 4:18:08 PM] And Olaf knows how to do that because Olaf can observe as he is acting.
[07:30:23 | 4:18:14 PM] Olaf can, unlike LLMs, which autoregressively predict tokens, constantly, part of that behavior is that it's constantly observing as it is acting.
[07:30:34 | 4:18:26 PM] And so this is the big difference between, you know, when you see LLMs try to solve robotics problems or when you look at native architectures like what we're working on.
[07:30:45 | 4:18:37 PM] It's very, very easy to think of LLMs and the demos you see on Twitter as the thing that will solve everything.
[07:30:50 | 4:18:42 PM] There's fundamental limitations that we see where purpose-built models are much better fit.
[07:30:55 | 4:18:47 PM] Now, today I'm going to talk a little bit about what the other side of that coin looks like.
[07:31:01 | 4:18:53 PM] And so for us, it all started with Metal.
[07:31:05 | 4:18:56 PM] We built the largest video game recorder in the world, and we think of that as the internet.
[07:31:11 | 4:19:03 PM] So people use Metal to record themselves playing tens of thousands of different video games.
[07:31:17 | 4:19:08 PM] And if you think about it, as a human, we can teleoperate a robot with the exact same brain that we played that video game.
[07:31:27 | 4:19:18 PM] And in fact, in many cases, we also can use the same controller.
[07:31:35 | 4:19:27 PM] So what this means is that the action space of video games, often because of game controllers, and the action space of teleoperations, or the real world, in many cases is the same.
[07:31:45 | 4:19:36 PM] And so every single robot below certain degrees of freedom ships with the game controller.
[07:31:50 | 4:19:41 PM] A majority of the supply chains already work this way.
[07:31:52 | 4:19:44 PM] And so we thought, what if you just take all of the action data that we get through the video recorder, which associates the inputs and the actions with the actual frames.
[07:32:03 | 4:19:54 PM] We label the actions so we understand semantic meaning behind every action, and we use it to give it to a vision-based model.
[07:32:11 | 4:20:02 PM] And so what you see here on the left is just an intuitive way of how the model works.
[07:32:16 | 4:20:07 PM] So you give the model a set of keys to choose from, essentially a computer use model.
[07:32:21 | 4:20:13 PM] It gives frames as the input, so you can give it a text prompt as well.
[07:32:25 | 4:20:17 PM] And you send it through API, and you say somebody waves at you, wave back.
[07:32:30 | 4:20:21 PM] In the input space, the model understands that you have a greet action available.
[07:32:33 | 4:20:24 PM] It will output the action associated with that.
[07:32:37 | 4:20:28 PM] One way of intuitively understanding how this works.
[07:32:40 | 4:20:32 PM] So I've obviously simplified here because it's predicting the next token, not the next word, but bear with me here.
[07:32:48 | 4:20:40 PM] LLMs took large-scale internet data, then trained it to predict the next text token, and now use it for writing software.
[07:32:56 | 4:20:47 PM] And these are all workloads that are really, really well fit for futures that are not simultaneously unfolding as you are predicting, right?
[07:33:04 | 4:20:55 PM] Code is turn-based.
[07:33:05 | 4:20:57 PM] You can say something, the model will do something.
[07:33:08 | 4:20:59 PM] You can say something again, the model will do something again.
[07:33:11 | 4:21:02 PM] And you can use it for lots of valuable work, but at the end of the day, because it's turn-based, it's very, very difficult for it to generalize to environments, especially that include space and time.
[07:33:24 | 4:21:16 PM] And so our models, the way that they work is they're continuously receiving frames, or receiving batches of essentially information from the camera of the robot, or it could be a screen, and it predicts everything as if it were just a video game.
[07:33:43 | 4:21:34 PM] So you can think of the way that Anthropic focused on just nailing coding.
[07:33:48 | 4:21:39 PM] So, you know, they were never frontier in just base text generation.
[07:33:52 | 4:21:43 PM] They always focused on being the best at generating code.
[07:33:55 | 4:21:46 PM] And then what the bet that they made is that more people would start bringing more problems into coding space.
[07:34:00 | 4:21:51 PM] If you think of general intuition, our bet is that you can, as humans, we are generally Pixel-to-action converters plus senses, which in many cases you can convert into pixels as well, and you can output actions at the same time.
[07:34:14 | 4:22:06 PM] Those actions are, in this case, either a keyboard and mouse or a game controller.
[07:34:17 | 4:22:09 PM] So the output tokens of the model are essentially equivalent to that of an enhanced computer use model with more actions on the output space to internalize it.
[07:34:26 | 4:22:18 PM] So you send frames and you get actions.
[07:34:29 | 4:22:21 PM] This works, again, because every single thing that you see here can control all of these different embodiments, right?
[07:34:36 | 4:22:28 PM] So as humans, we do not know how to predict motor torque.
[07:34:46 | 4:22:37 PM] We do not know what value to send to a machine.
[07:34:50 | 4:22:42 PM] There is this beautiful device that has been made for many years, which actually does that work for us, so we can control them.
[07:34:57 | 4:22:49 PM] Most robotics companies today are trying to solve the problem at the end-to-end level, trying to predict exact poses or exact values in the motor, instead of just looking and picking up the thing that every robotics company has built to generalize our very limited abilities to have physics understanding and predict exact values and solve for it.
[07:35:25 | 4:23:17 PM] And so our approach is, let's just use that.
[07:35:29 | 4:23:21 PM] And so Meta, at the moment, sees about a billion videos uploaded per year.
[07:35:37 | 4:23:28 PM] This year we're on track for three billion, which lead to over a trillion and a half action tokens per month.
[07:35:45 | 4:23:36 PM] So just for comparison, think about the bet.
[07:35:47 | 4:23:39 PM] The total amount of data that Frontier Labs use today to train robotics models, we collect in, at the moment, half a day.
[07:35:55 | 4:23:46 PM] And so, the type of bet, and again, think of the fact that humans can use the exact same controllers and their eyes to play video games that they can't tell operate robots.
[07:36:08 | 4:23:59 PM] It is the same thing.
[07:36:09 | 4:24:00 PM] We just bet on scaling pixel space the same way that anthropic scaled coding space, and betting that people will just, as we scale, data compute into pixel space, that people will bring more problems into pixel space.
[07:36:22 | 4:24:14 PM] And so, what happens?
[07:36:26 | 4:24:17 PM] All of a sudden, you get an incredibly general agent that can go and solve problems on computers in the real world.
[07:36:39 | 4:24:30 PM] And in addition, similarly to how Anthropic focuses on doing coding environments, we focus on world models, which most of you know is for the Mira release world models, to then generate additional environments for these models to learn in.
[07:36:52 | 4:24:44 PM] One way of internalizing a big advantage of this approach against LLMs is if you're an LLM company and you have to bet on the ability to generate environments for your models to learn, you have two problems.
[07:37:06 | 4:24:57 PM] One, you actually need to spend the compute to simulate environments, and the more realistic you try to simulate, the more expensive that gets.
[07:37:13 | 4:25:05 PM] And so, imagine you want to learn a new thing.
[07:37:16 | 4:25:08 PM] You want to learn that new thing in the exact input space of the human, right?
[07:37:23 | 4:25:14 PM] So if we are learning from pixels, we're learning by looking around.
[07:37:26 | 4:25:18 PM] If I'm trying to communicate something, I want my robot partner to observe that exact same thing.
[07:37:32 | 4:25:23 PM] And so, what I don't want is for that to have to go through an LLM, for a digital twin to have to be created, for the model to have to get deployed, for there to be a bunch of verifier checks whether or not things are equivalent, and then for the robot to learn much later, right?
[07:37:47 | 4:25:39 PM] And so, one way of thinking about it is when you can learn in the native modality of the human, you can all of a sudden start solving a lot more problems a lot faster, which you'll see when these models come out is they are significantly faster than any LLM at doing these things.
[07:38:07 | 4:25:59 PM] Because games are so action dense, so what you see, right, is one thing that's interesting is you saw, for instance, the model predicting multiple actions at the same time.
[07:38:17 | 4:26:08 PM] We're able to take that action density from gamers and convert them into really complex robotics workloads.
[07:38:24 | 4:26:15 PM] So, for example, if you are operating a drone and you need to make lots of little adjustments, you really, really, really want to start with games.
[07:38:31 | 4:26:23 PM] You don't want to start with teleoperations because the human will just take a lot less actions.
[07:38:36 | 4:26:27 PM] It has a lot less information.
[07:38:37 | 4:26:28 PM] So you want a model that can predict really high APM.
[07:38:41 | 4:26:32 PM] And so the APM of the dataset puts a lot of these problems all of a sudden in reach so that it can do a lot of these actions simultaneously.
[07:38:48 | 4:26:40 PM] And as I mentioned, the model doesn't just understand the key it's predicting.
[07:38:52 | 4:26:44 PM] It also understands the semantic meaning associated with that key it's predicting, which is really important for things like interpretability.
[07:39:01 | 4:26:52 PM] So we will be releasing the models this year.
[07:39:06 | 4:26:57 PM] We are very happy.
[07:39:08 | 4:26:59 PM] I think the correct word would be that we're stunned by the fact of what these models can do.
[07:39:17 | 4:27:09 PM] This is a live stream, so I unfortunately couldn't share the release videos without breaking the surprise.
[07:39:23 | 4:27:14 PM] But if you're in New York, we are also in New York.
[07:39:25 | 4:27:17 PM] And so we have started doing a few demos of the model.
[07:39:29 | 4:27:20 PM] So if you know somebody on the team, reach out and we can start showing you some of the capabilities live.
[07:39:36 | 4:27:27 PM] But we have essentially one model which can play video games at the highest level and control over 10 types of robots using the exact same primitives.
[07:39:45 | 4:27:36 PM] So pixels in, actions out, completely real time.
[07:39:48 | 4:27:40 PM] And we'll be rolling out early access to these models over the next few months.
[07:39:53 | 4:27:45 PM] We already have some customers that are on them, but it's still private, so you're not hearing too much about it.
[07:39:59 | 4:27:50 PM] But if you scan this QR code.
[07:40:00 | 4:27:52 PM] You'll be able.
[07:40:01 | 4:27:53 PM] You'll be able to get the models because we go by who signs up on the waitlist at which times.
[07:40:09 | 4:28:01 PM] So this is a great moment to get in touch.
[07:40:13 | 4:28:04 PM] As I mentioned, we are in New York.
[07:40:14 | 4:28:05 PM] I think what you'll find is similar to how Jev and a lot of these decision-making models have kind of opened people's eyes on what you can do when you have a new architectural primitive.
[07:40:25 | 4:28:16 PM] People are ready to kind of do away with the unpredictability of an LLM and put something in that is more reliable and faster, and you just understand how it's going to react as opposed to having to work around it.
[07:40:35 | 4:28:27 PM] If that resonates, these models are exactly what you're looking for.
[07:40:39 | 4:28:31 PM] And all of a sudden, you can start exploring the environments that you generate with LLMs.
[07:40:46 | 4:28:38 PM] All of a sudden, one of the use cases that I'm really, really excited about is, well, these models, they can take actions as if a human was on the interface.
[07:40:56 | 4:28:47 PM] And so if you're doing UX work and you're trying to understand, is this an intuitive interface?
[07:41:01 | 4:28:53 PM] Well, this is a very interesting way of solving the problem.
[07:41:03 | 4:28:55 PM] So all these problems that LLMs can't solve because they can't actually explore like a human, you can start using these models for.
[07:41:12 | 4:29:03 PM] So the way that they're going to be released is we still expect you to use an orchestrator model.
[07:41:20 | 4:29:12 PM] So you may use something like Gemini or Astra in order to do long-term planning and everything, and you'll be able to plug these into your workloads.
[07:41:27 | 4:29:19 PM] And we're actually—the models are so general, it is genuinely going to, I think, feel like the early LLM days when you have a new toy and you just want to figure out what it does and all the things you can use it for.
[07:41:42 | 4:29:33 PM] My reaction was like that when I first started using the checkpoints, and I think you'll have the same reaction.
[07:41:50 | 4:29:41 PM] And I think a lot of you will, just like with LLMs, if you're a bit early and you start understanding these primitives, I think you'll understand that you can even build lots of businesses on top of this, right?
[07:42:02 | 4:29:53 PM] You know, think about, for instance, a science lab, right?
[07:42:08 | 4:29:59 PM] If you, all of a sudden, if you can reliably orchestrate robots in space and time, and they can take text instructions and do things, all of a sudden, this is a recursive problem, right?
[07:42:20 | 4:30:12 PM] Robotics is interesting because one of the big problems of solving robotics is making more robots.
[07:42:24 | 4:30:16 PM] And so there are all these businesses that, because it's so bottlenecked by intelligence, are going to emerge just from solving this one simple problem, which is pixels to actions.
[07:42:35 | 4:30:26 PM] And I think if you're early on getting your hands on these, it will have a similar effect on getting your hands on early LLMs.
[07:42:45 | 4:30:37 PM] I am most excited also, one of the things that we're working on, which is interesting, is if you have any friends or family who are in some way need accessibility help for using their computer, because these models can use computers like a human, all of a sudden, for instance, if you only can use one arm, all of a sudden the model can allow you to play video games because you can just control the mouse, and the model is predicting the actions for your keyboard.
[07:43:16 | 4:31:08 PM] And because the model also understands which actions you're predicting, because that's the input, right?
[07:43:20 | 4:31:12 PM] It's observing as it's acting, it will actually just not predict the things that you're doing, and it will just predict the keys.
[07:43:27 | 4:31:19 PM] And so it has all these downstream effects of things that you can build on top that—I'm an engineer.
[07:43:32 | 4:31:24 PM] If you're interested in building in this space.
[07:43:35 | 4:31:27 PM] This is going to be the most interesting toy that comes out this year.
[07:43:41 | 4:31:33 PM] I'm fairly certain.
[07:43:43 | 4:31:35 PM] And I also think a lot of the initial usage will sit in simulation.
[07:43:46 | 4:31:37 PM] So if a lot of you are into generating environments with Astra or with Gemini, it's perfect.
[07:43:50 | 4:31:41 PM] Now all of a sudden you can have something that can explore it, and you don't have to do it yourself.
[07:43:55 | 4:31:47 PM] And it's perfect timing because of all the environment generation capabilities going into these models.
[07:44:02 | 4:31:54 PM] Okay, so really quickly before I wrap up, I want to talk about the team.
[07:44:08 | 4:31:59 PM] So we are based in New York City.
[07:44:11 | 4:32:03 PM] The metal team and the general intuition team is here in New York City.
[07:44:14 | 4:32:05 PM] So if you're here, you should reach out to us, and we can both show you the models, especially if you want to join the team.
[07:44:21 | 4:32:12 PM] I think we'll prioritize even higher.
[07:44:24 | 4:32:16 PM] But we really are looking for people who, A, want to understand these models as much as we do.
[07:44:33 | 4:32:25 PM] So people, if you're really, really good at generating novel environments, typically if you have some sort of research background, but I don't have a research background, so that's okay.
[07:44:42 | 4:32:34 PM] If you come from an engineering background and you're very, very happy to learn, this is fine too.
[07:44:47 | 4:32:39 PM] And ideally what we want is somebody who has experience shipping end-to-end AI products, but it doesn't have to be on the research side.
[07:44:58 | 4:32:50 PM] So we just want to kind of hire people that understand the entire thing.
[07:45:04 | 4:32:55 PM] Let's see.
[07:45:05 | 4:32:56 PM] We have three teams.
[07:45:06 | 4:32:58 PM] So one is world modeling, the other is the policy, so the agent, and the other one is working on essentially the data generation and the environment generation.
[07:45:15 | 4:33:07 PM] So these are the main teams.
[07:45:16 | 4:33:08 PM] If you're an engineer, the best one to join is probably the environment generation team, and then you sort of grow into getting access to the other ones.
[07:45:25 | 4:33:17 PM] Yeah, I'm very, very excited for November.
[07:45:27 | 4:33:19 PM] I really hope that you'll be on the lookout.
[07:45:32 | 4:33:23 PM] As I mentioned, it will be either late November, early December is the current planning.
[07:45:37 | 4:33:28 PM] One more thing.
[07:45:38 | 4:33:29 PM] We are going to organize three hackathons.
[07:45:41 | 4:33:32 PM] So the first is going to be in New York City.
[07:45:44 | 4:33:36 PM] It will be mid-November.
[07:45:45 | 4:33:37 PM] And we will send out—if you sign up for the partner waitlist, we'll send out some emails so that everybody can get access.
[07:45:53 | 4:33:44 PM] We hope to see everybody at the hackathons.
[07:45:55 | 4:33:46 PM] I think it will be really the first time to get your hands on them the way that we're playing with them internally now.
[07:45:59 | 4:33:50 PM] And there will be one in New York City and one in London.
[07:46:03 | 4:33:54 PM] So if you're in either of those cities or want to travel to either of those cities, those would be good times to meet the team.
[07:46:09 | 4:34:00 PM] Yeah, let's see.
[07:46:12 | 4:34:04 PM] I have time for one or two questions, and then I think we can wrap.
[07:46:19 | 4:34:11 PM] Yeah, how's it different from JEPA?
[07:46:29 | 4:34:20 PM] So JEPA doesn't train alongside the action labels, so they bet on inferred action labels for the most part.
[07:46:35 | 4:34:26 PM] Which I think, like, one of the ways of thinking about it is JEPA, I think, in the limit is the more correct approach, but it's just a lot less practical in the short term because you need to bet on a separate scaling law on the action inference itself.
[07:46:45 | 4:34:37 PM] And we really like JEPA as a concept.
[07:46:48 | 4:34:40 PM] We think it's a, you know, we use some of the things in the models.
[07:46:54 | 4:34:45 PM] But at the end of the day, it's an approach, not a product.
[07:46:59 | 4:34:51 PM] And I think we'll, you know, borrow concepts both ways.
[07:47:06 | 4:34:58 PM] One way of thinking about it is because we have so much action data, let's say you're flying a plane and you're moving the rudder in the back.
[07:47:15 | 4:35:06 PM] There's no way of being able to tell that from the video frames.
[07:47:19 | 4:35:11 PM] It's very, very difficult.
[07:47:20 | 4:35:12 PM] So our mode on having the action data really transfers better to action sequences than it does to world models and to generating the pixels.
[07:47:28 | 4:35:20 PM] And that's why we just went all in on training these general foundation models for action predictions, and we use all sorts of techniques to do world models.
[07:47:36 | 4:35:28 PM] You know, our own, we really like other companies building them as well.
[07:47:41 | 4:35:32 PM] Great.
[07:47:41 | 4:35:32 PM] New one more and then I got to run, I think.
[07:47:47 | 4:35:39 PM] Great.
[07:47:48 | 4:35:40 PM] All right.
[07:47:49 | 4:35:41 PM] Thank you, everyone.
[07:47:50 | 4:35:42 PM] Have a good one.
```
