# AI Engineer NYC 2026 livestream — master transcript

- Video: https://www.youtube.com/watch?v=akEqiXFo3GM (8h 05m 50s)
- Stream start: 2026-10-13 08:47:52 ET (t=0)
- Text: OpenAI `gpt-transcribe`; timing: OpenAI `whisper-1` segment timestamps
- Timestamps: `[video time | wall clock ET]`

[00:08:11 | 8:56:03 AM] Good morning, and welcome to AI Engineer New York 2026.
[00:08:11 | 8:56:03 AM] We're thrilled to have you with us as we kick off an event of big ideas, sharp perspectives, and plenty of signal cutting through the noise.
[00:08:11 | 8:56:03 AM] To officially open the event for us this morning, please welcome to the stage AI Engineer's General Manager, Leah McBride.
[00:08:11 | 8:56:03 AM] Hi.
[00:08:12 | 8:56:03 AM] Good morning, everyone, and welcome to New York.
[00:08:16 | 8:56:08 AM] This is our third event in New York.
[00:08:19 | 8:56:11 AM] We had two in 2025 with some of our greatest speakers that we've ever had at AI Engineer.
[00:08:25 | 8:56:17 AM] So we're really excited to be back.
[00:08:27 | 8:56:19 AM] So just a huge welcome from myself and Swyx to everyone.
[00:08:30 | 8:56:22 AM] Thanks for attending today.
[00:08:32 | 8:56:24 AM] We hope you're going to have a great few days.
[00:08:34 | 8:56:26 AM] There's very, very few places like New York City, as we know, where big ideas scale very, very fast.
[00:08:43 | 8:56:35 AM] It is where frontier AI comes to meet centuries-old global financial institutions and where multiple different economies thrive together.
[00:08:52 | 8:56:44 AM] So we're excited to have an incredible lineup.
[00:08:55 | 8:56:47 AM] You're going to hear from some of the world's best speakers, just like at all our events.
[00:09:02 | 8:56:54 AM] We've got tracks in finance.
[00:09:04 | 8:56:56 AM] We've got engineering leadership, evals, and LLM.
[00:09:10 | 8:57:02 AM] We've got Parna Dinakaran — going to get that right — from Arize.
[00:09:15 | 8:57:07 AM] We've got Max Kanat-Alexander from Capital One and Tariq Shakked from Sonar.
[00:09:21 | 8:57:13 AM] That's just a few of the incredible speakers that we've got this week.
[00:09:25 | 8:57:16 AM] I want to say a huge thank you to Arize, who's our presenting sponsor.
[00:09:29 | 8:57:21 AM] You guys can go and meet their team in the expo at any point this week.
[00:09:34 | 8:57:26 AM] So lean in to learning here.
[00:09:37 | 8:57:29 AM] Lean in to connecting as well.
[00:09:39 | 8:57:31 AM] There's so many people here that are sharing ideas.
[00:09:43 | 8:57:35 AM] They want to talk about the ideas, they want to challenge ideas, and they want to collaborate as well.
[00:09:49 | 8:57:41 AM] So make sure to speak to as many people as possible, your attendees, speakers, and all the sponsors.
[00:09:55 | 8:57:47 AM] And we hope to see you again soon.
[00:09:57 | 8:57:49 AM] We do have a great lineup.
[00:09:59 | 8:57:51 AM] We've got another event called Summit in San Francisco in November.
[00:10:03 | 8:57:55 AM] And then we have London lined up in February.
[00:10:03 | 8:57:55 AM] And then, of course, World's Fair.
[00:10:03 | 8:57:55 AM] And we've got a couple of other events happening next year as well that are new.
[00:10:03 | 8:57:55 AM] So keep an eye on the schedule.
[00:10:03 | 8:57:55 AM] But have a wonderful few days.
[00:10:03 | 8:57:55 AM] Thank you so much.
[00:10:03 | 8:57:55 AM] Take care.
[00:10:03 | 8:57:55 AM] And now, please welcome to the stage your MC for the day, Managing Partner at 10X, Alex Lieberman.
[00:10:30 | 8:58:21 AM] What's up, everyone?
[00:10:31 | 8:58:22 AM] How's it going?
[00:10:32 | 8:58:23 AM] There we go.
[00:10:33 | 8:58:24 AM] Before we hop into the official stuff, I just want to start by introducing myself and asking you a quick question.
[00:10:35 | 8:58:26 AM] I'm Alex Lieberman.
[00:10:36 | 8:58:27 AM] I'm one of the co-founders and co-managing partners at 10X.
[00:10:37 | 8:58:28 AM] We're an applied AI company working with Fortune 500 businesses to become AI native.
[00:10:38 | 8:58:29 AM] Before that, I co-founded a business called Morning Brew, which makes business news suck a little bit less.
[00:10:44 | 8:58:35 AM] My question for you is, who in the room, raise your hand if you are healthily addicted to X, or formerly known as Twitter.
[00:11:09 | 8:59:00 AM] Okay, a lot of people are lying in the room.
[00:11:12 | 8:59:04 AM] I spend a lot of time on X, and one of the reasons that I spend a lot of time on X is because I feel like I get to live in the future, right?
[00:11:24 | 8:59:15 AM] When you're scrolling through X, when you're looking at the commentary on the platform, you feel like you're seeing what will become consensus in three, six, or 12 months.
[00:11:35 | 8:59:27 AM] And what I love about this conference and why I get so excited to come to it every single year is because this almost feels like X on steroids.
[00:11:46 | 8:59:38 AM] There's this concept that a friend told me a while back called edge city, and edge city is this concept that At any point in some part of the world, there are a group of people that are living in the future in a specific function or specialty.
[00:12:03 | 8:59:54 AM] And the way I think about this conference is we are all living in Edge City for what will be consensus in the next six months to two years, if you really think about the diffusion of this technology.
[00:12:16 | 9:00:07 AM] So I'm super excited to be part of this with you all today.
[00:12:19 | 9:00:10 AM] And now let's hop into what's going to happen.
[00:12:21 | 9:00:13 AM] First of all, welcome to AI Engineer New York 2026, where AI engineering meets Wall Street.
[00:12:28 | 9:00:20 AM] This is the conference for engineers and technical leaders building production AI across banking, hedge funds, fintech, insurance, and asset management.
[00:12:39 | 9:00:31 AM] Over the next two days, we will hear from companies and leaders sparking discussion not only on models, agents, infra, compute, dev tools, and evals, but then how they weave and shape the financial industry, impacting hedge funds, investors, banks, insurance, fintech, and security.
[00:12:58 | 9:00:50 AM] Of course, as you all can tell, there's a lot going on.
[00:13:02 | 9:00:53 AM] Putting together a gathering like this requires a huge amount of effort, and it could not be done without our sponsors.
[00:13:08 | 9:01:00 AM] But before our sponsors, let's all just give a huge shout out to the AIE team.
[00:13:13 | 9:01:04 AM] What they do is incredible.
[00:13:16 | 9:01:07 AM] Now, let's give some flowers to the sponsors.
[00:13:22 | 9:01:13 AM] First up, the presenting sponsor, Arize.
[00:13:24 | 9:01:16 AM] Let's give it up for Arize.
[00:13:26 | 9:01:18 AM] Yeah, Arize.
[00:13:30 | 9:01:21 AM] Next up, the platinum sponsors: Oracle, Sonar, WorkOS, and Exa.
[00:13:34 | 9:01:26 AM] Let's give it up for them.
[00:13:38 | 9:01:30 AM] Then we have our gold sponsors.
[00:13:39 | 9:01:31 AM] If I had enough time, I'd rattle all of them off.
[00:13:42 | 9:01:34 AM] And finally, the silver sponsors.
[00:13:45 | 9:01:36 AM] But wait, there's more: the supporting sponsors.
[00:13:48 | 9:01:40 AM] Awesome.
[00:13:50 | 9:01:41 AM] So we are going to hop into the first keynote of the day.
[00:13:57 | 9:01:48 AM] We have two amazing folks from Bridgewater who are in the weeds of production AI every single day.
[00:14:04 | 9:01:56 AM] So let's give it up for them.
[00:14:06 | 9:01:58 AM] Welcome, guys.
[00:14:12 | 9:02:04 AM] Coming up next, we're delighted to welcome two speakers from Anthropic.
[00:14:18 | 9:02:09 AM] Please put your hands together for Belinda Neal, Managing Director of Financial Services, and Keon Shahab, Applied AI Architect.
[00:14:29 | 9:02:21 AM] Just waiting for our slides.
[00:14:44 | 9:02:36 AM] There we go.
[00:14:46 | 9:02:38 AM] Good morning, everyone.
[00:14:47 | 9:02:39 AM] I'm Sam Green, team lead for Applied AI at Bridgewater Associates, and this is my colleague Aaron Linsky.
[00:14:55 | 9:02:46 AM] And today we're here to talk to you about the Vault, the data platform that we've built at Bridgewater to turn unstructured data into a first-class asset in our investment process.
[00:15:05 | 9:02:57 AM] And as part of the talk this morning, we'd like to share three lessons that we've learned building the Vault.
[00:15:11 | 9:03:02 AM] The first is that humans and agents have very different needs from a data platform, and so you have to build for those different needs separately.
[00:15:21 | 9:03:12 AM] The second is that the greatest impact occurs when a single tool can meet both of these sets of needs at the same time.
[00:15:27 | 9:03:19 AM] And the third is that the real prize is when you can build the foundations needed to make agents a proactive participant in your investment process or whatever you're doing with your tools.
[00:15:39 | 9:03:30 AM] Instead of a reactive tool for your humans to use.
[00:15:46 | 9:03:37 AM] Before I dive deeper into talking about the vault, I wanted to start with some background about Bridgewater.
[00:15:51 | 9:03:43 AM] Over the last 50 years, Bridgewater has been in the constant pursuit of the world's best understanding of how markets and economies work, and turning that into a systematic encoding that we can use to stress test our logic over time.
[00:16:06 | 9:03:57 AM] And what originally began as a set of if-then rules on a yellow legal pad evolved into a continuous compounding process with humans at the center, constantly looking for the next thing that's changing in markets.
[00:16:18 | 9:04:10 AM] And more recently, we've been working on building AIA, the Artificial Investment Associate, which puts a machine at the center of this continuous process.
[00:16:27 | 9:04:19 AM] Across all these phases of evolution, we've had a constant philosophy in mind, which is that we want to be constantly looking at how the world is changing and what's going on in the world, noticing what dynamics are not yet encoded in our understanding, and use that learning to improve and compound for the future.
[00:16:49 | 9:04:40 AM] For most of Bridgewater's history, that meant building and overseeing time series models on structured data.
[00:16:55 | 9:04:47 AM] And that structured data needed to be carefully built so that it could be safe for use in our research process and aligned to our internal ontology and world model so that we could get great leverage out of using the data that we had built.
[00:17:10 | 9:05:01 AM] With the emergence of language models, we had a huge new opportunity to engage with a much wider world of data.
[00:17:16 | 9:05:08 AM] You know, news and research, transcripts, policy documents, and all of the internal conversation that was previously just in the ether.
[00:17:25 | 9:05:16 AM] So the internal memos and meeting transcripts and debate happening inside the firm.
[00:17:30 | 9:05:21 AM] We quickly realized that all of that data needed the exact same treatment to be fit for purpose.
[00:17:36 | 9:05:27 AM] It needed to be carefully cleaned, governed, and made ready for use in both point-in-time research questions today and also our systematic study over time.
[00:17:47 | 9:05:39 AM] And when we looked out at the landscape of data vendors and data platform providers, there was nothing that provided us with all of the control that we needed to build and maintain our data advantage.
[00:18:00 | 9:05:51 AM] And so we built the Vault, which is our repository of external and internal unstructured data, and the platform that indexes, organizes, and makes all of it ready for use by our human investors and agents.
[00:18:15 | 9:06:06 AM] Today, the Vault has more than 100 million documents in it, with thousands more added every day, minute by minute, from 135 external sources and, again, growing all the time, as well as all of the data from inside of Bridgewater.
[00:18:29 | 9:06:21 AM] And crucially, all that data is not just dumped on our investors' desks; it is carefully aligned to our internal ontology with enrichments like the countries, concepts, markets, and most importantly, time period discussed in the document.
[00:18:48 | 9:06:39 AM] To bring this to life, I want to start with a quick motivating example.
[00:18:51 | 9:06:43 AM] So what I did here is I asked a fairly basic representative investment question to an enterprise chat client.
[00:19:00 | 9:06:51 AM] I asked, How is AI infrastructure investment impacting the Korean won, and do market participants expect this to continue?
[00:19:07 | 9:06:59 AM] And as you're all, I'm sure, familiar with, the agent goes to the web and looks for resources it can draw on because I've explicitly asked it to go find other people's perspectives on the question.
[00:19:21 | 9:07:12 AM] And you can see it zooms in and it finds 15 relevant-looking resources to draw on before it gives me back its answer.
[00:19:30 | 9:07:22 AM] And when I zoomed in on the answer it gave back, a couple of things stood out to me.
[00:19:34 | 9:07:25 AM] The first is that even though it found 15 relevant-looking sources, it only picked one or two to answer my question.
[00:19:42 | 9:07:34 AM] And the second is down at the end of this response, where the agent itself acknowledges that it hasn't answered my question.
[00:19:49 | 9:07:41 AM] It didn't find enough documents on the open web to establish a market consensus and meet the parameters that I laid out.
[00:19:58 | 9:07:50 AM] When I double-clicked even further, the problem got even worse.
[00:20:00 | 9:07:52 AM] One of the notes that it primarily drew on to answer my question was published way back in July of 2026, even though I asked this question and captured this answer just at the end of last week in early October.
[00:20:16 | 9:08:08 AM] In the age of AI and in investing, three months is a massive amount of time.
[00:20:22 | 9:08:13 AM] It's not even close to good enough to draw on this resource to answer my question.
[00:20:28 | 9:08:20 AM] When I asked this exact same query attached to the vault, something totally different happens.
[00:20:34 | 9:08:26 AM] The first is that the connection to the vault helps to prompt the agent that it should look for a specific period of time when answering my question.
[00:20:41 | 9:08:32 AM] So it zooms in on October 1st to October 8th.
[00:20:44 | 9:08:36 AM] It finds a much wider array of resources, 52 candidate documents that are relevant to the query over this specific period of time because of the vault's much more significant corpus of content that's relevant to investing questions.
[00:20:59 | 9:08:50 AM] And when it ultimately answers my question, it draws on seven instead of only one or two and gives me back a rich answer that the agent is more confident is going to address my question.
[00:21:12 | 9:09:03 AM] And so for us, this is the big lesson from building the vault to kind of motivate the talk today, which is that it takes great data and the right connectors to make agents impactful.
[00:21:22 | 9:09:13 AM] And I'm going to hand it over to Aaron now to talk about some of the product engineering takeaways from building the vault.
[00:21:27 | 9:09:18 AM] Thanks, Sam.
[00:21:28 | 9:09:19 AM] So hi, I'm Aaron.
[00:21:30 | 9:09:21 AM] I run product engineering at Bridgewater.
[00:21:32 | 9:09:24 AM] I'm going to take us through a few of our learnings from building the vault over the past few years.
[00:21:37 | 9:09:28 AM] I'm going to start with one that might seem obvious, but I still think it's worth saying, which is search is hard.
[00:21:46 | 9:09:37 AM] But it gets even harder if we're designing for two different consumers.
[00:21:50 | 9:09:41 AM] And in this case, we're designing for humans and agents.
[00:21:52 | 9:09:44 AM] I'm going to go over the difference here, starting with us.
[00:21:56 | 9:09:47 AM] So humans need precision and a high signal-to-noise ratio because we can only read so much.
[00:22:02 | 9:09:53 AM] Even a fast reader manages about 300 words a minute, and personally, I'm much slower.
[00:22:08 | 9:10:00 AM] Agents are a different kind of reader.
[00:22:10 | 9:10:02 AM] They're far less sensitive to precision.
[00:22:13 | 9:10:04 AM] If the data is there, they'll find it.
[00:22:15 | 9:10:07 AM] And basically anything you hand to them will get attended to.
[00:22:19 | 9:10:11 AM] They scale super quickly, and they consume about 100 times faster, 30,000 words per minute.
[00:22:28 | 9:10:19 AM] And so we need to build Vault for both of these.
[00:22:30 | 9:10:22 AM] And when we're thinking about the dimensions that matter, there are these five on the board: recall, precision, filtering, entitlements, and scale.
[00:22:42 | 9:10:33 AM] Some of them matter to people, some matter more to agents, many to both.
[00:22:46 | 9:10:38 AM] I'm going to go deep on three of these: precision for people, scale for agents, and then filtering for both.
[00:22:54 | 9:10:45 AM] So, precision.
[00:22:56 | 9:10:48 AM] Once we'd filled the vault, which was a heroic effort by our data and legal teams, recall was no longer a pressing issue.
[00:23:05 | 9:10:56 AM] However, the number one complaint was, Vault search is bad.
[00:23:09 | 9:11:01 AM] As the product owner, it's painful to hear that, but my response was, Let's benchmark it.
[00:23:15 | 9:11:06 AM] And that's what we did.
[00:23:16 | 9:11:08 AM] We collected questions and found the best documents by hand, including ones that looked helpful but weren't.
[00:23:23 | 9:11:15 AM] In total, it was about 200 examples, and it took us less than a week.
[00:23:27 | 9:11:18 AM] It was not fun or very glamorous, but it was very helpful.
[00:23:32 | 9:11:23 AM] And after we ran it, it was very clear: search was bad.
[00:23:36 | 9:11:27 AM] The key metric we were looking at is precision at 10, which is, of the top 10 results, how many are the right documents?
[00:23:44 | 9:11:36 AM] And we were hitting about 60%.
[00:23:47 | 9:11:38 AM] So the people were right, it was bad.
[00:23:50 | 9:11:41 AM] But now we had a way to measure all of the improvements.
[00:23:53 | 9:11:45 AM] And here on the board are five of them.
[00:23:56 | 9:11:47 AM] And by the time we got done with agentic search, we were up in the 90, 95% recall at 10, or precision at 10.
[00:24:04 | 9:11:55 AM] All right, so that was precision.
[00:24:07 | 9:11:59 AM] Now on to filtering.
[00:24:10 | 9:12:01 AM] Like anyone, we want the most relevant documents.
[00:24:13 | 9:12:04 AM] But when we looked at the production traces, what we were seeing is that almost always there was some condition, either as of a certain date, or from a certain source, or about a specific asset.
[00:24:25 | 9:12:17 AM] And all of that requires advanced filtering.
[00:24:27 | 9:12:19 AM] And that's where we ran into our first major performance issue.
[00:24:31 | 9:12:23 AM] So I'm going to quickly go through this, a little bit technical here.
[00:24:37 | 9:12:28 AM] There's classically two ways to filter a vector database.
[00:24:42 | 9:12:33 AM] Post-filtering will use that vector index first and then filter the top results by metadata.
[00:24:47 | 9:12:38 AM] It's fast, but recall could be pretty low because the globally relevant results might not match your filters.
[00:24:55 | 9:12:46 AM] On the other side, we have pre-filtering, where we'll filter first and then calculate distances for every one of those matches.
[00:25:02 | 9:12:53 AM] The advantage there is that the recall is very good, but it can be very slow, and we needed something in between.
[00:25:08 | 9:13:00 AM] So that's what led us to try and then ultimately switch to TurboPuffer.
[00:25:12 | 9:13:03 AM] Their approach, which they call native filtering, looks only in the nearest clusters that contain matches and then scores just those.
[00:25:19 | 9:13:10 AM] What you end up getting is something that's fast like post-filtering, but with close to the same recall as pre-filtering.
[00:25:28 | 9:13:19 AM] And lastly, I'm going to talk about scale.
[00:25:31 | 9:13:23 AM] Human scale for us is pretty pedestrian: 100 queries an hour.
[00:25:34 | 9:13:26 AM] We have 300 users.
[00:25:36 | 9:13:27 AM] They're going to search, you know, every so often.
[00:25:38 | 9:13:30 AM] It takes our users minutes to read the docs that they're receiving.
[00:25:42 | 9:13:34 AM] Agents, on the other hand, are a few orders of magnitude beyond that.
[00:25:48 | 9:13:39 AM] Easily 100-plus queries a second, and agent swarms can hit thousands easily.
[00:25:53 | 9:13:44 AM] And they obviously will read, as I said earlier, will read docs in seconds.
[00:25:56 | 9:13:48 AM] So we need something that could scale as well.
[00:25:59 | 9:13:51 AM] And again, TurboPuffer handled that easily too.
[00:26:03 | 9:13:55 AM] So we were covering all five dimensions.
[00:26:05 | 9:13:57 AM] I didn't talk about entitlements, but I'll be talking about that later today.
[00:26:09 | 9:14:00 AM] But we covered it all.
[00:26:10 | 9:14:02 AM] It unlocked new workflows, but it didn't change how our researchers worked.
[00:26:16 | 9:14:07 AM] They still weren't coming to Vault every morning.
[00:26:19 | 9:14:10 AM] And that's my second lesson that I want to share here, is that no matter how amazing the tools are, we can't just drop them on our investors' desks and expect them to be used.
[00:26:28 | 9:14:19 AM] We need to migrate their old habits into a new form.
[00:26:34 | 9:14:25 AM] And so we looked at what they were already doing.
[00:26:37 | 9:14:29 AM] Many of them were living in email.
[00:26:38 | 9:14:30 AM] The research came straight from the brokers.
[00:26:41 | 9:14:32 AM] They had subscribed lists.
[00:26:42 | 9:14:33 AM] They had rules that filtered everything into folders.
[00:26:45 | 9:14:37 AM] It worked.
[00:26:46 | 9:14:38 AM] It was familiar.
[00:26:48 | 9:14:39 AM] And they knew that they weren't missing anything.
[00:26:50 | 9:14:42 AM] So we had to build all of these features into the Vault.
[00:26:54 | 9:14:45 AM] That's exactly what we did.
[00:26:55 | 9:14:47 AM] Everything searchable.
[00:26:56 | 9:14:48 AM] The subscribed lists became saved searches, and folders became saved collections.
[00:27:02 | 9:14:53 AM] It's the same habits, just a new home.
[00:27:04 | 9:14:56 AM] And once we had them there, we can open up new habits.
[00:27:07 | 9:14:59 AM] So they can ask questions across all the data, as Sam showed.
[00:27:12 | 9:15:03 AM] They can follow dynamic feeds by topic, and they can hand those collections over to their agents to take further action.
[00:27:18 | 9:15:10 AM] And that's when we clearly had product-market fit.
[00:27:22 | 9:15:14 AM] And once we had that fit, the users wanted it everywhere, so we put it in chat.
[00:27:26 | 9:15:18 AM] We made a phone app.
[00:27:28 | 9:15:19 AM] It's in Slack and their IDE, and of course, we availed all of that to the agents as well, including a CLI because agents love CLIs.
[00:27:37 | 9:15:29 AM] And so the main question here is, okay, so what does this enable?
[00:27:40 | 9:15:32 AM] Sam is going to talk about what we're building right now, but first and foremost, it's helping us to move around that research circle faster.
[00:27:49 | 9:15:41 AM] With our pocket analyst, which is our first AI analyst, it can do hours of research in just a few minutes for a few dollars, and that's relying on the vault.
[00:28:01 | 9:15:52 AM] And then we're expanding that now with the researcher, which is the next generation.
[00:28:04 | 9:15:56 AM] It's the same idea stretched across days or weeks.
[00:28:09 | 9:16:01 AM] We're also able to train custom models to more intelligently reason over the vault's data and use those together with other foundation models to feed systematic decision-making processes.
[00:28:20 | 9:16:11 AM] The forecaster is our first one, which produces AI-generated macro-relevant predictions.
[00:28:26 | 9:16:18 AM] And then we also have built investment signals from the vault, turning unstructured data into structured tradable strategies.
[00:28:35 | 9:16:26 AM] Now I'll hand it to Sam to take us through Vault's latest capability.
[00:28:42 | 9:16:33 AM] So, like I alluded to at the beginning of the talk, the real prize is when you can take agents from a reactive resource that can be ready to answer a human's question and instead make them proactive participants, helping to steer your high-value professionals towards the most important areas for their attention.
[00:29:02 | 9:16:53 AM] And the way that we're solving that problem is in an experience we're calling the investor workbench, where the Agent is always on, tracking what's important to that investor and presenting them with the areas that are most in need of their attention.
[00:29:17 | 9:17:08 AM] It looks like an experience like this that relies on the vault, where a topic is proposed and several pieces of information are presented to the investor to decide whether they should dig deeper or ignore that topic entirely.
[00:29:30 | 9:17:21 AM] You can see here the card that an investor sees in order to decide whether to dig in deeper into the same AI impact on currencies question that we looked at earlier in the talk.
[00:29:40 | 9:17:31 AM] And the investor receives everything they need: an agentic summary if they want a quick scan across the agent's findings.
[00:29:47 | 9:17:39 AM] They also get the exact evidence that the agent was drawing on so that they can assess for themselves what was leading to this recommendation.
[00:29:56 | 9:17:47 AM] And if they choose to dig deeper, they have a direct connection to the research output from the analytical tools that Aaron was just...
[00:30:02 | 9:17:53 AM] Aaron was just describing.
[00:30:02 | 9:17:53 AM] And when they dig deeper alongside the agent to look at the dynamics driving this question, the learnings are automatically captured.
[00:30:12 | 9:18:04 AM] The results of their collaboration are automatically captured back in the vault.
[00:30:19 | 9:18:11 AM] And so this, for us, is the key lesson.
[00:30:21 | 9:18:12 AM] The vault enables compounding because it provides the right evidence, the right internal and external information at the fingertips of our investors and agents, and it automatically captures the synthesis that they generate and puts it back in the corpus for the next turn.
[00:30:38 | 9:18:29 AM] And that makes us go around the circle faster and better.
[00:30:41 | 9:18:33 AM] And so when we think back to the question we began with, what it takes to make an agent work is the right context and the right understanding of what's going on in your world.
[00:30:51 | 9:18:43 AM] And so our question for you is, does your AI know what's going on in the world, and does it remember what your firm has learned about it?
[00:30:57 | 9:18:49 AM] Because we are teaching ours too.
[00:30:59 | 9:18:51 AM] And if these sound like an exciting challenge, we'd love to talk.
[00:31:03 | 9:18:54 AM] Thank you.
[00:31:21 | 9:19:12 AM] Coming up next, we're delighted to welcome two speakers from Anthropic.
[00:31:26 | 9:19:18 AM] Please put your hands together for Belinda Neal, Managing Director of Financial Services, and Keon Shahab, Applied AI Architect.
[00:31:49 | 9:19:40 AM] Good morning.
[00:31:50 | 9:19:41 AM] I'm Belinda, and this is Keon, and we're from Anthropic.
[00:31:53 | 9:19:45 AM] We work with financial services firms.
[00:31:57 | 9:19:49 AM] As Keon gets set up here, we'll start with a little bit of background.
[00:32:01 | 9:19:53 AM] My name is Belinda Neal, and I'm the managing director of financial services at Anthropic.
[00:32:06 | 9:19:57 AM] Previously to joining Anthropic this year, I worked at Goldman Sachs for 19 years across engineering, global markets, and equity research.
[00:32:12 | 9:20:03 AM] My role at Anthropic sits at the confluence of our industry, our product, our research, and our go-to-market teams, really in accelerating the adoption of AI within financial services.
[00:32:22 | 9:20:14 AM] Keon.
[00:32:23 | 9:20:15 AM] Good morning, everyone.
[00:32:24 | 9:20:16 AM] Thanks for being here.
[00:32:25 | 9:20:17 AM] My name is Keon Shahab.
[00:32:26 | 9:20:18 AM] I'm an applied AI architect at Anthropic.
[00:32:29 | 9:20:20 AM] Prior to Anthropic, I spent five years at Databricks helping financial services companies modernize their data and AI architecture.
[00:32:35 | 9:20:27 AM] So we're excited to speak to you this morning, and our talk is going to cover three ideas.
[00:32:41 | 9:20:33 AM] Firstly, the frontier of intelligence.
[00:32:44 | 9:20:36 AM] How is this room taking the frontier models and applying it in ways that create alpha or edge within your firm?
[00:32:50 | 9:20:42 AM] The second is the frontier of adoption.
[00:32:53 | 9:20:44 AM] How are you scaling what you've built based on the foundation of a few to many?
[00:32:58 | 9:20:49 AM] And then last, how are we applying it to financial services?
[00:33:00 | 9:20:52 AM] We're going to bring an example in here about how we've been innovating in the wealth industry in Claude for Financial Advisors, and that paradigm compounds potentially to other areas of financial services as well.
[00:33:11 | 9:21:03 AM] So let's get started and talk about the frontier of intelligence.
[00:33:15 | 9:21:07 AM] So every so often, a model crosses a threshold, and when it does, a way of working changes.
[00:33:21 | 9:21:13 AM] We first saw this in coding last year with Opus 4.
[00:33:25 | 9:21:17 AM] 5 and Claude Code.
[00:33:27 | 9:21:18 AM] Many of you in the room are using these tools, and you've gone from autocomplete in coding to managing fleets of agents where you're really driving and accelerating a multiple effect of how you're doing coding.
[00:33:37 | 9:21:29 AM] We also saw this threshold cross this year in cyber with Claude Mithos preview, and many of you are also spending time on the cyber programs in your firms.
[00:33:47 | 9:21:38 AM] What's next?
[00:33:48 | 9:21:39 AM] Finance.
[00:33:49 | 9:21:40 AM] We've started now in finance with early agents and bringing Claude into the products and services that you use day to day.
[00:33:56 | 9:21:47 AM] One example here is Citadel told us at our briefing event in May that their investment professionals started to use Claude for Excel, and it gives them a step change function in how they can test, build, and trust their work.
[00:34:09 | 9:22:01 AM] We're really excited for the potential of Claude within the tools and the use cases that this room is building.
[00:34:15 | 9:22:07 AM] But here's the challenge.
[00:34:18 | 9:22:10 AM] Intelligence is ahead of adoption.
[00:34:20 | 9:22:12 AM] What a model can do on its own is doubling every four months.
[00:34:24 | 9:22:16 AM] PwC published early this year that the capabilities of AI are going to three quarters of companies—sorry, three quarters of the economic gains of AI are going to a fifth of companies.
[00:34:36 | 9:22:28 AM] This is what we call the diffusion gap.
[00:34:38 | 9:22:29 AM] If you're not building close enough to the curve, there's opportunity for you to take the frontier and be able to apply it in your workflows.
[00:34:46 | 9:22:37 AM] We work with firms across financial services, across our model family, most of which hopefully this room is familiar with.
[00:34:52 | 9:22:44 AM] We have Haiku for speed and volume, Sonnet for everyday work, Opus as the daily driver for financial services, complex tasks, and agentic coding, and Fable, our frontier model that can effectively be used for the hardest work in your firms.
[00:35:08 | 9:23:00 AM] One example here from Millennium on our most recent model blog was a PM used Fable to find a piece of code that had a bug, and it was unexplained in five years.
[00:35:20 | 9:23:11 AM] Fable was able to find it.
[00:35:21 | 9:23:13 AM] We're starting to see our models get used in this industry in new and creative ways, and we believe the frontier of intelligence is just getting started.
[00:35:30 | 9:23:21 AM] Every model release gets smarter, cheaper, and safer.
[00:35:32 | 9:23:23 AM] So it's really important to take a minute to call out how the model frontier is continuing to develop here.
[00:35:37 | 9:23:29 AM] Firstly, the intelligence is going up.
[00:35:40 | 9:23:31 AM] Now a model can work for 16-plus hours on its own.
[00:35:43 | 9:23:35 AM] This is up from just minutes in 2023.
[00:35:47 | 9:23:39 AM] In terms of cost per task, it's going down.
[00:35:49 | 9:23:41 AM] The most recent Opus 5.
[00:35:52 | 9:23:43 AM] 5 model was 40% more cost efficient than Opus 5.
[00:35:56 | 9:23:48 AM] You can also see those impact metrics for Haiku, Sonnet, and Fable.
[00:36:00 | 9:23:52 AM] And lastly, safety.
[00:36:01 | 9:23:53 AM] This is something we care a lot about at Anthropic.
[00:36:04 | 9:23:55 AM] In the most recent model of Fable 5.
[00:36:07 | 9:23:58 AM] 1, only 1% of prompt injection attacks were successful.
[00:36:10 | 9:24:01 AM] This is relative to other frontier models in the region of 9 to 53%.
[00:36:13 | 9:24:05 AM] So we're really investing in safety alongside capability at Anthropic.
[00:36:18 | 9:24:10 AM] And the banks know this.
[00:36:20 | 9:24:11 AM] The most recent Evident AI 2026 report that came out last week showed us that banks are 26% ahead of their AI maturity scores.
[00:36:28 | 9:24:20 AM] We're really investing in scaling, in applying this technology to our industry.
[00:36:32 | 9:24:24 AM] A few use cases to call out from this report, which are publicly citable use cases that have been reported, is firstly on areas like fraud.
[00:36:40 | 9:24:32 AM] One bank found that with auto loans, they were able to reduce $120 million of potential fraud in 12 months.
[00:36:48 | 9:24:39 AM] In another area, in post-earnings research, a draft of a report was able to be generated in 15 minutes relative to 45 minutes.
[00:36:55 | 9:24:47 AM] And you can see other use cases here and more broadly across the industry as we start to talk about the value of AI and the impact we're generating on our business.
[00:37:04 | 9:24:56 AM] So where are we?
[00:37:06 | 9:24:57 AM] In 2023, we built chatbots.
[00:37:08 | 9:25:00 AM] Everyone was asking a question and going backwards and forwards with the model.
[00:37:12 | 9:25:03 AM] In 2024, we brought pilots to firms and we started to get more knowledge bases and data into these AI systems.
[00:37:19 | 9:25:11 AM] From 2025 to now, we're now building agents.
[00:37:22 | 9:25:13 AM] And in the most case in this room, we're building them hand by hand, one by one.
[00:37:26 | 9:25:18 AM] And our opportunity here to scale is not the model.
[00:37:30 | 9:25:21 AM] Our opportunity here to scale is building the foundation for agents that can go from one to many.
[00:37:34 | 9:25:26 AM] So the next part of the talk, we wanted to spend time focusing on how you can build the agent foundation that will allow you to scale the frontier of adoption.
[00:37:42 | 9:25:33 AM] So over to you, Kion.
[00:37:44 | 9:25:35 AM] Amazing.
[00:37:45 | 9:25:36 AM] Thank you, Belinda.
[00:37:46 | 9:25:37 AM] So, Belinda, as you've just said, there's no better time than now to start experimenting and building with agents.
[00:37:52 | 9:25:43 AM] For this portion of the talk, we want to talk a little bit about how you can go from that experimentation phase towards productionizing and scaling agents.
[00:38:01 | 9:25:52 AM] But first, some observations that we've seen across the industry.
[00:38:04 | 9:25:56 AM] A year ago, we could think about this as the year of exploration, where engineers were working on a handful of use cases.
[00:38:11 | 9:26:03 AM] They were in POC and pilot mode, and they took their learnings and transitioned that into this year, where we've seen this be the age of production.
[00:38:20 | 9:26:11 AM] So we've seen these handful of agents go to production.
[00:38:23 | 9:26:15 AM] A lot of them have been built by hand.
[00:38:25 | 9:26:17 AM] What I think will happen next year is we'll go into the age of scale, where we'll have many agents built on one solidified foundation.
[00:38:36 | 9:26:28 AM] And as Belinda just mentioned, the models are now the easiest part of the equation here.
[00:38:41 | 9:26:33 AM] We know that the models can handle high-quality tasks, and we're confident about that.
[00:38:46 | 9:26:38 AM] But what we want to talk about here is building this five-layer framework for scaling and productionizing your agents.
[00:38:52 | 9:26:44 AM] Starting from the bottom, we first want to look at what the agent can do.
[00:38:57 | 9:26:48 AM] So we can give it context for our business use cases via connectors so that it can reach our systems and data.
[00:39:04 | 9:26:55 AM] Then we want to give it context for our actual business rules and processes via skills.
[00:39:09 | 9:27:00 AM] Once that's done, we want to think about building the trust layer for the agents.
[00:39:13 | 9:27:04 AM] We can think about that in three general steps: who the agent is acting as, with an identity and permissions layer; how we can sandbox and determine the approval layer of the agent so that someone is signing off before it acts; and lastly, how we know the agent will still work once we adjust any variables over time.
[00:39:33 | 9:27:24 AM] So let's look at each of these five.
[00:39:36 | 9:27:27 AM] Perfect.
[00:39:37 | 9:27:28 AM] So if you've started building agents already, you may think of giving those agents access to your underlying systems and data, manually wiring them by hand to a handful of different source systems.
[00:39:49 | 9:27:40 AM] And that could work for maybe five agents and five systems.
[00:39:52 | 9:27:43 AM] Then you'll have 25 systems to maintain and manage.
[00:39:55 | 9:27:47 AM] But as you think about scaling up your agents into new specialized
[00:40:01 | 9:27:52 AM] Various tasks.
[00:40:01 | 9:27:52 AM] You'll want to have those agents work off of one secure connectivity layer, which is MCP.
[00:40:08 | 9:28:00 AM] That'll make it a lot easier for you to build at scale with one repeatable framework.
[00:40:15 | 9:28:06 AM] Next, let's say now we have the agent have context to our underlying business data and systems.
[00:40:25 | 9:28:16 AM] Now we want to give it more context into our actual business rules and processes, and that's done through skills.
[00:40:32 | 9:28:24 AM] And this is where the SMEs that really do the work and understand the process and the work come into the picture.
[00:40:38 | 9:28:30 AM] And from here on, we're going to look at an agent use case for a trade break investigation agent, and we're going to follow this across for the next steps.
[00:40:48 | 9:28:40 AM] In this case, a trade break agent is meant to look at two records of a single trade that don't match.
[00:40:55 | 9:28:46 AM] And it's here you can see steps one through three, a little bit of a simplified version, but this is the business context that an SME provides.
[00:41:02 | 9:28:53 AM] And we think about skills as living, breathing, versioned code, essentially.
[00:41:07 | 9:28:58 AM] Even though they're just plain text, they're meant to be dynamic.
[00:41:11 | 9:29:02 AM] They're meant to be updated frequently.
[00:41:15 | 9:29:07 AM] All right.
[00:41:16 | 9:29:07 AM] So now we have our context layer for the agent.
[00:41:19 | 9:29:11 AM] We have the agent having access to our source systems and data.
[00:41:24 | 9:29:15 AM] We have the agent that understands how to go from a generalized model to a specialized agent with skills.
[00:41:31 | 9:29:22 AM] Now we want to talk about building the trust layer with that agent.
[00:41:34 | 9:29:26 AM] And first, let's start with the identity and permissions layer.
[00:41:37 | 9:29:29 AM] So here you can see the identity of the agent.
[00:41:40 | 9:29:31 AM] We're going to assign it.
[00:41:41 | 9:29:32 AM] It's going to be the trade break investigator.
[00:41:43 | 9:29:34 AM] We're going to give it a role with permissions called ops analyst.
[00:41:46 | 9:29:37 AM] And you can see here, once that agent needs to go and reach our source systems, like our order data and our market data, it'll have permission to read.
[00:41:53 | 9:29:45 AM] But if it tries to go reach for our CRM data, it'll be denied.
[00:41:57 | 9:29:48 AM] And we will do that on purpose so that it won't overreach for sources of data that it shouldn't have access to.
[00:42:03 | 9:29:54 AM] And lastly, we don't necessarily want this agent to perform on behalf of us.
[00:42:07 | 9:29:58 AM] We want it to just propose new amendments to our orders data, not actually make those amendments.
[00:42:12 | 9:30:03 AM] And that's where we'll look at, on the next slide, how we can keep the human in the loop here.
[00:42:18 | 9:30:09 AM] All right.
[00:42:19 | 9:30:11 AM] So this is kind of the layer of who signs off before the agent acts, right?
[00:42:25 | 9:30:16 AM] Many of you have heard the term sandbox.
[00:42:26 | 9:30:18 AM] We can use that terminology here as well for putting an approval layer around the agent, so that you can see here the four-step process.
[00:42:35 | 9:30:27 AM] The agent will actually go and propose a booking amendment.
[00:42:39 | 9:30:30 AM] It'll actually try to proceed through the process with the context that it has and the source systems and data that it has access to.
[00:42:47 | 9:30:38 AM] But then it'll look for a human, an SME, someone in the loop in the process to approve, right?
[00:42:53 | 9:30:45 AM] Once they approve, then that amendment will be made and the change will be applied.
[00:42:58 | 9:30:49 AM] This is the layer where you can also put guardrails, deterministic guardrails called hooks, around your agent so that it's never overreaching beyond what you would like it to do within its confines.
[00:43:09 | 9:31:01 AM] All right.
[00:43:12 | 9:31:03 AM] So now we have a full agent.
[00:43:14 | 9:31:06 AM] Let's say it's in production, it's working great.
[00:43:17 | 9:31:09 AM] And let's say that we want to make an adjustment to this agent.
[00:43:20 | 9:31:12 AM] Let's say that a new model is shipped, or we want to make an adjustment to the business context layer with the skills.
[00:43:28 | 9:31:20 AM] How do we actually know if these adjustments are improving the agent or if they're causing a regression?
[00:43:35 | 9:31:26 AM] So that's our evals layer.
[00:43:37 | 9:31:29 AM] This is where your SMEs, your business users who are in the loop, who understand the process, help determine a set of test cases to test the agent against with a benchmark or baseline, so that once you apply any change to any variable, you'll be able to determine whether that variable change actually improved.
[00:43:56 | 9:31:48 AM] The behavior of the agent, or if it caused it to regress, as you'll see here in some of the examples.
[00:44:03 | 9:31:55 AM] All right.
[00:44:07 | 9:31:58 AM] So hopefully you've seen by building once with a foundational layer that you trust, you can work at speed to deploy many agents at scale.
[00:44:19 | 9:32:10 AM] For us, financial services and regulated industries doesn't mean slow.
[00:44:23 | 9:32:15 AM] It means that we're seeing a lot of innovation from the financial sector, and we're seeing it go hand in hand with security and safety as well.
[00:44:32 | 9:32:23 AM] And those three layers that we just walked through, who the agent is acting as, who signs off, and how you still know that agent works, are the key components of building a safe and secure agent framework.
[00:44:46 | 9:32:38 AM] And once you have this framework that you've built, you can use it to apply to any new agent that you want to build for any specialty use case.
[00:44:54 | 9:32:45 AM] So you can see at the top, you'll have your foundation.
[00:44:57 | 9:32:49 AM] And then at the bottom, you'll see where you can actually bring in more specialty along the way as you continue to scale.
[00:45:04 | 9:32:56 AM] That specialty is worked in combination with the business and engineering to make sure that the proper business rules and context are being integrated into the agent workflow.
[00:45:18 | 9:33:09 AM] And you might be wondering, we haven't mentioned anything like Claude Code yet.
[00:45:22 | 9:33:14 AM] Well, everything that we've talked about so far has, let's say, four different doors that you can access it from.
[00:45:29 | 9:33:20 AM] So a business person can access it from Claude CoWork, an engineer can access it from Claude Code, or you can take this to the next step and give the agent more work to do in your own UI environment via things like Managed Agents or Agent SDK.
[00:45:50 | 9:33:41 AM] Now, so far we've talked about building a secure, trustable agent foundation framework.
[00:45:57 | 9:33:49 AM] Now let's talk a little bit about the operating model.
[00:46:00 | 9:33:51 AM] Some observations that we've seen, especially in financial services, is that the business is now becoming closer to engineering.
[00:46:08 | 9:33:59 AM] And the way that we're observing this is that the business will directly work with the agent that engineering has built.
[00:46:14 | 9:34:05 AM] They'll have direct capabilities to correct that agent or amend it, propose adjustments, and that's where engineering is in the loop as well.
[00:46:23 | 9:34:15 AM] Once you see the list of proposed adjustments, you can solidify that as a scale change after you've reviewed and tested all that within your eval framework.
[00:46:34 | 9:34:25 AM] And then anything new that you ship goes right back to the business, and they'll go through the same loop again to continuously improve the overall agent and the process.
[00:46:46 | 9:34:38 AM] All right.
[00:46:47 | 9:34:39 AM] So, so far we've talked about building the agent framework in a way that you can build once for scale, and we've talked about how you can turn a generalized, highly intelligent model into a specialized agent.
[00:47:01 | 9:34:52 AM] Now I want to hand it off to Belinda to talk a little bit more about what we're seeing in the industry by building some of the foundations ourselves for the next step here, which is Claude for financial advisors.
[00:47:11 | 9:35:02 AM] Thank you, Kian.
[00:47:14 | 9:35:05 AM] So what you've just seen is us building the foundation once in a firm.
[00:47:18 | 9:35:09 AM] Now I want to talk about how we could take that same approach to our industry.
[00:47:22 | 9:35:14 AM] This foundation we've built in Claude for financial advisors, and whilst you might not all in the room sit in the wealth or the advisor space, I want you to take this as a pattern and an opportunity to start to think about how we can actually coordinate at an industry level.
[00:47:36 | 9:35:27 AM] So in September, we launched Cloudera Financial Advisors, the orchestrator across the stack of an advisor.
[00:47:41 | 9:35:33 AM] This was built on the foundation that advisors only spend approximately 20% of their time with clients.
[00:47:48 | 9:35:40 AM] We wanted to find a way where advisors could spend more time with clients and more time growing their franchise.
[00:47:53 | 9:35:45 AM] So what did we do?
[00:47:55 | 9:35:46 AM] We went through the agent foundation and found ways to scale.
[00:47:58 | 9:35:49 AM] At layer one, we brought connectors in, the industry system, the deterministic numbers, and the scaled system that advisors trust, we brought into the ecosystem.
[00:48:08 | 9:36:00 AM] Layer two, we built skills.
[00:48:10 | 9:36:02 AM] We built a plugin that is available on GitHub that builds eight skills and workflows that an advisor can take out of the box, use today, and amend for tomorrow.
[00:48:20 | 9:36:11 AM] Layer four, approval.
[00:48:22 | 9:36:13 AM] The advisor approves everything that comes out of Claude.
[00:48:25 | 9:36:16 AM] Nothing is saved or sent without the advisor, and that trust principle holds here too.
[00:48:30 | 9:36:21 AM] And so you can see here on the diagram on the left, CRM, market data, custodians, all the tools and foundations an advisor needs brought into Claude.
[00:48:39 | 9:36:30 AM] So let's go through layer one, the connectors.
[00:48:41 | 9:36:33 AM] We brought in 25 platforms across custody, portfolio, planning, data, and CRM, names such as Schwab, Adapar, Salesforce, and more.
[00:48:52 | 9:36:43 AM] And there's more connectors that you can find on the Claude Marketplace.
[00:48:55 | 9:36:47 AM] This is where the industry builds once, the advisor can integrate once, and this is what compounding looks like.
[00:49:02 | 9:36:53 AM] Layer two, skills.
[00:49:04 | 9:36:55 AM] These are the workflows we built for the advisor that they can start with and adjust and amend to their own firm.
[00:49:09 | 9:37:01 AM] For example, pre-meeting prep allows an advisor to bring a full family plan into one brief across multiple systems.
[00:49:17 | 9:37:08 AM] The follow-up allows the advisor to bring those meeting notes into them into the CRM system and actually follow through the existing systems and tools.
[00:49:26 | 9:37:17 AM] Nothing goes out until the advisor approves it.
[00:49:28 | 9:37:20 AM] And this skill foundation is a baseline of which we imagine advisors will start to innovate and bring Claude into more and more of their workflows, allowing them to drive impact in their business.
[00:49:39 | 9:37:30 AM] So, in closing, with 28 seconds on the clock, three questions to take to your firm today.
[00:49:46 | 9:37:37 AM] The first one is the workflow.
[00:49:48 | 9:37:39 AM] How are you applying the frontier intelligence to your firm?
[00:49:51 | 9:37:43 AM] How are you gaining edge and alpha from the frontier models today?
[00:49:55 | 9:37:47 AM] The second is the foundation.
[00:49:57 | 9:37:49 AM] Do you all have a foundation that you trust for building and scaling agents for the future?
[00:50:02 | 9:37:54 AM] Future as things become more and more specialized.
[00:50:06 | 9:37:58 AM] One connector.
[00:50:07 | 9:37:59 AM] How are you actually building the foundations that others can use?
[00:50:10 | 9:38:01 AM] Are you building connectors and skills for your users, for your firm, and for the industry?
[00:50:15 | 9:38:07 AM] With that, thank you so much for having us.
[00:50:17 | 9:38:08 AM] Enjoy the rest of the conference.
[00:50:18 | 9:38:09 AM] Great.
[00:50:33 | 9:38:25 AM] And now, to explore how serious organizations can accelerate innovation without compromising trust, please welcome John Femenella, SVP of Architecture at Two Sigma.
[00:51:02 | 9:38:54 AM] Hey, everyone.
[00:51:03 | 9:38:55 AM] All right, I precariously balanced my water over there.
[00:51:08 | 9:38:59 AM] My name is John Femenella.
[00:51:09 | 9:39:00 AM] I work on AI architecture and engineering at Two Sigma, which is a hedge fund here in New York.
[00:51:14 | 9:39:06 AM] Before I get too far into things, I have a legal disclaimer slide that I have to show you.
[00:51:19 | 9:39:11 AM] It says two things.
[00:51:21 | 9:39:12 AM] One, I promise not to sell or market or offer you any securities at any point in this talk.
[00:51:26 | 9:39:18 AM] And two, everything in this is my own opinion and not the opinion of Two Sigma.
[00:51:31 | 9:39:22 AM] Thanks for indulging me.
[00:51:32 | 9:39:24 AM] If I don't say those magic words, the 5G microchips implanted in me will explode.
[00:51:39 | 9:39:30 AM] So that slide is a good example, actually, of how our industry is regulated.
[00:51:43 | 9:39:35 AM] And as a regulated company with lots of controls, I think one thing that's always interesting is to explore what happens when controls fail, because that gives you a good idea about why the controls were there in the first place.
[00:51:54 | 9:39:46 AM] And so I'd like to tell you a story about that by showing you another legal slide.
[00:52:00 | 9:39:51 AM] After August 2020, a very interesting contract clause suddenly started showing up in a bunch of commercial loan agreements.
[00:52:07 | 9:39:58 AM] And this clause essentially tries to prevent a certain scenario from happening.
[00:52:11 | 9:40:02 AM] And it's complicated, but I'll explain it like this.
[00:52:13 | 9:40:04 AM] Let's say that you're a lemonade stand business and you borrow money from a lender to capitalize your lemonade stand.
[00:52:20 | 9:40:11 AM] And the bank that's overseeing that transaction, that's in the middle between the borrower and the lender, sends the lender all of the money that you owe in a catastrophic mistake.
[00:52:32 | 9:40:24 AM] You'd probably be mad and want the money back, but the lender might also say, No thanks.
[00:52:36 | 9:40:28 AM] You paid us back and we're all good, so we'd rather keep the money.
[00:52:40 | 9:40:32 AM] Something like this happened in August 2020.
[00:52:43 | 9:40:34 AM] Revlon, the cosmetics company, had borrowed money under a big 2016 term loan.
[00:52:49 | 9:40:40 AM] And that loan was split up into a bunch of pieces across 300-plus lenders: hedge funds, credit funds, CLOs, other banks.
[00:52:57 | 9:40:48 AM] And in the middle is Citibank, the administrative agent.
[00:53:00 | 9:40:51 AM] Being the agent in this kind of transaction means that you're performing the plumbing that connects the borrowers with the lenders and managing the life cycle of the loan.
[00:53:08 | 9:41:00 AM] So in this transaction, Revlon pays Citi, and then Citi pays the lenders.
[00:53:12 | 9:41:03 AM] And Citi is not lending its own money; it's just in the middle moving people's money around.
[00:53:17 | 9:41:09 AM] So here's the plan for August 11, 2020.
[00:53:21 | 9:41:12 AM] Revlon would pay about eight million bucks of accrued interest to both groups, and the lender's principal would roll into this new facility.
[00:53:28 | 9:41:19 AM] That's an exchange of paper, not cash, so the remaining lender's principal would stay put.
[00:53:33 | 9:41:24 AM] And the idea here is that only interest should be going out; principal should not be moving at all.
[00:53:39 | 9:41:30 AM] And the bank had a piece of internal processing software called Flexcube.
[00:53:43 | 9:41:35 AM] Isn't that a fun enterprise software name?
[00:53:46 | 9:41:37 AM] So in Flexcube, the easiest way to do this kind of transaction is to pretend to record it like Revlon were paying off the entire loan.
[00:53:55 | 9:41:46 AM] And that triggers the correct interest payment calculations to everyone.
[00:53:59 | 9:41:50 AM] You can probably guess what's about to happen next.
[00:54:01 | 9:41:52 AM] So you're supposed to send the principal portion to an internal wash account that you own as the bank so that it's booked and recorded correctly, but it never leaves the bank's perimeter.
[00:54:12 | 9:42:03 AM] So keep your eye on that wash account.
[00:54:14 | 9:42:05 AM] What was supposed to happen is that the boxes labeled front and fund and principal should all include the wash account number and should all have a checkbox checked next to them.
[00:54:24 | 9:42:16 AM] So unfortunately, it turned out that was what needed to happen.
[00:54:27 | 9:42:18 AM] But for various arcane reasons, the boxes were not checked.
[00:54:32 | 9:42:23 AM] And although Flexcube pops up a warning notification that says, Uh-oh, money is about to leave the bank.
[00:54:37 | 9:42:28 AM] Are you sure you want to do this?
[00:54:38 | 9:42:30 AM] That was correct.
[00:54:39 | 9:42:31 AM] Money was supposed to leave the bank because they were making the interest payments.
[00:54:43 | 9:42:34 AM] So the three approvers who were supposed to approve that looked at it and said, Yep, that's the right thing that's supposed to happen.
[00:54:48 | 9:42:40 AM] And although that warning notification popped up, the human operators carrying out the transaction overrode that.
[00:54:55 | 9:42:46 AM] Remember, Revlon was making that interest payment.
[00:54:57 | 9:42:49 AM] So the principal never went to the wash account, and instead, Flexcube sent the entire outstanding principal of the loan to all of the 300 lenders, about $900 million instead of $8 million.
[00:55:09 | 9:43:00 AM] So every lender got the amount that they would have been owed if Revlon had paid the loan in full.
[00:55:14 | 9:43:06 AM] But Revlon didn't want to pay off the loan.
[00:55:16 | 9:43:07 AM] It wanted to hold on to its money.
[00:55:17 | 9:43:09 AM] That was a great deal for the lenders because remember, Revlon was in trouble at the time, so its loans weren't trading at face value.
[00:55:23 | 9:43:14 AM] And getting all your money back on a deal that you thought was only worth 60 cents on the dollar is a great deal for you.
[00:55:29 | 9:43:21 AM] So they didn't want to give the money back.
[00:55:32 | 9:43:23 AM] Even after Citi called them and said, Please, that was a mistake.
[00:55:34 | 9:43:25 AM] Give us the money back.
[00:55:35 | 9:43:26 AM] And their argument was, We shouldn't have to give the money back because you paid us in full, and that's how loans work.
[00:55:40 | 9:43:31 AM] You eventually pay them back.
[00:55:41 | 9:43:32 AM] And just because you paid it back at a different time than you were supposed to doesn't mean that we should have to give it back now.
[00:55:47 | 9:43:38 AM] And so to prevent that from happening, commercial loan agreements everywhere started including a clause like that one.
[00:55:53 | 9:43:44 AM] So what does a payment error at a bank have to do with AI agents?
[00:55:56 | 9:43:48 AM] Well, the bank had this procedure, it had these controls, and everybody did what they thought the right thing to do was.
[00:56:02 | 9:43:54 AM] That's the problem I want to talk about for the rest of this talk.
[00:56:04 | 9:43:56 AM] Every day, we're giving real agents real autonomy over systems like Flexcube.
[00:56:10 | 9:44:01 AM] And how do we prevent accidents like that one from either from happening without locking everything down or just hoping we'll get lucky that they won't happen?
[00:56:18 | 9:44:10 AM] So here's the crux of the issue.
[00:56:19 | 9:44:11 AM] You can't really know in advance what an agent will do, right?
[00:56:22 | 9:44:13 AM] They're these non-deterministic systems.
[00:56:24 | 9:44:16 AM] And that sounds scary until you remember that humans are also non-deterministic systems, and they're going to make mistakes too.
[00:56:30 | 9:44:22 AM] And so most firms don't choose to say, well, in order to reduce the risk of humans making a mistake, we're going to, like, lock them in rooms and prevent them from talking to each other, and they're all going to double-check everybody else's work, right?
[00:56:40 | 9:44:31 AM] We allow them a certain amount of autonomy along with a certain amount of control.
[00:56:44 | 9:44:36 AM] So we give them boundaries, visibility, and we equip them with systems and controls that let them do their jobs effectively.
[00:56:51 | 9:44:42 AM] So in this sort of model, safety and innovation are not opposite ends of a spectrum that you must trade off on.
[00:56:57 | 9:44:48 AM] There are things that you can have at the same time.
[00:56:59 | 9:44:50 AM] So I think you can have your cake and eat it too.
[00:57:02 | 9:44:53 AM] And when we were thinking about what controls we wanted to apply to agents, we also looked at some approaches that didn't work for us.
[00:57:07 | 9:44:59 AM] We don't want to sandbox or lock down everything because a sandbox with no real access to systems is safe, but it's not very interesting or useful.
[00:57:15 | 9:45:06 AM] If you let agents go wild and do whatever they want, that's, you know, maybe powerful and freeing from a cognitive perspective, but the isolation is very weak there, and that approach is generally not suitable for highly regulated enterprises.
[00:57:29 | 9:45:20 AM] And then if you just have policy documents that agents look at or that are part of your specification for the prompts, that's also not very enforceable at runtime.
[00:57:38 | 9:45:30 AM] You can't guarantee that that will be part of the enforcement controls.
[00:57:42 | 9:45:33 AM] So what did work for us was thinking about what mix of controls would get us both safety and innovation at the same time.
[00:57:49 | 9:45:40 AM] So how do we provide boundaries and stop problems, but don't hinder folks from operating correctly?
[00:57:55 | 9:45:46 AM] So we have a number of these controls, but today I'll talk about five of them.
[00:57:58 | 9:45:49 AM] And when I say controls here, what I mean are the guardrails and shared capabilities that let teams move in ways that don't hinder what they're trying to do.
[00:58:08 | 9:45:59 AM] And we don't want to reach some chasm that we need to cross to let people get their work done before, and then make everyone wait while we build a bridge to get there.
[00:58:18 | 9:46:10 AM] So if these controls are composable, each one does one job, and then together they let us run agents with real autonomy at an appropriate level of safety.
[00:58:29 | 9:46:21 AM] So the first problem is that agents were showing up everywhere.
[00:58:32 | 9:46:24 AM] We have big teams with lots of agents running.
[00:58:35 | 9:46:27 AM] We have small teams with a few.
[00:58:36 | 9:46:28 AM] We have individual people running stuff in an uncontrolled way.
[00:58:40 | 9:46:32 AM] And these come in every shape.
[00:58:41 | 9:46:33 AM] It could be random chatbots.
[00:58:42 | 9:46:34 AM] It could be MPC servers glued together in this Frankenstein hodgepodge.
[00:58:47 | 9:46:39 AM] It could be cool notebook experiments.
[00:58:49 | 9:46:40 AM] It could be really useful web tools for folks.
[00:58:52 | 9:46:43 AM] But it's hard to answer when you look at that a few simple questions like, who owns this?
[00:58:57 | 9:46:49 AM] What tools does it have access to?
[00:58:59 | 9:46:51 AM] What should it be doing?
[00:59:00 | 9:46:52 AM] What should it not be doing?
[00:59:01 | 9:46:53 AM] And if you can't answer those kinds of questions, if you can't govern them, then you can't really also reuse that.
[00:59:07 | 9:46:58 AM] So you're tempted to build multiple solutions to the same problem if you don't know about what exists already.
[00:59:13 | 9:47:05 AM] And then the firm can't also govern those in any kind of legible way.
[00:59:18 | 9:47:09 AM] So one thing that firms sometimes do here is add some kind of gate, like don't let anything run until everything is registered and approved and has gone through this very onerous process.
[00:59:27 | 9:47:19 AM] And that sounds safe, but if you look at what it does to the work, every idea, even some simple notebook experiment, is going to wait in line behind something that's really risky.
[00:59:37 | 9:47:28 AM] And we don't want to subject everybody who's given the diversity of agents to exactly the same process.
[00:59:44 | 9:47:36 AM] So most people are going to give up, or they'll just get pushed to some shadow IT, less governed path that is less visible, and then we don't get to see anything at all.
[00:59:53 | 9:47:45 AM] So that's what motivated the first control, is an agent registry.
[00:59:56 | 9:47:48 AM] You can't govern it.
[00:59:57 | 9:47:48 AM] You can't see.
[00:59:57 | 9:47:49 AM] Can't see.
[00:59:57 | 9:47:49 AM] So the agent registry makes agents legible, and it registers, retrieves, and discovers the key facts about agents that we want to know for any agent.
[01:00:08 | 9:47:59 AM] So those are things like which tools it declares, what endpoints it's going to talk to, which product does it belong to, who owns it.
[01:00:14 | 9:48:06 AM] And humans, other programs, other agents can then use the agent registry to decide what's available at the firm, whether that's useful for them, and to go use that as a source of truth for other questions.
[01:00:27 | 9:48:18 AM] So this doesn't require extra effort on your part.
[01:00:29 | 9:48:20 AM] It just happens when you use one of the firm's approved agent building frameworks, is automatically registered all that information is recorded there for you.
[01:00:36 | 9:48:28 AM] And if you want to do a manual registration, you can certainly do that.
[01:00:40 | 9:48:32 AM] So the second problem we have is that now that we've got all these agents doing all these things, we quickly notice that what they're doing is really different.
[01:00:49 | 9:48:41 AM] And that means our agents carry really different risks, right?
[01:00:53 | 9:48:44 AM] So a thing that summarizes Jira or linear tickets is really different than a production deployment agent that can touch a running system.
[01:01:01 | 9:48:53 AM] And if we can use the same, if we try to use the same review process to cover all of these agents, then every agent is waiting in the same queue for weeks for human review.
[01:01:10 | 9:49:01 AM] And if people are going to route around slow processes, then we wind up in the same situation that we had before.
[01:01:16 | 9:49:07 AM] So again, you might be tempted to say the answer is something like really detailed heavy manual review by all of these different constituencies.
[01:01:23 | 9:49:14 AM] Again, that feels safe, but now we've got a trivial summarizer waiting two months for the same sign-offs as an agent that is touching production systems.
[01:01:33 | 9:49:24 AM] And most of a good agent ideas, most of the ones that have value right away, start out as small experiments, and you don't want those people to wait in the same line as the stuff that's touching production right away.
[01:01:44 | 9:49:36 AM] So the reviewers are drowning in these like low-risk requests, and the high-risk ones have to share that attention pool.
[01:01:50 | 9:49:42 AM] So we don't want to trade away that speed if we can help it.
[01:01:53 | 9:49:45 AM] So again, because not every agent needs the same review, and because most agents are purpose-built rather than open-ended.
[01:01:59 | 9:49:51 AM] And when I say open-ended here, you can imagine coding agents like Pi or Claude Code.
[01:02:04 | 9:49:56 AM] When you open them and you start typing, Claude Code or Pi doesn't know what you're about to ask.
[01:02:10 | 9:50:02 AM] It doesn't circumscribe its purpose in any particular way.
[01:02:14 | 9:50:05 AM] But most of the agents that are deployed in enterprises do have very specific purposes.
[01:02:18 | 9:50:09 AM] When you're engaging with that agent, it's to do something specific that's well known and well understood.
[01:02:23 | 9:50:15 AM] So they have a very specific reason for existing and a very circumscribed purpose.
[01:02:27 | 9:50:18 AM] And you can tell these agents apart from each other by looking at what they declare upfront, their tools, the endpoints they access, the controls that are applied to them, etc.
[01:02:39 | 9:50:30 AM] So the third problem is that if you know about your agents and what they're doing, you'll quickly notice that many agents don't talk to each other, or sorry, they don't talk to just one thing or in just one capacity.
[01:02:50 | 9:50:41 AM] The more open-ended the agent is, the more it looks like a Claude Code or Pi, the more it can do a variety and a diversity of different things.
[01:02:58 | 9:50:50 AM] Call an internal API, run a tool like a web search, that sort of thing.
[01:03:03 | 9:50:54 AM] And each one of those is opening a different door to a different kind of risk.
[01:03:07 | 9:50:59 AM] And if you give an agent an entitlement for a role account, then it can do a lot more damage than something that's just going to read a public web page, for example.
[01:03:16 | 9:51:08 AM] So the question is not, can this agent do X, but what's the granularity that we need to solve for for the agent to act successfully?
[01:03:25 | 9:51:17 AM] And again, one tempting answer is to kind of be heavy-handed here or to give every agent the same short allow list of stuff that's safe to do and then block everything else.
[01:03:35 | 9:51:27 AM] That's safe, but it's also useless.
[01:03:37 | 9:51:28 AM] An agent that can't search or can't call an API or can't do any of those things without asking somebody first can't really do the work that it was intended for.
[01:03:46 | 9:51:38 AM] And then teams either give up on those agents or they find a way around the wall, and both outcomes are costly.
[01:03:52 | 9:51:43 AM] So a wide kind of blanket block on everything trades away the innovation that we want to preserve and avoids making a real decision about risk.
[01:04:01 | 9:51:52 AM] And as author John Shed wrote, a ship in harbor is safe, but that is not what ships are for.
[01:04:07 | 9:51:59 AM] So the fix here is to let agents declare their purpose upfront and say what tools they're going to use or what tools they need access to.
[01:04:17 | 9:52:09 AM] So in the second column here, we might say that a research summarizer is going to be allowed to use a web tool to access research, but for a release deployer agent, we're not going to allow them to do that because they have no reason to use that tool.
[01:04:33 | 9:52:25 AM] And so if they try to ask for it, they won't get it by default.
[01:04:37 | 9:52:29 AM] So we don't need to make this kind of decision for every tool.
[01:04:40 | 9:52:31 AM] The agents just have to say which tools they want, right?
[01:04:42 | 9:52:34 AM] And you're, as the agent author, you're in the best position to say, I need these four things out of the 500 that are available.
[01:04:51 | 9:52:42 AM] So the way we need to enforce that is that when agents run in our managed environments, they look at the registry that we talked about before to look up what policies apply to it at initialization time.
[01:05:03 | 9:52:54 AM] And that policy gets translated into enforceable statements like which endpoints are you allowed to access, which hosts are you allowed to access, what other types of resources are available or not available to you.
[01:05:15 | 9:53:06 AM] And in this way, nobody's writing a ticket every time they need to change the access.
[01:05:19 | 9:53:11 AM] Nobody's going to talk to IT or some other group outside of your team.
[01:05:24 | 9:53:16 AM] As long as you conform to the risk score that we talked about before and you're in the agent registry, you're governed, you're approved.
[01:05:32 | 9:53:23 AM] So this is how we keep the cost to teams really low for deploying, building, running agents.
[01:05:38 | 9:53:29 AM] And the same control architecture works in a variety of settings.
[01:05:41 | 9:53:33 AM] The next thing we noticed was that teams were building a ton of different ways to evaluate agents, and every stack looks different, and some teams don't build anything at all.
[01:05:50 | 9:53:41 AM] Sometimes you build, like, this really detailed stack for how your models work.
[01:05:54 | 9:53:45 AM] Sometimes there's nothing.
[01:05:56 | 9:53:48 AM] And I think in general we'd be upset if teams were not writing unit tests, right?
[01:06:01 | 9:53:53 AM] And we consider evals to be kind of the same thing.
[01:06:04 | 9:53:55 AM] If models are changing, that's like a runtime dependency that your application has.
[01:06:08 | 9:54:00 AM] And if your agent is going to change models, it doesn't know without the evals what's going to happen to its outputs and to the quality of those outputs.
[01:06:18 | 9:54:10 AM] So again, one tempting answer here is let's have some kind of central evaluation methodology that waits for a full eval suite and a committee sign-off.
[01:06:28 | 9:54:19 AM] But now every, like, prompt tweak, every one-line change is going to sit in that same queue.
[01:06:33 | 9:54:25 AM] So we don't want to put more decisions on more reviewers for things like that.
[01:06:38 | 9:54:29 AM] We don't want to trade away that iteration.
[01:06:40 | 9:54:31 AM] So again, you wouldn't ship software without unit tests, so agents need evaluations for the same reason.
[01:06:45 | 9:54:37 AM] And we want to provide this stuff at the level of the firm that's going to be the same for everybody.
[01:06:51 | 9:54:43 AM] So team A writing evals, team B writing evals, they're both going to have many of the same features.
[01:06:57 | 9:54:48 AM] So we want to have one shared approach to how we do evals, and have the shared approach be something that's run by the firm and available to everybody for doing their evals.
[01:07:05 | 9:54:57 AM] So that covers all the common parts of evals, and all you've got to do is just write what's true about your agent.
[01:07:13 | 9:55:05 AM] And finally, maybe you've had the experience of being asked to approve lots and lots of individual agent actions when there's a human in the loop.
[01:07:20 | 9:55:12 AM] So that's fine at a small scale, but once you're operating agents in parallel or in production, this becomes completely onerous, and review requests come in faster than anybody can be expected to approve them.
[01:07:32 | 9:55:24 AM] And after the first few times of this happening, you succumb to review fatigue where you just see yes, yes, yes, yes, yes, and eventually you click yes on something that's, you know, activating the nuclear bomb, right?
[01:07:42 | 9:55:33 AM] So you don't want to click yes by reflex, but that's going to happen inevitably.
[01:07:47 | 9:55:39 AM] And one recent example of this is earlier this year, a director at an AI research lab told her OpenAI agent to suggest emails to delete from her inbox and then wait for her approval.
[01:07:57 | 9:55:48 AM] But her inbox was so large that eventually the agent compacted its context and lost the part that said, wait for my approval, and then it deleted hundreds of emails and didn't stop when she told it to stop from her phone.
[01:08:08 | 9:55:59 AM] So again, you might be tempted here to make a human approve every action, but that's not the right way to do it.
[01:08:13 | 9:56:04 AM] A better approach is to let these independent, conservative classifiers make decisions about routine calls and then send the person only the requests that are most important, the ones that are most likely to make a difference.
[01:08:26 | 9:56:18 AM] If you're saying yes 99.
[01:08:28 | 9:56:19 AM] 9999999% of the time, then that's probably just a rule that the agent should follow, not a request you need to ask the human for permission for.
[01:08:36 | 9:56:27 AM] And the stuff that's unclear or ambiguous or potentially dangerous, yes, surface that to a human, or if it's definitely just dangerous, deny it outright.
[01:08:43 | 9:56:35 AM] So this is a way to not have to do all the review work all the time.
[01:08:48 | 9:56:40 AM] So we don't want to take the same approach for both explicit—when explicit rules apply, we want deterministic fast paths.
[01:08:56 | 9:56:48 AM] When explicit rules don't apply and there's some ambiguity, we want a classifier to do that work instead.
[01:09:02 | 9:56:53 AM] So putting those five pieces back together, you create a registry so every agent is visible from the day it's created.
[01:09:08 | 9:56:59 AM] You score each agent so human review goes in the right spot.
[01:09:11 | 9:57:03 AM] You run agents on guardrails so that they only touch what they need.
[01:09:15 | 9:57:06 AM] You share evals and metrics so everybody is reaching the same bar without having to reinvent the wheel.
[01:09:20 | 9:57:11 AM] And then finally, you govern your runtime to make sure that classification happens there and not somewhere else.
[01:09:26 | 9:57:17 AM] So each of these controls works together.
[01:09:28 | 9:57:20 AM] So I'll leave you with one question: Why do cars have brakes?
[01:09:32 | 9:57:24 AM] It's not just so that you can stop.
[01:09:34 | 9:57:26 AM] It's so that you can go fast and stop safely.
[01:09:37 | 9:57:28 AM] So controls for our agents work the same way.
[01:09:39 | 9:57:31 AM] Thank you very much.
[01:09:41 | 9:57:32 AM] I'm John Femenella, and I hope you had a good time.
[01:09:42 | 9:57:34 AM] Here to help us understand the missing principles around code quality.
[01:10:01 | 9:57:52 AM] Quality and finding a path through competing viewpoints.
[01:10:04 | 9:57:56 AM] Please welcome Max Kanat-Alexander, principal software engineer at Capital One and author of Code Simplicity.
[01:10:15 | 9:58:07 AM] All right.
[01:10:34 | 9:58:26 AM] So today I figured I'd just pick a nice, uncontroversial topic that nobody has any opinions about, right?
[01:10:41 | 9:58:33 AM] Nobody's said anything on this about social media, you know.
[01:10:45 | 9:58:37 AM] And of course, every take about this on social media is, like, really deeply nuanced, you know.
[01:10:51 | 9:58:42 AM] Like, people have lots of, like, depth and, like, you know, really big thoughts.
[01:10:55 | 9:58:46 AM] You know, maybe there's a little bit more to it than, like, yes or no.
[01:10:59 | 9:58:50 AM] And, you know, of course, if you ever ask a senior engineer a question, we always have the same answer to every question.
[01:11:04 | 9:58:56 AM] Every senior engineer's favorite answer to every question, which is, It depends.
[01:11:10 | 9:59:02 AM] Now, that's not a very helpful answer, though, frankly, because what does it depend on?
[01:11:17 | 9:59:08 AM] So let's start with this.
[01:11:19 | 9:59:11 AM] Why did code quality ever matter in the first place?
[01:11:22 | 9:59:13 AM] Like, I see a lot of people be like, Well, it made me feel good.
[01:11:25 | 9:59:16 AM] That's not really a sufficient justification.
[01:11:27 | 9:59:18 AM] So let's see if we can inject some nuance into this conversation and help everybody at least be able to have a basis for reasoning about it while we're discussing it.
[01:11:35 | 9:59:26 AM] So let's see if we can make a framework here, and that's what we're going to try to do with this talk.
[01:11:38 | 9:59:30 AM] Okay.
[01:11:39 | 9:59:31 AM] So we're going to start off with everything you want to ever accomplish with a piece of software depends on two factors and two factors alone, and that is understanding and executing on that understanding, whether that's aligning a model, scaling a system, driving adoption, anything.
[01:11:54 | 9:59:45 AM] All software success is determined by these two factors.
[01:11:58 | 9:59:49 AM] This is why we have things like debuggers and observability and evals and even tests.
[01:12:02 | 9:59:54 AM] All those things actually are there to improve your understanding or ability to execute on that understanding.
[01:12:06 | 9:59:58 AM] People think that they're there for other reasons, but fundamentally they're there for that reason.
[01:12:11 | 10:00:02 AM] Everything we have ever done in the field of code quality is exclusively and only for these two things.
[01:12:18 | 10:00:10 AM] It's not for anything else.
[01:12:20 | 10:00:11 AM] It doesn't have something to do with correctness or something else.
[01:12:22 | 10:00:13 AM] It has to do only with these two things.
[01:12:24 | 10:00:15 AM] Now, there's two understandings that are the most important to have if you're going to be a software engineer.
[01:12:29 | 10:00:21 AM] There are other understandings to have about software if you're going to be a product, if you're going to be in sales.
[01:12:33 | 10:00:25 AM] But if you're a software engineer, there's the two that are the most important.
[01:12:36 | 10:00:27 AM] And the first is, what is the behavior of the system, like the concretely, not what does a doc say the behavior of the system is, but what is the actual behavior of the system?
[01:12:45 | 10:00:36 AM] And the second one is, how do I correctly and safely modify that behavior?
[01:12:51 | 10:00:43 AM] Okay.
[01:12:52 | 10:00:43 AM] On a very small system, if you want to understand what the system does, I just tell you what it does.
[01:12:59 | 10:00:50 AM] It prints hello world.
[01:13:00 | 10:00:51 AM] You say, I want it to say hi world.
[01:13:01 | 10:00:53 AM] I say, okay, I will make it say hi world now.
[01:13:04 | 10:00:56 AM] There's very little to understand about it other than purely what it does.
[01:13:08 | 10:01:00 AM] And that's all of the understanding that you need.
[01:13:11 | 10:01:02 AM] However, any real software system is enormously complex.
[01:13:15 | 10:01:06 AM] This is a real map of the code base of Chromium, which is the open source project behind Chrome.
[01:13:23 | 10:01:15 AM] And if you think about all of the different ways that these components can interact, they have essentially infinite possible behaviors.
[01:13:31 | 10:01:23 AM] Like, I could not describe to you in words the behavior of Chromium as a whole, as a system.
[01:13:39 | 10:01:30 AM] However, what I can describe to you, and as we all know, everybody's been a software engineer for a while, I can describe to you components of the system.
[01:13:47 | 10:01:38 AM] I can successfully describe to you how a component of the system behaves.
[01:13:52 | 10:01:43 AM] So this is the URL parser, the actual functions and stuff for the URL parser of Chromium.
[01:13:56 | 10:01:48 AM] It figures out all the different parts of the URL.
[01:14:00 | 10:01:51 AM] And This is the whole reason that code exists.
[01:14:06 | 10:01:57 AM] The whole reason that we have code at all in the first place is for structure.
[01:14:13 | 10:02:04 AM] Because, what do I mean by that?
[01:14:15 | 10:02:06 AM] Okay.
[01:14:16 | 10:02:07 AM] So both of these two things on the left and on the right will print Hello World if run on a Linux machine.
[01:14:23 | 10:02:14 AM] However, on the left, you can see that it is Hello World.
[01:14:27 | 10:02:18 AM] It has the identity and structure of Hello World.
[01:14:31 | 10:02:23 AM] On the right, you just see a series of instructions with no particular identity, recognizable or understandable identity.
[01:14:38 | 10:02:29 AM] It's not a component.
[01:14:39 | 10:02:30 AM] It's just a bunch of instructions.
[01:14:40 | 10:02:32 AM] While that's understandable there, if that was millions or billions of lines of that, it would be much harder to grok.
[01:14:47 | 10:02:38 AM] In the past, we've talked about things like readability or testability or things that seemed like human concepts about code.
[01:14:54 | 10:02:46 AM] But what actually mattered the most always was that the system had some sort of understandable structure.
[01:15:00 | 10:02:52 AM] So it's the structure that actually matters.
[01:15:04 | 10:02:55 AM] And when this matters the most is when you want to modify the system, the second understanding that we talked about.
[01:15:13 | 10:03:04 AM] All modifications to a system carry two categories of risk.
[01:15:16 | 10:03:08 AM] The first is that you will introduce some sort of problem.
[01:15:18 | 10:03:10 AM] And a problem isn't just a bug.
[01:15:20 | 10:03:12 AM] It's anything bad that could happen.
[01:15:22 | 10:03:14 AM] Like your project could take much longer than you expect.
[01:15:26 | 10:03:17 AM] It could not behave in the way that you wanted it to for your users.
[01:15:28 | 10:03:20 AM] The project could fail because you have budget overruns.
[01:15:31 | 10:03:23 AM] Any kind of problem could happen from just you trying to go through the process of making this change.
[01:15:36 | 10:03:28 AM] And the second is you could make it harder to make future changes.
[01:15:41 | 10:03:32 AM] In particular, what that means is you could make it more likely to have future problems.
[01:15:44 | 10:03:35 AM] You could increase future risk of the system.
[01:15:47 | 10:03:38 AM] These two things are caused by problems with understanding.
[01:15:53 | 10:03:44 AM] So the first has to do with the difficulty of understanding the system in the first place, and the second is you make the system harder to understand.
[01:16:02 | 10:03:53 AM] I can reduce every postmortem I have ever read for any incident to these two factors in one way or another.
[01:16:10 | 10:04:02 AM] The production configuration was too hard to understand.
[01:16:12 | 10:04:04 AM] Somebody made something impossible to understand.
[01:16:14 | 10:04:05 AM] There were emergent properties of the system that were impossible to understand.
[01:16:18 | 10:04:09 AM] Whatever.
[01:16:18 | 10:04:10 AM] Point two feeds into point one in a vicious cycle that compounds in a non-linear fashion.
[01:16:27 | 10:04:19 AM] So the difficulty of understanding does not grow linearly; it compounds over time.
[01:16:33 | 10:04:25 AM] You will eventually reach a point, and all systems eventually tend to reach this point, where every modification involves some sort of problem.
[01:16:45 | 10:04:36 AM] And, you know, some systems get to the point where, like, you can't modify them at—like, if you think of, like, you know, some of, like, your giant 100 million, 500 million line mainframe codebases, then everything, every change is some sort of problem.
[01:16:57 | 10:04:49 AM] You know, you'll see it in organizational issues.
[01:16:59 | 10:04:50 AM] You'll see it all over the place.
[01:17:00 | 10:04:51 AM] You'll see it in timelines, whatever.
[01:17:03 | 10:04:54 AM] And look, there's a lot of arguments about maybe future models will fix this.
[01:17:06 | 10:04:58 AM] Look, maybe they will.
[01:17:08 | 10:04:59 AM] Maybe future models will have infinite ability to deal with complexity somehow.
[01:17:11 | 10:05:03 AM] But we don't have to discuss that today, because I think models are doing something else really interesting right now.
[01:17:18 | 10:05:09 AM] They are creating a new kind of software, a new category of software.
[01:17:23 | 10:05:15 AM] This category has always existed, but it's about to become a hundred thousand times more common than any other form of software.
[01:17:33 | 10:05:24 AM] And that is disposable software.
[01:17:37 | 10:05:28 AM] So what is that?
[01:17:38 | 10:05:30 AM] Okay, so imagine a world in which the consequences of failure for your system are very minimal or non-existent.
[01:17:47 | 10:05:38 AM] Imagine that there's very few people that depend on it, and almost no other systems depend on that piece of software.
[01:17:53 | 10:05:45 AM] Change management, very minimal, non-existent.
[01:17:57 | 10:05:48 AM] Imagine that the cost of replacement went to near zero.
[01:18:00 | 10:05:52 AM] You could replace the whole thing in hours or days, and it had basically no cost of maintenance.
[01:18:06 | 10:05:58 AM] In that world, code quality does not matter, because all of those things we are trying to prevent about the compounding risks over time don't exist.
[01:18:21 | 10:06:12 AM] Traditionally, we've always built durable software.
[01:18:26 | 10:06:17 AM] You know, it lives for years.
[01:18:27 | 10:06:18 AM] It's depended on by millions or thousands of people.
[01:18:29 | 10:06:21 AM] There's huge consequences of failure, potentially business catastrophic consequences of failure, and it requires enormous maintenance.
[01:18:37 | 10:06:28 AM] Most of the software engineers in the world spend most of their time maintaining these giant durable systems.
[01:18:43 | 10:06:34 AM] I expect this to continue to exist.
[01:18:46 | 10:06:37 AM] So this is one of the areas where I think sometimes the conversation goes a little astray, okay?
[01:18:51 | 10:06:43 AM] Durable systems will continue to probably be the most important systems in the world, and there will be probably more of them.
[01:19:01 | 10:06:52 AM] But the most numerous systems will be disposable software.
[01:19:07 | 10:06:59 AM] They will be replaceable in hours.
[01:19:09 | 10:07:00 AM] They will be depended on by a few, or change management just won't matter.
[01:19:12 | 10:07:04 AM] And look, if it doesn't work, well, give everybody agents.
[01:19:15 | 10:07:07 AM] They'll make a version of it themselves.
[01:19:18 | 10:07:09 AM] You know, maintenance will be unimportant or nearly free.
[01:19:20 | 10:07:12 AM] Don't like the calculator on your OS?
[01:19:22 | 10:07:14 AM] Make your own.
[01:19:24 | 10:07:15 AM] Want to plan a party for your kids?
[01:19:26 | 10:07:18 AM] Write a party planner software just for that one party.
[01:19:30 | 10:07:22 AM] Throw it away.
[01:19:31 | 10:07:23 AM] Code quality doesn't matter.
[01:19:33 | 10:07:25 AM] Nobody cares.
[01:19:34 | 10:07:26 AM] In the future, we will apply engineering rigor to the degree of disposability of the software.
[01:19:41 | 10:07:33 AM] On the left, nothing.
[01:19:44 | 10:07:35 AM] None of our practices of engineering rigor matter at all.
[01:19:47 | 10:07:38 AM] On the right, all the practices of engineering that we have built up over the last many decades matter greatly.
[01:19:53 | 10:07:45 AM] We can determine where you are on this scale by those four factors that I have been talking about.
[01:19:59 | 10:07:51 AM] About consequences, cost of replacement, dependencies, and cost of maintenance.
[01:20:03 | 10:07:55 AM] If they're all low, it's disposable software.
[01:20:05 | 10:07:57 AM] If they're all high, it's durable software.
[01:20:08 | 10:07:59 AM] And look, any person who's written software for a long time knows you should err on the side of it being durable.
[01:20:13 | 10:08:04 AM] You should err on these all being higher than you expect them to be.
[01:20:17 | 10:08:09 AM] But there's also a new thing you can do in the world.
[01:20:22 | 10:08:14 AM] You can make software more disposable.
[01:20:26 | 10:08:17 AM] So, like, what does that involve?
[01:20:28 | 10:08:20 AM] Well, come up with better isolated environments, right?
[01:20:31 | 10:08:23 AM] So, hey, you can only deploy to this environment that has access to only your data.
[01:20:35 | 10:08:27 AM] No customer data, no personally identifiable information, whatever.
[01:20:40 | 10:08:31 AM] You can enforce independence.
[01:20:42 | 10:08:33 AM] You can say, okay, no inbound API calls from other production systems are allowed to this system in this environment, right?
[01:20:49 | 10:08:40 AM] And so everything deployed to that environment is disposable.
[01:20:52 | 10:08:43 AM] Redundancy.
[01:20:53 | 10:08:44 AM] You can have an old, clunky backup system that is, like, hard to use.
[01:20:57 | 10:08:48 AM] And then, like, look, if people want to vibe code their own, like, more efficient frontends, you let them vibe code their own more efficient frontends because there is an old, durable, clunky backup system that they can use if their, you know, crappy little vibe-coded thing fails.
[01:21:09 | 10:09:01 AM] Which it will fail, right?
[01:21:10 | 10:09:02 AM] That's fine.
[01:21:11 | 10:09:03 AM] But it doesn't matter if it fails.
[01:21:13 | 10:09:05 AM] And you can limit scope, just like I talked about, right?
[01:21:15 | 10:09:07 AM] It's just a calculator for this one person.
[01:21:18 | 10:09:09 AM] It just plans this one party.
[01:21:20 | 10:09:12 AM] There's so much more we could do here and talk about ways of increasing disposability.
[01:21:26 | 10:09:18 AM] In fact, I think this is a whole new discipline of software engineering, not to think about how we improve the rigor of durable systems, but how do we take our systems and how do we encourage disposability or allow more disposability, allow people to throw these things away.
[01:21:44 | 10:09:35 AM] Interesting thought.
[01:21:45 | 10:09:36 AM] Now, I want to reemphasize that durable software engineering is not going away because this is the biggest confusion that I see on social media today.
[01:21:55 | 10:09:46 AM] In fact, I believe the absolute amount of durable software in the world will increase because AI coding tools make it easier and easier to make more durable software.
[01:22:06 | 10:09:58 AM] And another important thing to understand is that disposable and durable are not black and white.
[01:22:12 | 10:10:04 AM] There's a spectrum, like I showed before, but that spectrum, what changes across the spectrum is how much effort you're going to put into engineering rigor, okay?
[01:22:22 | 10:10:13 AM] And that's both immediate effort and effort over time, just like we've always talked about for software.
[01:22:27 | 10:10:19 AM] However, what you want to do, and I think what you want to care about the most, is reducing the cost of effort, reducing the cost of rigor.
[01:22:37 | 10:10:29 AM] Like, if rigor is cheaper, if it's the easier and easier you make it to be rigor, the less you have to worry about where you are on the scale.
[01:22:46 | 10:10:37 AM] So this is another approach you can take.
[01:22:49 | 10:10:40 AM] If you change your mind, it's much easier to, like, you're like, Oh, I thought this was going to be disposable and now it needs to be durable.
[01:22:55 | 10:10:47 AM] The cheaper you make it to make it durable, the easier it is to change your mind or to be wrong because you're never going to be 100% right all the time on that estimate.
[01:23:05 | 10:10:56 AM] So that involves a different set of practices that are not engineering rigor themselves, but that are about how to decrease the cost of engineering rigor.
[01:23:15 | 10:11:07 AM] Now, I could talk about this for hours.
[01:23:17 | 10:11:08 AM] I have spent a tremendous amount of my career doing this.
[01:23:20 | 10:11:11 AM] I don't have 10 hours.
[01:23:21 | 10:11:13 AM] I have about five minutes left on that timer.
[01:23:23 | 10:11:15 AM] So I'll talk about what I can, okay?
[01:23:28 | 10:11:19 AM] Let's talk about standardization.
[01:23:30 | 10:11:21 AM] Why do we do standardization?
[01:23:31 | 10:11:22 AM] People are like, Well, I don't know, because the boss said so.
[01:23:34 | 10:11:26 AM] Well, no, we do standardization because it removes possibilities.
[01:23:39 | 10:11:31 AM] If you don't have any PHP in your system, you don't have to figure out what are all the linters for PHP, what are all the practices, what are all the security holes I have to fix.
[01:23:49 | 10:11:40 AM] You just eliminate possibilities through standardization, and it just reduces the cost of rigor.
[01:23:55 | 10:11:46 AM] Same thing with, like, frameworks.
[01:23:56 | 10:11:47 AM] Like, why don't you want to have every front-end framework or every back-end framework in existence?
[01:24:01 | 10:11:52 AM] Because it makes rigor more expensive.
[01:24:02 | 10:11:54 AM] Like, yes, rigor is still possible.
[01:24:03 | 10:11:55 AM] Yes, you could still have the agent code up all your tools, but you have to do it every single time.
[01:24:07 | 10:11:59 AM] You know, protocols.
[01:24:09 | 10:12:00 AM] Why do you want to have standardized RPC protocols?
[01:24:12 | 10:12:03 AM] All the same thing.
[01:24:13 | 10:12:05 AM] Standards are all for this reason.
[01:24:16 | 10:12:07 AM] Okay?
[01:24:16 | 10:12:08 AM] What I call in-workflow tooling.
[01:24:17 | 10:12:09 AM] So in-workflow tooling is tooling that just occurs.
[01:24:20 | 10:12:11 AM] The programmer doesn't have to choose to run it.
[01:24:21 | 10:12:13 AM] They don't have to understand how it runs.
[01:24:23 | 10:12:15 AM] It just happens.
[01:24:24 | 10:12:16 AM] If it's there, it feels and seems free, and it is reliable.
[01:24:30 | 10:12:21 AM] Reliability is very, very important.
[01:24:31 | 10:12:22 AM] Like, it doesn't have a ton of false positives.
[01:24:33 | 10:12:25 AM] It's fast.
[01:24:34 | 10:12:25 AM] It just happens.
[01:24:35 | 10:12:26 AM] And the more that's true, like, you can apply it to your disposable software too.
[01:24:38 | 10:12:29 AM] If it's free and fast, who cares?
[01:24:42 | 10:12:34 AM] Making testing easier.
[01:24:43 | 10:12:35 AM] So this is not just about, like, hey, how do we do better testing?
[01:24:46 | 10:12:38 AM] Look, how do you make it so that nobody has to think about how to do better testing?
[01:24:51 | 10:12:42 AM] How do you make it so that every test is fast and deterministic without anybody having to be a deep expert in testing?
[01:24:58 | 10:12:50 AM] There's a ton of work that you have to put into test infrastructure to make that possible.
[01:25:03 | 10:12:55 AM] For example, you know, one of the great dreams that I've always had as a test owner is that everybody would provide in-memory fake versions of their services, and I could just run those in-memory fake versions of their services.
[01:25:14 | 10:13:05 AM] Guess what?
[01:25:15 | 10:13:06 AM] The coding agent can do that.
[01:25:16 | 10:13:07 AM] So you can just do that now, right?
[01:25:17 | 10:13:09 AM] But you have to choose to do it and make it available to everybody.
[01:25:21 | 10:13:13 AM] And another thing is, look, maximum strictness.
[01:25:24 | 10:13:16 AM] You just turn the strictness up everywhere.
[01:25:26 | 10:13:17 AM] You set all your lint rules to maximum.
[01:25:28 | 10:13:20 AM] You never compromise on anything, and it just eliminates—it's very similar to standardization.
[01:25:33 | 10:13:25 AM] It eliminates a ton of conversations.
[01:25:35 | 10:13:27 AM] Sometimes the linter is wrong.
[01:25:36 | 10:13:28 AM] Like, as long as the false positive rate is relatively low and it doesn't have catastrophic consequences, it doesn't matter, because all of a sudden there's a bunch of future lint errors or future issues that you don't have to deal with.
[01:25:46 | 10:13:37 AM] Like, ask anybody who's been like, Oh, I suddenly want to turn on my linter in this million-line codebase, and they're like, Oh wow, now here's my hundred-thousand-line change that I need to make, right?
[01:25:55 | 10:13:46 AM] Much easier to just do that up front and have it on for everybody.
[01:25:57 | 10:13:49 AM] Now, look.
[01:25:58 | 10:13:49 AM] Like I said, I could literally stand here and talk to you about this straight for 10 hours.
[01:26:03 | 10:13:54 AM] There is much, much more you can do here.
[01:26:05 | 10:13:57 AM] This is just a few areas, but also a whole area of software engineering discipline that you can apply on the other axes.
[01:26:11 | 10:14:03 AM] So this lets us now answer our question, not just it depends, but yes or no.
[01:26:18 | 10:14:10 AM] So does code quality even matter for disposable software?
[01:26:25 | 10:14:16 AM] No.
[01:26:26 | 10:14:17 AM] For durable software?
[01:26:28 | 10:14:19 AM] Yes.
[01:26:28 | 10:14:20 AM] And we get to answer a third and even more interesting question, which is, does it have to be expensive?
[01:26:34 | 10:14:26 AM] No.
[01:26:36 | 10:14:28 AM] Thank you very much.
[01:26:57 | 10:14:49 AM] As AI takes on more of the building, what does it mean to be an engineer?
[01:27:03 | 10:14:54 AM] Here to explore why defining success may become the essential skill, please welcome Aparna Dhinakaran, co-founder and chief product officer at Arize AI.
[01:27:25 | 10:15:17 AM] Hey, New York.
[01:27:27 | 10:15:18 AM] Awesome.
[01:27:28 | 10:15:19 AM] Well, welcome to AI Engineer.
[01:27:31 | 10:15:23 AM] Thought, given we're at AI Engineer New York, we'd kind of revisit the question of what does an AI engineer do?
[01:27:38 | 10:15:30 AM] I feel like every year we have an idea of what an AI engineer does, and that definition kind of changes.
[01:27:45 | 10:15:37 AM] And as I was putting this talk together, it was super timely because Kripati actually just tweeted something this weekend where he kind of talks about this growing gap.
[01:27:57 | 10:15:49 AM] Between basically folks at the frontier who are running thousands of agents and swarms of always-on agents.
[01:28:04 | 10:15:56 AM] And he really kind of drops this funnel where 6 billion-plus users have maybe touched or interfaced with an LLM, 1 to 2 billion are maybe like casual free-tier users, 20 million are professionals who have maybe started using it for more, taking some piece of work that would have taken weeks down to days.
[01:28:26 | 10:16:17 AM] But really those at the frontier labs are, which is a super small percentage, it's like 5,000 users, are the ones who are running thousands and thousands of agents at once.
[01:28:40 | 10:16:32 AM] And as I look at this, it really is, I mean, he's kind of dropped a bit of the funnel.
[01:28:44 | 10:16:36 AM] I mean, the first question anyone looks at this is that, where am I on this?
[01:28:48 | 10:16:40 AM] And, you know, he's kind of drawn out a bit of a roadmap of how does everyone get to, in the next couple of years, one of those 5,000 users who are running thousands of agents.
[01:29:00 | 10:16:52 AM] And this has been happening, I'd say, for a couple of decades now, where the abstraction layer has gotten higher and higher.
[01:29:06 | 10:16:58 AM] I mean, definitely faster in the last couple of years, but we've gone from engineers writing higher-level abstraction languages to, I mean, just copy-pasting code, using local agents, to using cloud agents, to really the expectation now is how do all of us start running a team of agents or factories of agents internally and build toward that.
[01:29:33 | 10:17:25 AM] And what this has led to is essentially what is the then and now of what an AI engineer is.
[01:29:38 | 10:17:30 AM] And this is a bit, I think, of a roadmap for some, but I think internally this is what we've already started to kind of push towards.
[01:29:49 | 10:17:40 AM] As an AI engineer, your job is no longer to just write the feature, write an AI feature.
[01:29:53 | 10:17:44 AM] It's about how do you build the loop to write that feature.
[01:29:57 | 10:17:48 AM] It's no longer about— You know, just reading the diff and actually do.
[01:30:02 | 10:17:53 AM] Actually, doing code review, it's actually how do you set up systems and agents to do the code reviews, and how do you write evals to actually do the non-deterministic, to review those non-deterministic tasks.
[01:30:14 | 10:18:05 AM] It's actually no longer even about just setting up metrics and software kind of telemetry, but it's actually how do you have agents go through and read the observability data, and have agents actually consume that telemetry to find patterns.
[01:30:28 | 10:18:20 AM] And so this loop that we've kind of been talking about, which is the build, eval, ship, you monitor, you improve it.
[01:30:35 | 10:18:26 AM] Well, the AI engineer is now actually responsible not just for doing each of those steps, but how do you build the loop that actually does each of those steps.
[01:30:45 | 10:18:37 AM] And at Arize, one of the things we've rolled out in our product, and I'm going to talk about a bit of what we've learned in building this, is we built Signal to actually run this loop for AI engineers.
[01:30:56 | 10:18:47 AM] What Signal does is that Signal actually looks at all of the traces, it reads the telemetry, it identifies patterns in that telemetry, and it can actually put up a fix or a PR if it has access to the repo.
[01:31:11 | 10:19:02 AM] And Signal is an always-on agent.
[01:31:15 | 10:19:06 AM] So this is an example of how Signal starts, but it actually starts off by just reading the traces.
[01:31:21 | 10:19:13 AM] Super simple example, but it goes through, reads, and all of this is configurable, but a certain volume of traces that came in in some cadence, it reads it, and then the goal is to actually identify issues from that telemetry data.
[01:31:37 | 10:19:29 AM] It has to keep track of issues that it's previously seen.
[01:31:41 | 10:19:32 AM] So we have to consider the memory of, did it see something before that it thought was an issue?
[01:31:47 | 10:19:39 AM] Did something seem like an issue, but it wasn't actually captured, and now as it collects more data, it actually thinks it's much more of a critical issue.
[01:31:55 | 10:19:47 AM] And so Signal actually starts off by reading the traces to identify problems.
[01:32:01 | 10:19:52 AM] And so one of the first things that we realized was that the future of who's actually consuming telemetry data has really changed.
[01:32:10 | 10:20:02 AM] It's no longer about humans consuming telemetry data.
[01:32:15 | 10:20:06 AM] It's not even about humans consuming it and agents kind of taking on the task, but it really is how do you set up your telemetry data so that agents are the primary consumers of that data.
[01:32:26 | 10:20:17 AM] And what that does is that that observability data can become the trigger for actually running and triggering these always-on agents.
[01:32:35 | 10:20:26 AM] And so the first thing that, if you're building a team of a factory of really always-on agents, is what triggers these agents to wake up or start.
[01:32:44 | 10:20:36 AM] And there can be a variety of triggers.
[01:32:47 | 10:20:38 AM] For Signal, for us, it's configurable to run on an ongoing cadence, so every three hours, six hours, go pull the last X amount of traces, read them, identify problems.
[01:33:00 | 10:20:51 AM] It can also be triggered by events, so Slack messages, some user complains about something.
[01:33:08 | 10:20:59 AM] It can be a metric-based trigger, but these are essentially triggers to kick up the agent actually starting.
[01:33:16 | 10:21:08 AM] Once the agent actually starts, we have to spend some time figuring out, well, what does an agent run actually look like?
[01:33:22 | 10:21:14 AM] For us, we actually pull in all of the context of the traces, any additional third-party data, so we allow collecting to APM logs, APM metrics, but all of the third-party telemetry data that we want to pull in, access to the repo, access to the actual The access to any keys that are needed to actually run this agent, but all of this information is put inside of a sandbox.
[01:33:54 | 10:21:46 AM] And this is actually what's started up every time the agent wakes up.
[01:34:00 | 10:21:51 AM] And so the agent's triggered, we build a sandbox, we put everything that we need inside of that sandbox.
[01:34:05 | 10:21:56 AM] There's a proxy.
[01:34:05 | 10:21:57 AM] The only way to get information in and out of the sandbox is by this single proxy.
[01:34:10 | 10:22:01 AM] And everything that happens inside of that sandbox is actually already getting traced.
[01:34:15 | 10:22:06 AM] And every output, so the issues that are generated and created are all getting saved to some kind of memory.
[01:34:23 | 10:22:14 AM] And so this happens every single time the agent actually runs.
[01:34:26 | 10:22:18 AM] Every time the agent finishes running, so it's sweeped through all of the traces, it either found something or it didn't.
[01:34:35 | 10:22:26 AM] There's what actually stays and what actually gets thrown away.
[01:34:39 | 10:22:31 AM] What stays is that if it found any issues, all of the output is actually saved off in some kind of memory so that the next time an agent gets spun up, it doesn't have to start from ground zero.
[01:34:49 | 10:22:41 AM] It has a history of what are the issues that it actually found.
[01:34:54 | 10:22:46 AM] The agents are traced, so all of the telemetry data of what the agent called, if it actually put up a PR, all of those things are actually traced.
[01:35:05 | 10:22:56 AM] And any skills that it may have learned while actually doing a run can also get saved to the actual repo.
[01:35:11 | 10:23:03 AM] But the things that go away is the sandbox gets torn down, any credentials obviously get removed, the repo access is removed.
[01:35:20 | 10:23:11 AM] And so all of the stuff that doesn't need to be saved kind of gets torn down after the run of Signal.
[01:35:28 | 10:23:20 AM] And we've designed Signal in a way to actually keep this agent durable.
[01:35:32 | 10:23:24 AM] So that means that either if the sandbox fails or if the harness fails, then it shouldn't have to start everything from scratch in the middle of the run.
[01:35:44 | 10:23:35 AM] It should actually just be able to pick up from the step that it failed, and all of the state, so-called, is kind of saved off in kind of a memory outside of the sandbox.
[01:35:56 | 10:23:47 AM] And so we've designed this to actually be a very durable agent so that if it fails, it can spin it back up.
[01:36:05 | 10:23:56 AM] You can launch a new sandbox, launch a new harness to kind of pick back up where it started.
[01:36:09 | 10:24:01 AM] So all of this is essentially the underpinnings of how we built Signal to run every single run.
[01:36:16 | 10:24:07 AM] Agent gets triggered, agent gets started, loaded with all the context, the evidence.
[01:36:20 | 10:24:12 AM] It sweeps through the telemetry data.
[01:36:22 | 10:24:13 AM] It either finds something or it doesn't.
[01:36:24 | 10:24:15 AM] All of that gets saved to memory.
[01:36:26 | 10:24:17 AM] If something fails in the middle, the agent can get reset up.
[01:36:29 | 10:24:21 AM] And we built Signal to also be, you know, agnostic of the model or the harness.
[01:36:35 | 10:24:26 AM] So today's Signal supports not just Claude Code, which is what we started with, but it also supports Cursor and Codex.
[01:36:40 | 10:24:32 AM] And the goal is to actually support all of the major, even the open source harnesses out there.
[01:36:47 | 10:24:38 AM] And Signal actually also supports multiple, will support kind of multiple models.
[01:36:54 | 10:24:46 AM] So even if you're using Claude Code, you can pick any of the models inside the Anthropic family.
[01:37:01 | 10:24:53 AM] And this is really important to us because, one, it's an awesome way for us to evaluate the quality of the agent every time we spin it up.
[01:37:11 | 10:25:02 AM] It helps us control costs so we can see, you know, as we use more powerful models.
[01:37:16 | 10:25:08 AM] The better quality maybe the PRs are, but can we reduce the quality of the, you know, can we reduce the cost and actually still maintain the rigor and maintain the quality of issues that are actually detected by Signal?
[01:37:30 | 10:25:21 AM] So this is something we deeply thought about from first principles when we were designing Signal.
[01:37:35 | 10:25:27 AM] And this is actually a pretty good segue into what does an AI engineer need to do?
[01:37:41 | 10:25:32 AM] Well, an AI engineer really needs to kind of learn how to write evals.
[01:37:45 | 10:25:37 AM] And so we actually, every time Signal runs, Signal finds an issue, it puts up a PR.
[01:37:50 | 10:25:42 AM] Well, there's evals that are run on top of the agent to test that PR.
[01:37:55 | 10:25:47 AM] And an eval can be as simple as, you know, testing something as part of your development workflow.
[01:38:02 | 10:25:53 AM] You have a dataset.
[01:38:03 | 10:25:55 AM] It can be a simple prompt with outputs that you're testing to make sure that there's no regressions.
[01:38:11 | 10:26:02 AM] But these evals can also, they need to be kind of aligned with human judgment.
[01:38:17 | 10:26:08 AM] And I'd argue that this is actually probably where an AI engineer should be spending a lot of their time as they're building this system to actually run the loop.
[01:38:26 | 10:26:17 AM] They should be actually spending time looking at the traces with their agents, identifying what the common errors are.
[01:38:34 | 10:26:25 AM] And there's a lot of skills.
[01:38:35 | 10:26:26 AM] I think I was hearing Lance yesterday talk about the Claude skill to build evals.
[01:38:39 | 10:26:30 AM] We have a skill with Arize Evaluator to actually help you build and write evals, as well as align those evals with the human judgment.
[01:38:48 | 10:26:40 AM] But this is probably where the shift to defining what is good becomes really, really important for an AI engineer to actually do.
[01:38:58 | 10:26:49 AM] And for a lot of teams I think we speak with and we work with, their question becomes, well, how do I trust the evaluator?
[01:39:04 | 10:26:56 AM] And do I really trust that the eval is, you know, is going to catch, or, you know, how do I trust that it's as good as my judgment?
[01:39:16 | 10:27:08 AM] And I'd say what we spend a lot of our own time doing for our own products is that we actually evaluate the evaluators.
[01:39:24 | 10:27:15 AM] We spend a decent amount of time on actually building.
[01:39:29 | 10:27:20 AM] These data sets, golden truth data sets, we run evals, verify them against the human output, and then try to align to make sure that the judge actually agrees with the human and they're in agreement before we actually ship out a new evaluator.
[01:39:46 | 10:27:38 AM] And these evals can then be used both in an offline testing as well as in an online testing manner.
[01:39:54 | 10:27:45 AM] And this is probably what I would say as an AI engineer is more and more of what the job.
[01:40:00 | 10:27:51 AM] The job is becoming.
[01:40:00 | 10:27:51 AM] And so what I'm going to leave you guys with is, as an AI engineer, you've built this agent.
[01:40:09 | 10:28:00 AM] You've built this agent to actually run, be always on.
[01:40:12 | 10:28:04 AM] You run evals before you actually ship it into production.
[01:40:17 | 10:28:09 AM] You can ship it, and then once it goes into production, the goal is to actually trace everything.
[01:40:23 | 10:28:15 AM] And tracing everything now means not just tracing the agents, but also tracing the coding agents behind the agents that built this.
[01:40:31 | 10:28:23 AM] So you can trace Cloud Code, you can trace Cursor, you can trace Codex, but all of these coding agents can be traced so you can understand what happened in the factory of agents that you all are building.
[01:40:46 | 10:28:38 AM] And then these agents, all the traces can then also be evaluated online.
[01:40:51 | 10:28:43 AM] So there's an offline evaluation when you're actually testing what a new change is, but as it goes into production, these become your online evals that you're running on top of the telemetry data.
[01:41:04 | 10:28:56 AM] This for us ends up becoming the new data that then gets pulled back into the agents to read the telemetry data, the evals, and surface up kind of problems inside of the traces.
[01:41:18 | 10:29:09 AM] So the system really becomes, how do you go from collect data, eval that data, run agents on top of it so that you can find problems and figure out where the gaps are to actually improve your systems.
[01:41:33 | 10:29:24 AM] So if I go back to kind of the question that we started this whole thing with, it's what does an AI engineer do?
[01:41:39 | 10:29:31 AM] I mean, the gap between, I think there's a pretty big gap between what's happening in the labs today and what's happening with a lot of businesses.
[01:41:48 | 10:29:39 AM] And some of it could just be the data inside of businesses are a lot more messy than what is very constrained and testable inside of a lab.
[01:41:56 | 10:29:48 AM] But AI engineers are kind of the role to close that gap.
[01:42:01 | 10:29:52 AM] And I think it really starts with tracing everything, tracing the agents you're actually building, running evals, so being able to learn how to test these products that we're really building.
[01:42:12 | 10:30:03 AM] And then how do you build a system so that agents can actually improve from the telemetry that's actually being collected, so that you're no longer just building individual features, but you're actually building the system to improve your products.
[01:42:28 | 10:30:19 AM] If you want to learn more, come check out, we have a booth.
[01:42:31 | 10:30:22 AM] You can check out Signal, learn more.
[01:42:33 | 10:30:25 AM] But thank you so much for listening to us.
[01:42:43 | 10:30:34 AM] The current program has finished its run.
[01:42:46 | 10:30:37 AM] Please collect your belongings and proceed through the main doors for your next scheduled task.
[01:51:25 | 10:39:17 AM] And I'm going to show you the work we've been doing lastly on building our first foundation model, a Wells Fargo foundation model.
[01:51:25 | 10:39:17 AM] So I explain why we did that, how we did it, and what we accomplished in doing so.
[01:51:25 | 10:39:17 AM] So, first, foundation model, it doesn't necessarily need to be language-based.
[01:51:25 | 10:39:17 AM] I mean, we're all playing with Claude and ChatGPT and others.
[01:51:25 | 10:39:17 AM] They're all language-based foundation models.
[01:51:25 | 10:39:17 AM] In financial services, we also have language, of course, from unstructured representation data.
[01:51:25 | 10:39:17 AM] But we also have a lot of structured representation, a lot of these data is tabular data.
[01:51:25 | 10:39:17 AM] We have a lot of information from our customers.
[01:51:25 | 10:39:17 AM] We have information in investment banking, consumer banking, and all of these data is data that we have in Wells Fargo and all big financial organizations have too.
[01:51:25 | 10:39:17 AM] And we want to take benefit of all of this huge amount of data that we have.
[01:51:25 | 10:39:17 AM] And it's not like you just take it and put it in a language model and get the best of it.
[01:51:25 | 10:39:17 AM] Of course, you can get a lot of benefit out of it, but it's not necessarily the best way to do it.
[01:51:25 | 10:39:17 AM] So what we decided to do is to look at the data we have, all the transactions, all the customer transactions that are doing with their debit card, credit card, digital, check, all of those coming from many different channels, and see if we can.
[01:51:25 | 10:39:17 AM] Builds from the show model that we can use and fine-tune for downstream tasks like credit scoring, or that you can use it for fraud detection, anti-money laundering, do marketing.
[01:51:25 | 10:39:17 AM] So how we can build one backbone that you can use and streamline across downstream tasks.
[01:51:25 | 10:39:17 AM] So now you're moving from many models very siloed across different organizations into really one backbone that every organization can just reuse because you learn the representations of customers' transactions at scale.
[01:51:25 | 10:39:17 AM] So that's the intent.
[01:51:25 | 10:39:17 AM] And just spoiler alert, you may say, Hey, that's tabular data.
[01:51:25 | 10:39:17 AM] Why do you just don't use XGBoost and the usual suspect?
[01:51:25 | 10:39:17 AM] We did that.
[01:51:25 | 10:39:17 AM] This is the model we had in production.
[01:51:34 | 10:39:25 AM] But the model I'm going to show you is something that beat XGBoost, even from a latency perspective, but also from a fraud detection.
[01:52:06 | 10:39:58 AM] We get much better false reduction of false positive and better detection rate.
[01:52:44 | 10:40:36 AM] So it was a really good lesson learned in terms of having better model using foundation model.
[01:53:30 | 10:41:21 AM] And foundation model mean transformer blocks, and that's what we built.
[01:53:41 | 10:41:33 AM] So we have, as I mentioned, billions of transactions on a monthly basis.
[01:53:46 | 10:41:38 AM] Our customers interacting with their debit, credit card, and they do check, and they do different sort of transactions.
[01:54:05 | 10:41:56 AM] And the question is really how we can use this information at scale and not for one and every single downstream task.
[01:55:36 | 10:43:28 AM] So I'm going to cover a bit of the data, the representations, the architecture that we use, what the result we get, and the lesson we learned in building this.
[01:56:49 | 10:44:41 AM] All right, so.
[01:56:50 | 10:44:41 AM] I mean, left-hand side, language foundation model, the processing language tokens, and then the goal is to learn a representation that's going to predict the next token.
[01:57:23 | 10:45:14 AM] And then you have supervised fine-tuning, and then you do RLHF, LRVR, and all of the great post-training process to get better at the task that you want to, right?
[01:58:53 | 10:46:44 AM] And that's for languages.
[01:59:02 | 10:46:54 AM] That's great.
[01:59:07 | 10:46:59 AM] But what if your data is very much more specialized in terms of representation?
[01:59:50 | 10:47:42 AM] So that's where we build this transaction foundation model.
[01:59:51 | 10:47:43 AM] So instead of having languages as the base, the base is now transactions, transaction from our customers.
[01:59:53 | 10:47:44 AM] And you still try to predict the next thing, and here the next thing is the next transaction or it's the next token in the transaction using all of the channel that you have.
[01:59:53 | 10:47:44 AM] But that's not the end goal.
[01:59:53 | 10:47:44 AM] I mean, similarly to language model where you try to predict the next token, that's not the end of the story, right?
[01:59:53 | 10:47:44 AM] You learn a representation, and then you use that representation, and then you fine-tune it and you post-train it for any other task, right?
[01:59:53 | 10:47:44 AM] So it could be classification task for languages, but in our context for transaction foundation model.
[01:59:59 | 10:47:51 AM] This model could be used for credit line increase, could be used for doing fraud detections and flagging bad actors from an anti-money laundering perspective.
[02:00:06 | 10:47:57 AM] And the goal is to learn this relationship between transactions over time and transactions across customers.
[02:00:16 | 10:48:07 AM] That's really the intent.
[02:00:17 | 10:48:09 AM] So the intent number one is you do pre-train from scratch.
[02:00:21 | 10:48:13 AM] I'm saying it again because people sometimes are confused.
[02:00:24 | 10:48:16 AM] We pre-train transformer blocks at scale from scratch using our transaction data.
[02:00:32 | 10:48:24 AM] So the zero rate that we use from OpenAI, we just use the architecture, and then we pre-train from scratch using our GPU cluster.
[02:00:40 | 10:48:32 AM] And then we train for a couple of days and weeks, and then you do the downstream task of post-training.
[02:00:49 | 10:48:40 AM] But the goal here, and you pre-train it for predicting the next token or the next transactions, and you try to do this, you try to predict the next pattern of the customer.
[02:01:00 | 10:48:52 AM] But that's not the intent.
[02:01:02 | 10:48:53 AM] The intent is to do the downstream task later on.
[02:01:04 | 10:48:56 AM] And in terms of scale, I mean, we operate at a large scale, so we have billions of transactions, a million of accounts, hundreds of transactions per client on a monthly basis, interacting with their debit card, credit card, or doing check.
[02:01:21 | 10:49:13 AM] And the five main dimensions we look at is really who is doing, I mean, who is processing and who is asking, and who is providing a service.
[02:01:32 | 10:49:24 AM] So really the customer and the merchant.
[02:01:35 | 10:49:26 AM] The what, so, I mean, what do we buy, what do we transact, and how.
[02:01:41 | 10:49:32 AM] So which channel is it?
[02:01:43 | 10:49:34 AM] Credit, is it debit, is it digital?
[02:01:45 | 10:49:36 AM] When is it happening and where is it happening?
[02:01:47 | 10:49:39 AM] And all of those, they're basically breaking down in hundreds of features.
[02:01:51 | 10:49:43 AM] And if you look at the existing model we have in production, there's a lot of—and people that build those models in similar organizations may understand that—they build a lot of very hard-crafted, uncrafted engineering, feature engineering efforts on that, and that requires a lot and a lot of time.
[02:02:11 | 10:50:03 AM] So we step back and look at really the raw features we need, not the ones that have been really pre-built and post-built for doing the downstream task, but try to understand which raw features.
[02:02:23 | 10:50:15 AM] And we ended up with basically a hundred features.
[02:02:26 | 10:50:18 AM] Even if at the end of the day we had thousands of them, but we tried to find which ones are really the raw information unit.
[02:02:34 | 10:50:25 AM] And then we let the architecture, the transformer blocks, to figure out the relationship between those core features.
[02:02:41 | 10:50:32 AM] And as you can see, we do have a bunch of features on those five dimensions, and the vocabulary is very unique.
[02:02:51 | 10:50:43 AM] to the financial services setup.
[02:02:53 | 10:50:45 AM] So, and that's the reason why, I mean, we didn't really use existing pre-trained model, because the vocabulary that we use is very, very specific to the work that you want to do.
[02:03:06 | 10:50:58 AM] And even if you merge, well, all digital and checking and saving and all of those sort of transactions, even if you merge all of those, you still end up with a very limited number of features and characteristics.
[02:03:22 | 10:51:13 AM] So at that scale, then the question is, well, how you work with that?
[02:03:27 | 10:51:19 AM] So we started, everything is tabular data.
[02:03:29 | 10:51:21 AM] I mean, there's no secret, it's tabular data.
[02:03:31 | 10:51:23 AM] And then the goal is to understand how you're going to capture the vocabulary, because you do have numerical values, you have categorical values, you have information like zip code.
[02:03:43 | 10:51:34 AM] Do you encode each and every zip code in a token?
[02:03:46 | 10:51:38 AM] Does that make sense?
[02:03:47 | 10:51:39 AM] So there's a lot of efforts you need to push in understanding the vocabulary that you need and the vocabulary that you want also to scale, because at the training, if you have a too huge vocabulary, it would be kind of messy to train such a model with a vocabulary which is far, far too big.
[02:04:04 | 10:51:56 AM] So there's a lot of effort in understanding this value to token.
[02:04:08 | 10:52:00 AM] So which information do you encode in a token?
[02:04:11 | 10:52:03 AM] And then you have the token to ID, the tokenizations, and then the embedding lookup.
[02:04:15 | 10:52:07 AM] So then when we have a transaction coming up, you do have the vocabulary.
[02:04:19 | 10:52:11 AM] So it's basically, it's a lookup and aligning a transaction and all the characteristics of that transaction to a token and an ID and then an embedding.
[02:04:29 | 10:52:21 AM] So just to give you a number, well, some numbers.
[02:04:35 | 10:52:27 AM] So we have quantitative, qualitative, categorical of different kinds, right?
[02:04:39 | 10:52:31 AM] So categories with only eight types, some with much bigger types.
[02:04:44 | 10:52:35 AM] You have transaction amount, which is a big deal.
[02:04:47 | 10:52:38 AM] You have the delta time between transactions.
[02:04:49 | 10:52:41 AM] So you have anything related to IP address, postal code.
[02:04:52 | 10:52:43 AM] So just to give you an example of variety and heterogeneity of each and every characteristic could be encoded in a binary token or could be encoded in a much larger number of tokens.
[02:05:05 | 10:52:56 AM] And even if you look at the zip code, I mean, you have a much larger number of zip codes in the U.
[02:05:12 | 10:53:03 AM] S.
[02:05:12 | 10:53:04 AM] than those 2,800, but you have a much better way to structure how you're going to regroup zip code based on distributions, for instance.
[02:05:24 | 10:53:16 AM] So here, just what we— so we use the Tinkchilla mathematics behind to define how we build it, right?
[02:05:36 | 10:53:28 AM] I mean, initially, because we had no clue how it's going to work in a tabular space, even though there are existing open weights and open solutions for doing tabular data foundation models.
[02:05:50 | 10:53:41 AM] So we started from what they learned and adapted to what we needed to do.
[02:05:55 | 10:53:46 AM] And that gives you an example of embedding dimensions, number of decoder blocks we use, and all of the recipe from an architecture perspective.
[02:06:05 | 10:53:57 AM] So we have— and as you can see, we're not trying to build a trillion-parameters model.
[02:06:11 | 10:54:02 AM] We don't try to compete with any of the leaders in the language models because we're working really and focusing on transactions, right?
[02:06:21 | 10:54:12 AM] Transactions foundation models at billion level.
[02:06:24 | 10:54:15 AM] And one one billion is because that the model that was kind of the smallest and gave us the highest boost.
[02:06:32 | 10:54:23 AM] And now we're working on the next version, that 11 billion.
[02:06:35 | 10:54:27 AM] But that's good enough to give a lot of ROI from a false positive reductions for downstream tasks like fraud detection and unit detection rate.
[02:06:48 | 10:54:40 AM] So, and the type of architecture, so the decoder-only architecture, that's basically for predicting the next token or the next transaction, and that's really the pre-training.
[02:07:01 | 10:54:52 AM] So here we initially used 20 times the number of parameters to define the number of tokens we might need.
[02:07:06 | 10:54:57 AM] We ended up actually 10 times factored than that.
[02:07:09 | 10:55:01 AM] So by doing a few experimentations, we needed much more tokens per parameters.
[02:07:15 | 10:55:06 AM] I mean, this is kind of the initial experimentation we did.
[02:07:20 | 10:55:12 AM] So I'll pass on this because this is the usual suspect from an objective functions, causal language modeling and masked language modeling type of optimization work.
[02:07:34 | 10:55:25 AM] And from an architecture perspective, nothing really fancy here.
[02:07:39 | 10:55:31 AM] Again, the most complex part was really the tokenization, and then adapting and doing the pre-training, and then how you do the fine-tuning.
[02:07:47 | 10:55:39 AM] So I would say the recipe or the secret sauce is really how you do the tokenization and how you're going to do the post-training.
[02:07:56 | 10:55:47 AM] But anything from a training perspective, the question is just how many transactions you're going to put in your context or in your history for doing the training.
[02:08:08 | 10:55:59 AM] And evaluation, perplexity-based, accuracy dashboard on downstream tasks, that's the usual suspect.
[02:08:18 | 10:56:09 AM] Yeah, so use mixed precision, distributed data parallel, maximize micro-batch size, get faster convergence, yeah, using Muon, rope usual, and memory efficiency, flash attention, activation checkpointing.
[02:08:34 | 10:56:26 AM] I mean, here there is nothing really new.
[02:08:37 | 10:56:28 AM] It's just we use the advices from the best, from the ones that build even much bigger models.
[02:08:46 | 10:56:37 AM] So I'll pass on this one.
[02:08:48 | 10:56:40 AM] Time is short, but I wanted to spend some time on the results.
[02:08:54 | 10:56:46 AM] So, yeah, so when you build this foundation, that foundation is really, is only a backbone.
[02:09:04 | 10:56:56 AM] It's something you can use for downstream tasks.
[02:09:07 | 10:56:59 AM] And the downstream task was to do fraud classification.
[02:09:11 | 10:57:03 AM] So you have a transaction, and then you try to predict if that transaction is going to be fraudulent.
[02:09:16 | 10:57:08 AM] So in the model we have in production, it's a NextGBoost model, and it's trained on a large amount of transactions, which is fraudulent or non-fraudulent.
[02:09:26 | 10:57:18 AM] And the missing piece is that was the relationship between whatever transaction you try to predict, try to classify, and the relationship with this transaction with all of the past transactions.
[02:09:38 | 10:57:30 AM] And that information is kind of gone when you use a NextGBoost model, unless you encode it in a very hard way, which is not so easy.
[02:09:47 | 10:57:39 AM] But if you use transformer architectures, you do have these nice attentions from transactions to past transactions.
[02:09:55 | 10:57:47 AM] And that's basically what help, this is what we think, this is what really help pushing the...
[02:10:01 | 10:57:53 AM] Pushing the fraud detection rate much higher.
[02:10:03 | 10:57:55 AM] But at the end of the day, the downstream task was to say, here's the sequence of transactions.
[02:10:09 | 10:58:00 AM] I have someone just using the debit card.
[02:10:11 | 10:58:03 AM] Is that transaction fraudulent with respect to all historical information?
[02:10:18 | 10:58:09 AM] And that's exactly what you put in at inference time when you try to do the prediction.
[02:10:25 | 10:58:17 AM] So that's the architecture.
[02:10:27 | 10:58:19 AM] So nothing really fancy here.
[02:10:29 | 10:58:21 AM] You just need to have the good engineering in place to do less than 250 milliseconds for doing the processing, because the decline need to happen within that time frame.
[02:10:43 | 10:58:34 AM] But we were 10 times slower than that from a latency perspective, so it was all good.
[02:10:50 | 10:58:42 AM] And just in terms of final result we get.
[02:10:53 | 10:58:44 AM] So the main matrix, and those matrix relate right away to dollar, to cost, well, to savings for the firm.
[02:11:03 | 10:58:54 AM] So it's detection rate and false positive rate.
[02:11:06 | 10:58:57 AM] Of course, you can detect much higher, but in many cases, sometimes you get much more false positive.
[02:11:12 | 10:59:03 AM] And in this case, we managed to get, we flagged more fraudulent activities, and we even reduced the false positive.
[02:11:20 | 10:59:11 AM] So that was a big win.
[02:11:21 | 10:59:12 AM] That was a big win because at the end of the day, if you decline a transaction which is not fraudulent, then that person is going to call.
[02:11:29 | 10:59:20 AM] There is then operation cost associated to it.
[02:11:31 | 10:59:23 AM] You lose the transaction related to that non-fraudulent action.
[02:11:36 | 10:59:27 AM] So it's something that you don't really want to happen.
[02:11:42 | 10:59:33 AM] So again, that's compared to the state of the art of XGBoost model using fraud detection.
[02:11:49 | 10:59:40 AM] So it's basically huge.
[02:11:52 | 10:59:43 AM] It's millions of dollar savings.
[02:11:55 | 10:59:46 AM] So it's a very big boost.
[02:11:57 | 10:59:49 AM] So just to finish up on that slide.
[02:12:02 | 10:59:53 AM] So that foundation model has been built on billions of transactions from Wells Fargo customers.
[02:12:12 | 11:00:03 AM] That's number one.
[02:12:14 | 11:00:06 AM] It's pre-trained from scratch, so we don't pre-train from any open-weight existing model.
[02:12:19 | 11:00:10 AM] We use existing architecture, but the way they zero-rate, we pre-training on a couple of days.
[02:12:25 | 11:00:17 AM] I mean, we did a couple of weeks initially, but then that's pre-trained.
[02:12:28 | 11:00:20 AM] And then when it's pre-trained, it's pretty good in predicting the next transaction.
[02:12:33 | 11:00:25 AM] Then when you're done with that, then you can use it for many downstream tasks.
[02:12:37 | 11:00:28 AM] We use it for fraud detection.
[02:12:38 | 11:00:30 AM] Now we're investigating for credit line increase, investigating for anti-money laundering, investigating for marketing.
[02:12:45 | 11:00:36 AM] So now the same foundation is used across different organizations within Wells Fargo.
[02:12:51 | 11:00:43 AM] And yeah, thank you for having me, and thank you.
[02:19:54 | 11:07:46 AM] All right.
[02:19:57 | 11:07:49 AM] Good morning, everybody.
[02:20:03 | 11:07:55 AM] Thank you for joining us today.
[02:20:19 | 11:08:11 AM] It is such an honor to be sharing this stage with so many great speakers.
[02:20:24 | 11:08:15 AM] So yeah, let's get right into it.
[02:20:26 | 11:08:17 AM] My name is Aman.
[02:20:27 | 11:08:18 AM] I lead AI at Arca, and today I'm going to talk to you about Arca's long horizon agents that run our business.
[02:20:36 | 11:08:28 AM] Arca is an AI native services firm.
[02:20:40 | 11:08:31 AM] We provide our clients with financial services like financial planning, tax planning, asset management, investment advice, and we serve a range of clients.
[02:20:50 | 11:08:42 AM] Some of them are like technology executives that have amassed a lot of wealth and need a real plan to retire early, but also that family in New Hampshire that made their first million dollars and want to buy that house finally.
[02:21:07 | 11:08:59 AM] I said we were AI native.
[02:21:09 | 11:09:01 AM] There's lots of definitions of this term these days, very overused.
[02:21:14 | 11:09:05 AM] But what we mean by AI native is that agents run our business.
[02:21:21 | 11:09:12 AM] Not that they assist the business from some co-pilot corner.
[02:21:25 | 11:09:17 AM] They execute the decisions that shape the outcomes that our business has for our clients.
[02:21:33 | 11:09:24 AM] Work in this industry, it's interesting to know what it looks like.
[02:21:36 | 11:09:28 AM] In financial services, the work is more long horizon and less long running.
[02:21:42 | 11:09:33 AM] And what I mean by that is this is less agents grinding tokens for like hours or days on end, right?
[02:21:49 | 11:09:41 AM] This is more one client goal that spans 10 days.
[02:21:54 | 11:09:45 AM] It's very stop-start.
[02:21:55 | 11:09:47 AM] There's many actors in between, many decision points, many handoffs, and ultimately that goal lands like 10 days later.
[02:22:04 | 11:09:55 AM] That is the kind of work that we are working on.
[02:22:07 | 11:09:59 AM] And so here's an example.
[02:22:09 | 11:10:01 AM] Jane's our client, fairly wealthy, but has a big tax bill—oh—has a big tax bill in April 15th, right?
[02:22:20 | 11:10:11 AM] So we're going to help Jane figure out what is the most tax-optimal way for this cash to be raised to pay the tax bill.
[02:22:30 | 11:10:21 AM] So there's the advisor that will do all of the statement analysis and the analysis of how to make this tax optimal.
[02:22:37 | 11:10:28 AM] There's the trader that would actually liquidate the assets.
[02:22:42 | 11:10:34 AM] The assets themselves will take like days to settle, and then the ops people will come in and kind of like trigger the ACH.
[02:22:48 | 11:10:39 AM] That will itself take days to land.
[02:22:50 | 11:10:42 AM] So this is kind of the work I'm talking about in this industry, which takes days to settle.
[02:22:57 | 11:10:49 AM] And of course, if you do this at scale for several, several clients, the amount of time our firm takes to do this sort of work exponentially, right?
[02:23:05 | 11:10:56 AM] So at Arca, we took a different approach.
[02:23:09 | 11:11:01 AM] It's helpful to know that Arca is not a SaaS company.
[02:23:14 | 11:11:05 AM] We are not selling software to other businesses, to other firms.
[02:23:17 | 11:11:09 AM] We are the firm.
[02:23:19 | 11:11:11 AM] We're an applied AI company that happens to be running a services business in this industry.
[02:23:24 | 11:11:16 AM] And so the approach we took was, all right, we're going to have agents own this whole long-horizon outcome end to end.
[02:23:32 | 11:11:24 AM] And for that, we gave them a couple of key components.
[02:23:35 | 11:11:26 AM] I'll give you a sneak peek of.
[02:23:37 | 11:11:28 AM] We gave them signals from the external world that keeps them really aware of what is happening.
[02:23:42 | 11:11:33 AM] So that email will be read by agents.
[02:23:45 | 11:11:36 AM] We give them all of our operational context on what to do about that email.
[02:23:48 | 11:11:40 AM] What does this industry do with this situation of taxes, right?
[02:23:52 | 11:11:43 AM] We give them our harness.
[02:23:54 | 11:11:45 AM] That gives them all of the tools and the guardrails, and more importantly, persistence of memory over the kind of long horizon period to carry that work out.
[02:24:05 | 11:11:56 AM] And of course, we gave them the ability to collaborate with people.
[02:24:10 | 11:12:02 AM] So that work with agents compresses a lot because all we did was we took humans out of the critical path of this work.
[02:24:20 | 11:12:12 AM] Nobody has to babysit this goal over days.
[02:24:25 | 11:12:16 AM] Agents are on it.
[02:24:26 | 11:12:17 AM] In this talk, I'd love to describe to you how we actually do that.
[02:24:31 | 11:12:23 AM] Let's follow the journey of this email.
[02:24:35 | 11:12:26 AM] Jane owes $100,000 for taxes.
[02:24:37 | 11:12:29 AM] This email, much like many other signals in our platform, will be read by background agents.
[02:24:46 | 11:12:38 AM] So there's like phone calls our firm is making, there's documents that are coming in, there's meetings being had, there's events coming in from our custodian, there's market movement that's happening.
[02:24:55 | 11:12:47 AM] These are all signals that our background agents are continuously evaluating to progress work.
[02:25:02 | 11:12:53 AM] So this email is one of those signals.
[02:25:04 | 11:12:55 AM] And when the signal is ingested by agents, they actually get to the work, right?
[02:25:09 | 11:13:00 AM] We have a harness that gives them the knowledge to know what to do about the situation.
[02:25:13 | 11:13:04 AM] They have deep client memory, so they know, hey, let's never touch Jane's Apple position because she said that in a call like eight months ago, right?
[02:25:22 | 11:13:14 AM] We of course have a sandbox for all of the financial computation that needs to happen for this analysis.
[02:25:28 | 11:13:19 AM] But largely, I think harnesses today are coalescing on a standard shape.
[02:25:32 | 11:13:23 AM] So it's more interesting what happens outside of this harness.
[02:25:39 | 11:13:30 AM] So after they've done the work, they produce this plan.
[02:25:42 | 11:13:33 AM] This plan by itself cannot be executed without people.
[02:25:45 | 11:13:37 AM] So in our product, we build a space, agents build a space where they put out this plan and there's, you can chat with the agent to like kind of know what's happening with the plan.
[02:25:55 | 11:13:46 AM] There's multiple people that can be chatting with the agent.
[02:25:59 | 11:13:50 AM] And more importantly, this space is where also they pull people in when they need people to execute some work.
[02:26:05 | 11:13:56 AM] So here in this case, we would approve the plan and the email out to Jane.
[02:26:11 | 11:14:02 AM] And then there's this whole dance of, has Jane replied?
[02:26:15 | 11:14:06 AM] What does her answer mean for the plan that we had, right?
[02:26:19 | 11:14:10 AM] And then all of these other questions that will have to be answered throughout this whole like long horizon work.
[02:26:24 | 11:14:15 AM] At Arca, we were like, of course we're not going to have people babysitting it.
[02:26:29 | 11:14:20 AM] So we let our agents watch the world so people don't have to, right?
[02:26:33 | 11:14:24 AM] So we give them tools to be able to register interest in anything happening in our world.
[02:26:39 | 11:14:30 AM] So they're able to say, let me know when Jane responds.
[02:26:42 | 11:14:34 AM] Let me know when that ACH lands, right?
[02:26:45 | 11:14:37 AM] And this is powered by our signal system in the background where agents are routing signals to agents that are interested in it.
[02:26:55 | 11:14:46 AM] And of course, if the signal never lands, agents can like wake themselves up on a schedule as well to keep track of work.
[02:27:05 | 11:14:57 AM] But then of course, the real world is very messy, right?
[02:27:10 | 11:15:01 AM] People are waiting for that email, but Jane never responds to that email.
[02:27:15 | 11:15:07 AM] Say we meet her in person and we learn some information that affects the plan.
[02:27:20 | 11:15:12 AM] So the person goes in and they add this information into our UI.
[02:27:25 | 11:15:16 AM] But this act of adding information or doing work in our UI is also a signal that will wake up an agent.
[02:27:33 | 11:15:24 AM] In fact, when people work in our product, when they reschedule a calendar event, you know, that's a signal.
[02:27:40 | 11:15:31 AM] When they mark a task complete, that is a signal.
[02:27:43 | 11:15:35 AM] So this system lets us be both aware of everything happening in the external world and the internal world as work is progressing so our agents can participate in work.
[02:27:56 | 11:15:48 AM] And of course, agents are communicating with each other as well.
[02:28:00 | 11:15:51 AM] So this signal read by a background agent, we let it notify another agent about this so that it can update the space to say, hey, we just need $80,000 instead of the $100,000.
[02:28:11 | 11:16:02 AM] So the work has changed because of these signals.
[02:28:15 | 11:16:07 AM] And the last piece of the story is that agents are able to pull in the right people at the right time.
[02:28:20 | 11:16:12 AM] So the agent on the left has read operational context to be like, okay, the next step here is to pull in the person that trades these assets.
[02:28:30 | 11:16:22 AM] And so that person now gets a task and gets pulled in to participate in this long horizon work.
[02:28:38 | 11:16:29 AM] What we've done overall, if you take a step back, is we've given our agents the primitives for driving longer horizon work.
[02:28:45 | 11:16:37 AM] What do people do at work, right?
[02:28:47 | 11:16:39 AM] They need to stay aware of what is happening.
[02:28:49 | 11:16:40 AM] So we've built this very intense signal system for our agents to be aware.
[02:28:53 | 11:16:45 AM] They need to know what to do next.
[02:28:55 | 11:16:47 AM] So we've given them all of this operational context.
[02:28:58 | 11:16:49 AM] They need to do the work.
[02:28:59 | 11:16:50 AM] So it's our harness that lets them actually perform the work and keep track of it, right?
[02:29:03 | 11:16:54 AM] It's long persistence memory systems that hold the state and bring in the right people at the right time.
[02:29:14 | 11:17:06 AM] This is a pretty simple idea on the face of it, but there's a lot of emergent complexity.
[02:29:20 | 11:17:11 AM] You can imagine at any point there's hundreds of these signals coming in, and tasks are being added on people's plates, they're being pulled in, background agents are communicating with each other, right?
[02:29:33 | 11:17:24 AM] So over the last six months, we've been working on getting this system to be really good.
[02:29:38 | 11:17:29 AM] We've been closing all of our context gaps so that agents are fully aware.
[02:29:43 | 11:17:34 AM] We have been working on the precision of tasks, so pulling in the right person at the right time.
[02:29:49 | 11:17:40 AM] Work that needs to be tracked for the future is tracked in the agent's memory.
[02:29:53 | 11:17:44 AM] Work that is doable now becomes a task, right?
[02:29:56 | 11:17:47 AM] So we've been working on our ability to hold state over long horizons as well.
[02:30:01 | 11:17:53 AM] And because we are the firm and not just a SaaS company, we've been changing and standardizing how work happens in the firm in the first place, and operationalizing that context into our agent state.
[02:30:15 | 11:18:06 AM] And because these are our colleagues that use our product, we collect rich reasoning from them that become evals for our system to improve.
[02:30:25 | 11:18:16 AM] So, I guess there's a question to be asked here, like, why do this, right?
[02:30:29 | 11:18:21 AM] What does this unlock?
[02:30:32 | 11:18:23 AM] What is the takeaway here, right?
[02:30:33 | 11:18:25 AM] For us, this is our whole thesis, is that we want our platform to be so AI-native that agents drive the business.
[02:30:44 | 11:18:35 AM] Agents run the business.
[02:30:45 | 11:18:37 AM] They are making the decisions that shape our outcomes.
[02:30:49 | 11:18:41 AM] And so at Arca, when people log in, right, they see a list of tasks that have been prepared for them by agents.
[02:30:57 | 11:18:49 AM] They've already read that email.
[02:30:59 | 11:18:50 AM] They've, like, looked at the document that came in.
[02:31:01 | 11:18:53 AM] They've done, like, 90% of the work, and they're pulling you in just when it's time for you to act.
[02:31:08 | 11:19:00 AM] So building this system lets us get to a point where at Arca, agents prompt people more than people are prompting agents, which lets our agents drive the work that our firm does.
[02:31:23 | 11:19:14 AM] And because agents are driving the work the firm does, agents can drive the business.
[02:31:29 | 11:19:20 AM] Let me give you an example.
[02:31:30 | 11:19:21 AM] Remember that email that Jane sent us?
[02:31:32 | 11:19:24 AM] This is a bit of a failure, right?
[02:31:34 | 11:19:25 AM] Because we should have just been proactive about this in the first place, right?
[02:31:38 | 11:19:30 AM] So Jane should never have to send this email.
[02:31:41 | 11:19:32 AM] So say at, you know, our AI-native business, we take on this new goal.
[02:31:46 | 11:19:38 AM] Our new goal is— Proactivity.
[02:31:51 | 11:19:42 AM] Every January, prepare each client's tax situation and proactively reach out to them before anyone even asks.
[02:31:59 | 11:19:50 AM] This is a new business goal for our business to drive.
[02:32:01 | 11:19:53 AM] And in an AI-native firm, all we have to do is make this goal part of our agent's set of goals.
[02:32:10 | 11:20:02 AM] And because they have the primitives to be able to drive work through people for the business, they start driving this goal.
[02:32:18 | 11:20:09 AM] And just like that, you have these analyses being done in January and these one-click approval emails with the full plan for every client showing up on our users' plates.
[02:32:32 | 11:20:24 AM] And because they're aligned with the goal of proactivity, they can one-click approve and drive the business towards this new outcome.
[02:32:42 | 11:20:34 AM] So this is sort of, I think, the key difference between a company that uses AI tools versus a company that is AI-native.
[02:32:56 | 11:20:48 AM] In an AI-native company, you know you've built one when you can steer your business by steering your agents.
[02:33:04 | 11:20:56 AM] And that is our ambition at Arca, and we're hiring.
[02:33:13 | 11:21:04 AM] So please check out our website.
[02:33:15 | 11:21:07 AM] Please reach out to me if this is something that you're interested in working on, these sorts of problems.
[02:33:20 | 11:21:11 AM] And thank you for listening.
[02:43:13 | 11:31:05 AM] Hey, Dick.
[02:43:14 | 11:31:05 AM] Hey, Davis.
[02:43:14 | 11:31:06 AM] Hey, Ian.
[02:43:15 | 11:31:07 AM] Hi, everyone.
[02:43:16 | 11:31:08 AM] Welcome to AI Engineer New York.
[02:43:19 | 11:31:11 AM] I'm super excited to be here today.
[02:43:22 | 11:31:14 AM] My name is Allie Howe.
[02:43:24 | 11:31:16 AM] I'm a member of technical staff at Keycard.
[02:43:27 | 11:31:19 AM] I'm here with some amazing panelists today.
[02:43:29 | 11:31:21 AM] We have Ian, CEO of Keycard.
[02:43:32 | 11:31:24 AM] We have Michael Davis, Global Chief Security Architect at J.
[02:43:36 | 11:31:28 AM] P.
[02:43:36 | 11:31:28 AM] Morgan Chase.
[02:43:37 | 11:31:29 AM] And we have Dick Hart, the founder of Aoth and co-creator of Oath, with us on stage today.
[02:43:45 | 11:31:37 AM] I'm super excited to talk to all of them about intent-based authorization.
[02:43:50 | 11:31:42 AM] And to set the stage, I want to bring to light that as more companies are looking to give their agents increased levels of autonomy, they're looking to runtime authorization to help.
[02:44:01 | 11:31:53 AM] Runtime auth is the practice of authorizing an agent per tool call, rather than having the agent hold broad standing access that it will eventually misuse.
[02:44:10 | 11:32:02 AM] However, is this tool call or not is never a simple question.
[02:44:15 | 11:32:07 AM] This is because many MCP tools and APIs are coarse-grained.
[02:44:20 | 11:32:12 AM] Humans struggle to write the perfect policy, and the environment around the agent will change as it runs.
[02:44:27 | 11:32:19 AM] Intent can help by providing extra context so that at runtime, we can make better authorization decisions about what an agent is allowed or is not allowed to do.
[02:44:39 | 11:32:31 AM] So to continue, I would like to talk about, really dive into, why do we need intent-based auth in the first place?
[02:44:47 | 11:32:39 AM] Models have dramatically improved.
[02:44:49 | 11:32:41 AM] They have bigger context windows.
[02:44:51 | 11:32:43 AM] They're able to verify work because model vision capabilities have improved, and in many contexts, people are proclaiming that AGI is here.
[02:45:00 | 11:32:52 AM] If the models are so good, if AGI is really here today, then why are teams struggling to give their agents more autonomy?
[02:45:07 | 11:32:59 AM] Ian, let's start with you.
[02:45:09 | 11:33:01 AM] You're helping many financial enterprises at Keycard.
[02:45:12 | 11:33:04 AM] What are you seeing that's getting in the way?
[02:45:14 | 11:33:06 AM] Well, I think broadly speaking, enterprises, especially financial services firms, regulated industries, are almost always security first.
[02:45:20 | 11:33:12 AM] It's how they build trust in their business, and maintaining the business continuity is bar first, like the first priority.
[02:45:25 | 11:33:17 AM] Then innovation is second, third, or fourth.
[02:45:28 | 11:33:20 AM] I think, like broadly speaking, in any enterprise, what you see is this hodgepodge of different little islands, of different little identities, of different little systems from across all different worlds.
[02:45:39 | 11:33:30 AM] And how do you actually tie that together in a way that an agent can navigate through that, ask for access, and then also ensure that the agent cannot perform something that was unintended by the user or the business?
[02:45:50 | 11:33:41 AM] And the unfortunate situation is most of our systems today are course-grained, right?
[02:45:54 | 11:33:46 AM] I don't know, Salesforce is a good example, where for a very long time they had a single scope, which was API on their OAuth, which is like, in the context of an agent, not very helpful.
[02:46:03 | 11:33:55 AM] So that's broadly the first and foremost part, is that most of the systems they have for security today were designed for a world where humans were making all the decisions and software is very deterministic, not this new fangled magic box we've invented that basically reasons and tries over and over again to find a solution to a problem.
[02:46:21 | 11:34:13 AM] Dig, how is OAuth part of the problem?
[02:46:23 | 11:34:15 AM] How is OAuth getting in the way?
[02:46:25 | 11:34:17 AM] Why is it not the right fit for agents?
[02:46:28 | 11:34:19 AM] Well, when people started looking at how do we authorize agents to access something, the tool that was sitting there on the shelf was OAuth.
[02:46:35 | 11:34:26 AM] And people grabbed that tool and says, Here's a tool.
[02:46:38 | 11:34:30 AM] This is authorization.
[02:46:40 | 11:34:32 AM] It should be able to solve the problem.
[02:46:41 | 11:34:33 AM] But OAuth was not designed for this kind of world.
[02:46:44 | 11:34:36 AM] It was designed originally for like, how do I let this website talk to this website?
[02:46:49 | 11:34:40 AM] You know, in OAuth 2, we added scopes.
[02:46:51 | 11:34:43 AM] Before that, it was just do anything.
[02:46:54 | 11:34:46 AM] But it required you to be pre-registered.
[02:46:57 | 11:34:49 AM] It's expecting that there is a browser involved and a redirect.
[02:47:00 | 11:34:51 AM] You know, OAuth has evolved over the years to support some other things.
[02:47:03 | 11:34:55 AM] But the agentic world is completely different.
[02:47:05 | 11:34:57 AM] We don't know ahead of time what the agent needs to do.
[02:47:08 | 11:35:00 AM] We need to go and make that decision over time.
[02:47:10 | 11:35:02 AM] Different instances of an agent are going to need different kinds of things.
[02:47:14 | 11:35:06 AM] And, you know, as Ian talked about, the granularity of the scopes that people says, well, we already have scopes for OAuth.
[02:47:20 | 11:35:12 AM] Let's just map those over to agents, is far too coarse-grained for what agents are doing.
[02:47:27 | 11:35:19 AM] Davis, how are you seeing enterprises move towards higher levels of autonomy?
[02:47:32 | 11:35:23 AM] Yeah, I think the key piece is how do you deal with that coarse-grain problem?
[02:47:36 | 11:35:28 AM] And what I've seen the kind of more successful enterprises is they kind of board agents like they onboard developers, right?
[02:47:42 | 11:35:33 AM] Start with, you don't get full, you know, commit access day one, right?
[02:47:45 | 11:35:37 AM] You're actually having to go through and add levels of capability as they mature, right?
[02:47:51 | 11:35:43 AM] And so the definitions that enterprises are coming up with of what is the context that makes this agent safe.
[02:47:56 | 11:35:48 AM] And it isn't just usually what the agent says, right?
[02:47:59 | 11:35:51 AM] It can, you know, attest to something, but it's other things like the environment around it and other information that can help you understand levels of autonomy.
[02:48:06 | 11:35:58 AM] Very simple example would be, where is the sandbox running?
[02:48:09 | 11:36:01 AM] Is it in the sandbox, right?
[02:48:10 | 11:36:02 AM] Those type of things can change the level of autonomy that's allowed.
[02:48:14 | 11:36:06 AM] Absolutely.
[02:48:14 | 11:36:06 AM] You know, as we mentioned that coarse-grain access problem, and to put that into perspective, to give an example, with Notion's MCP server, you can say, fetch this page, which is like the view page tool or get page, but you can't say, just get this database on this page.
[02:48:31 | 11:36:23 AM] How is runtime authorization based on intent a better model?
[02:48:34 | 11:36:26 AM] That's for anyone.
[02:48:38 | 11:36:30 AM] I'll take a shot at it.
[02:48:39 | 11:36:31 AM] So to me, this is something that the financial services industry, hopefully maybe we can learn from the background that, you know, banks have gone through.
[02:48:47 | 11:36:39 AM] Banks moved long ago from authorizing and authenticating humans to authorizing the transaction, right?
[02:48:53 | 11:36:45 AM] And when is that transaction occurring?
[02:48:55 | 11:36:47 AM] At runtime, right?
[02:48:57 | 11:36:49 AM] And so I think that, you know...
[02:48:59 | 11:36:50 AM] Runtime authorization is we're going to be able to learn from the kind of the scars of the past that we've had and apply it to this new problem.
[02:49:06 | 11:36:58 AM] I also think that, you know, one thing is it's a lot easier to debug something at runtime when you understand the intent, right?
[02:49:13 | 11:37:05 AM] I think we've all remember back in the day writing checks, right, or seen those things on TV now, I guess is the right thing.
[02:49:19 | 11:37:11 AM] But, you know, writing checks, there was a memo field there, right?
[02:49:22 | 11:37:14 AM] That memo field was used to actually tell the intent of what this payment was.
[02:49:25 | 11:37:17 AM] But the check itself did have limits, right?
[02:49:28 | 11:37:19 AM] The price, the payee, the date, et cetera, right?
[02:49:31 | 11:37:23 AM] I think a lot of those concepts are now being applied and can be applied to help with this runtime.
[02:49:36 | 11:37:28 AM] Intent's sort of one of those, you know, like many words, words are hard.
[02:49:40 | 11:37:32 AM] And so, you know, building on the example here of making a payment of a transaction, right, you know, that's not a scope.
[02:49:47 | 11:37:39 AM] That's, can I do this one thing in this particular context?
[02:49:51 | 11:37:43 AM] Well, this one payment.
[02:49:53 | 11:37:45 AM] But I think we need an agent to make a decision, should it be able to do it, you need all the rest of the context of, well, why are we making—
[02:50:01 | 11:37:52 AM] Are we making this payment?
[02:50:02 | 11:37:53 AM] What are all the things that happened before?
[02:50:04 | 11:37:56 AM] You know, did we just make the same payment just like, you know, five seconds ago, and now this is a double payment, right?
[02:50:10 | 11:38:02 AM] You know, just because this is right in context by itself doesn't mean it's the right thing within the broader mission.
[02:50:16 | 11:38:08 AM] And so, you know, in Aoth, we're working on the concept of a mission that is what do we want the agent to accomplish, big picture, and then each of the decisions are made within the context, you know, the intent around what's happening big picture around doing that.
[02:50:31 | 11:38:23 AM] And you need granularity at the transaction layer for many of the things to know what exactly is happening, not just, I'm allowed to go and make payments.
[02:50:42 | 11:38:33 AM] Yeah, I think one of the most interesting things, I think, like a practical example, like to understand, like, why intents are required is if you have two ChatGPT sessions or two Claude sessions, and one session I say, Hey, help me go to do some shopping, and the other session I say, Hey, help me understand why there's a bug in production.
[02:50:58 | 11:38:50 AM] Those have very different, like, profiles in terms of, like, what permissions they should have and also when they should bring you back into the loop.
[02:51:05 | 11:38:56 AM] Like, when should the human be involved again?
[02:51:07 | 11:38:58 AM] And so at the end of the day, if we don't have intent or some capacity to, like, relay what is the user or the business's intent with this thing, we actually can't get to, like, autonomy, right?
[02:51:15 | 11:39:07 AM] And so a lot of the talks this morning were, Hey, we're going to run our business on agents, we're going to do all this stuff.
[02:51:20 | 11:39:11 AM] It's like, well, great.
[02:51:21 | 11:39:12 AM] What happens the first minute, like, a Pacto-style incident happens where, like, it actually accidentally deletes the production database instead of staging because it has coarse-grained access instead of long-scoped access.
[02:51:30 | 11:39:22 AM] And so what we want as an industry is to leverage this, like, magic box we've created to, like, automate our lives.
[02:51:37 | 11:39:29 AM] The current state of the world is that you can do that and take all of the risk, and then you can see all the incidents that come from it.
[02:51:43 | 11:39:34 AM] And so until we actually solve that underlying problem, realizing true autonomy, so being able to operationalize our business and be able to step away as humans.
[02:51:52 | 11:39:43 AM] And scale that, we have to solve intent first.
[02:51:55 | 11:39:47 AM] Absolutely.
[02:51:56 | 11:39:48 AM] And now that we understand why we need intent-based auth, let's talk about what it is practically.
[02:52:01 | 11:39:52 AM] What are the primitives?
[02:52:02 | 11:39:53 AM] What does it actually look like in practice?
[02:52:04 | 11:39:56 AM] Dick hinted at it with the concept of the AOF mission.
[02:52:08 | 11:40:00 AM] So, Dick, elaborate on the mission.
[02:52:10 | 11:40:02 AM] What is the mission based off of?
[02:52:12 | 11:40:04 AM] Is it based off of the user's intent?
[02:52:14 | 11:40:06 AM] Is it the agent's intent, or is it a combination of the two?
[02:52:18 | 11:40:10 AM] Well, the agent, you know, should be working on behalf of the person.
[02:52:22 | 11:40:13 AM] And in AOF, we define a person as either the organization or a human, because it could be operating on either one of those.
[02:52:29 | 11:40:20 AM] And so it needs to be acting in the best interest of the person that it's acting on, because that is who's ultimately responsible for what the agent does, right?
[02:52:39 | 11:40:30 AM] The agent can't be responsible, right?
[02:52:42 | 11:40:33 AM] And so the mission is something that the person is giving the agent to do.
[02:52:48 | 11:40:40 AM] A good agent is going to go and negotiate with the person to go and talk more about, like, what are the parameters around that.
[02:52:55 | 11:40:47 AM] You know, a good example is when you think of back, you know, in the day, which seems like only like three months ago, when you would want to code something up and you'd create a plan and then the agent would do the plan.
[02:53:06 | 11:40:58 AM] Now you just tell it and it figures everything out.
[02:53:08 | 11:41:00 AM] But that whole concept of what's a plan, what are you trying to do, and you give that to the agent, so then that then is the context around where you're making authorization decisions later on.
[02:53:20 | 11:41:11 AM] And then that mission identifier tracks through everything, so you can go and, you know, audit and be able to see what were all the things that happened and what were the decisions that happened in the context of this one mission, right?
[02:53:34 | 11:41:25 AM] Where today, you know, there isn't really a good concept of agent identity or the mission, right?
[02:53:40 | 11:41:31 AM] It's just making something and things are making decisions without really knowing which instance of the agent is doing it or what's the context of what mission is this involved in, right?
[02:53:52 | 11:41:43 AM] Tell me more about that negotiation phase, because what happens if a user is talking to an agent, and it talks to that agent and says, I want you to go read the CEO's email.
[02:54:02 | 11:41:53 AM] That's outside of the scope of that agent.
[02:54:04 | 11:41:55 AM] So is that intent rejected from the user?
[02:54:08 | 11:41:59 AM] Should be.
[02:54:10 | 11:42:01 AM] So, you know, with a good separation—and I don't know whether, I forget whether we were talking about this later—but the separation concerns of the worker, right?
[02:54:19 | 11:42:10 AM] There's an agent that's doing the work, and we believe there should be a separate agent that's supervising what this one does.
[02:54:26 | 11:42:18 AM] And so that you have a separation of concerns where this one can't do any of the work, but it gets to decide what this agent gets to do.
[02:54:34 | 11:42:25 AM] And so if the user says, Oh, I want you to go read the CEO's email, that's probably going to get caught in deterministic policies right away, right?
[02:54:42 | 11:42:34 AM] Like, that's not a vague thing, right?
[02:54:45 | 11:42:36 AM] Reading somebody else's email, we've got good controls for that.
[02:54:49 | 11:42:41 AM] But telling the agent to, you know, send the CEO's—forward a CEO's email to the outside world, that's a little more vague, and that's the kind of thing that ideally comes back to a supervising agent and says, That's probably a bad idea, and no, you can't do that.
[02:55:08 | 11:42:59 AM] Absolutely.
[02:55:08 | 11:43:00 AM] So I feel like that's another primitive, too, of intent-based is policy.
[02:55:13 | 11:43:05 AM] Ian, at Keycard, how are you seeing that when a mission needs to change or a policy needs to update, how can Keycard help keep track of those changes as maybe the mission or policy updates need to be made?
[02:55:23 | 11:43:14 AM] Yeah, I think, like, taking a step back, there's, like, actually—it was Dave and I were sitting in a room some time ago, and before, like, AAuth and some of these things actually had emerged in the ecosystem, one of the things we actually talked a lot about was consent fatigue.
[02:55:35 | 11:43:26 AM] And I think, like, at the minimum, like, we—you always have this, like— How secure do you make a system versus, like, the trade-off of, like, the impact to the human?
[02:55:43 | 11:43:35 AM] And so, you know, a key card, our broad view on this is you want to have, like, broad-based deterministic policy that basically says this is what must never happen, effectively, right?
[02:55:51 | 11:43:42 AM] Or these are the things that always require a human to be involved.
[02:55:54 | 11:43:46 AM] And then from there, what you really want to think about is, okay, cool.
[02:55:57 | 11:43:49 AM] Well, now that I have that in place, there's a big gap between all of the policy I can write as a human or write as an organization and then what I actually want the policy to be in the specifics of a specific task.
[02:56:10 | 11:44:01 AM] And so the real challenge is how do I, like, layer over those two things, right?
[02:56:14 | 11:44:05 AM] Because humans can't write it all.
[02:56:15 | 11:44:07 AM] And so there's a version of that that is like a user or agent-to-agent interaction, and they have an intent between those two of, like, transactional intent.
[02:56:23 | 11:44:14 AM] And there's also, like, the business's intent for why they build or adopt an agent.
[02:56:26 | 11:44:18 AM] So why did we buy Claude Code?
[02:56:28 | 11:44:20 AM] Well, because we wanted to make our developers more successful, or because we wanted to do these different things.
[02:56:33 | 11:44:25 AM] And in the context of using Claude Code or whatever, why am I working in this moment with Claude Code?
[02:56:39 | 11:44:30 AM] Well, it's actually to fix a bug in staging, right?
[02:56:41 | 11:44:32 AM] And those are two different types of intent.
[02:56:42 | 11:44:34 AM] And if we can understand those two different things and then convert that some way into, like, a bounding box of what those agents can do, you can then basically calculate the intersection of that and say, okay, here's what you can actually do.
[02:56:54 | 11:44:46 AM] And then the trick for anyone building these systems is how do I ensure that I don't bring the user into the loop except when absolutely required, because that's what's going to be the adoption curve problem.
[02:57:03 | 11:44:55 AM] But that's also the adoption curve problem when it comes to, like, enabling agents to be autonomous in the first place.
[02:57:09 | 11:45:01 AM] Yeah.
[02:57:10 | 11:45:01 AM] I like what you were saying with the intersection.
[02:57:11 | 11:45:03 AM] I think that's a unique thing we don't talk about enough within identity and access management, right?
[02:57:16 | 11:45:07 AM] Normally you get access to one thing, right?
[02:57:18 | 11:45:09 AM] And so what I've seen successful kind of in this intent-based approach, and where I get more excited is you can actually have those different intents be from different areas of the organization, right?
[02:57:28 | 11:45:19 AM] And so you have the decoupling of these things, and they can kind of live on their own, but then come together to form that, you know, decision.
[02:57:34 | 11:45:26 AM] And that decision doesn't have to be static, right?
[02:57:36 | 11:45:28 AM] So if we use the example of the CEO's email, well, you know, if that context involves that the administrative assistant, then yeah, maybe she is supposed to read the email, right?
[02:57:45 | 11:45:36 AM] Or maybe just the calendar, right?
[02:57:47 | 11:45:38 AM] And so I think when we see and we start thinking about these intersection components, we have a totally different way we can start expressing policy, but also start to bring in not just the one side of the equation we always talked about before, which was the app doing something.
[02:58:00 | 11:45:52 AM] Now we actually have the ecosystem you can bring in.
[02:58:03 | 11:45:54 AM] And so the more I see organizations starting to realize that, you know, maintaining that state or that context of these other elements to be able to help with that intention can completely change the way you're effective at runtime authorization.
[02:58:15 | 11:46:07 AM] And are you seeing this across enterprises today?
[02:58:17 | 11:46:09 AM] Most people have mission tracking and policy tracking in place, or is that largely missing today?
[02:58:22 | 11:46:13 AM] No, it's brand new still.
[02:58:24 | 11:46:15 AM] And I think part of the reason why I'm excited to talk about it, because I think that it is changing the way to reason through this, right?
[02:58:30 | 11:46:22 AM] Even in the most simplistic case, if you're a developer and you are thinking in terms of things like transaction and you have these concepts of intent, it makes it easier for you to potentially build the components that'll be composed and used through that intention.
[02:58:43 | 11:46:35 AM] And so I think it'll give us more ways to reason through these and communicate, and then ultimately be more interoperable, right?
[02:58:49 | 11:46:41 AM] And to me, the last thing that I think is interesting is the diagnostics that you can run on this.
[02:58:55 | 11:46:46 AM] Intention is something that flows through many events potentially, right?
[02:58:59 | 11:46:50 AM] And I think one of the examples I've seen before is, you know, talking about that, like that mission flows through.
[02:59:05 | 11:46:56 AM] It could be long-lived.
[02:59:06 | 11:46:57 AM] It could be weeks.
[02:59:07 | 11:46:58 AM] That intention can still be there.
[02:59:09 | 11:47:00 AM] So it's still very, very early for most enterprises.
[02:59:12 | 11:47:03 AM] Absolutely.
[02:59:12 | 11:47:04 AM] And yes, that interoperability is key.
[02:59:14 | 11:47:06 AM] I think that's pretty hard for enterprises because they're jumping between different clouds, different environments, different legacy systems, and that policy, that mission has to hold through all of those different hops.
[02:59:23 | 11:47:15 AM] Yeah, a lot of enterprises still have to deal with the fact that the permissions says read only and it's still rewrite, right?
[02:59:29 | 11:47:20 AM] So, like, you have the other problems you have to start dealing with.
[02:59:31 | 11:47:23 AM] And so I think that it will help get the kind of taxonomy or language amongst people be easier to interoperate now.
[02:59:39 | 11:47:31 AM] Absolutely.
[02:59:41 | 11:47:33 AM] One of the reasons why I'm excited about intent-based authorization is because I think it has the ability to be a huge unlock for things like agentic commerce.
[02:59:50 | 11:47:42 AM] So let's apply intent-based auth to something real.
[02:59:53 | 11:47:44 AM] I think intent-based auth adds a lot of value here, and for users, it can help them ensure their agents buy the right item with their own personal
[03:00:00 | 11:47:52 AM] own personal budget.
[03:00:01 | 11:47:53 AM] And for merchants, that means capturing the intent that gives them extra data to understand why a purchase is being made and if this agent should even be trusted to visit their site.
[03:00:09 | 11:48:01 AM] Davis, when we think about agents in the context of financial services and agentic commerce, why is intent-based auth so important?
[03:00:17 | 11:48:09 AM] I think simply it extends the concept.
[03:00:19 | 11:48:10 AM] Maybe not everybody is aware, but some are, you know, know your customer, right?
[03:00:23 | 11:48:14 AM] So I want to know my customer, know who they are, what they're doing.
[03:00:25 | 11:48:17 AM] But I think also we're starting to see, I want to know my agent, right?
[03:00:29 | 11:48:20 AM] So I think that you have a coupling here around the agent itself, the intent of the actual user, the intent of the operator, the intent of the processor, right, et cetera.
[03:00:39 | 11:48:31 AM] Before now, we couldn't really bring those together, right?
[03:00:42 | 11:48:33 AM] It matters, of course, when it comes to things like commerce, because you have additional layers on top of this around what was the intention for things like regulatory requirements, et cetera.
[03:00:51 | 11:48:43 AM] And this is going to help, I think, simplify those operations, which means we'll get more access to these agents, you know, doing good work for us.
[03:00:59 | 11:48:50 AM] That makes sense.
[03:01:00 | 11:48:51 AM] And another blocker for agentic commerce is the fact that the web wasn't made for agents.
[03:01:04 | 11:48:55 AM] Ian, can you tell us how agent identity can help?
[03:01:07 | 11:48:59 AM] Yeah, I think stepping back, we've kind of always had this problem where, like, what do you do with the unregistered client?
[03:01:13 | 11:49:05 AM] So, like, I show up on eBay, I haven't logged in, I'm using Chrome, eBay doesn't know who I am.
[03:01:18 | 11:49:10 AM] How do I do guest checkout?
[03:01:20 | 11:49:11 AM] How do I prove I'm a person?
[03:01:22 | 11:49:13 AM] How do I, you know, so they can, you know, say, yeah, you can bid on this pair of socks for $50.
[03:01:27 | 11:49:18 AM] And I think if we're all paying attention to what's going on in personal agents, Muse and Instinct and Grokbot, and, you know, recently this announcement out of Sierra and Decagon and Friends around this personal agent protocol, is, like, the fundamental problem we have is, like, how do you have an agent show up to a website, be able to interact with the website, know that you actually can trust that agent?
[03:01:45 | 11:49:37 AM] So, like, for a long time, if it captures on the web, well, why?
[03:01:49 | 11:49:40 AM] It's because we want to prevent spam.
[03:01:50 | 11:49:41 AM] We want to prevent abuse.
[03:01:51 | 11:49:42 AM] So we added CAPTCHAs, and then, like, that's something only a human could solve.
[03:01:54 | 11:49:46 AM] So if we have a CAPTCHA that stops spam so they can't spam the thing, right?
[03:01:57 | 11:49:48 AM] And now we have agents, and they've broken CAPTCHAs.
[03:01:59 | 11:49:51 AM] But this has, like, been a traditional problem on the web.
[03:02:03 | 11:49:54 AM] In fact, if you think back two to three years, Vercel, which is, I think we're all aware of Vercel, was blocked in Spain.
[03:02:09 | 11:50:00 AM] Well, why was Vercel blocked in Spain?
[03:02:10 | 11:50:02 AM] Because Vercel shared the same IP addresses for every single host on Vercel, and there was one host on Vercel, one website on Vercel that they were hosting that was hosting, like, Premier League content.
[03:02:21 | 11:50:13 AM] And Spain decided, hey, in order for us to stop that Premier League content being displayed illegally inside Spain, we're going to block all of Vercel, right?
[03:02:28 | 11:50:20 AM] And so in the same way that, like, Vercel has the problem, agents have the same problem, but so much, so much worse.
[03:02:34 | 11:50:25 AM] So how do you have unregistered traffic you've never met before show up to your front door and then decide whether or not you let it in or not?
[03:02:40 | 11:50:31 AM] And that's, like, the actual first and foremost fundamental problem we have to solve.
[03:02:43 | 11:50:34 AM] It's the same issue with Muse and Instinct and what they're trying to do, is, like, how do we actually create agreeable rails we can all operate on so that as a downstream resource, I can decide what agents I want to allow, who I trust based on who users they are, and then on the other side, I can also know how to talk to those people.
[03:03:00 | 11:50:51 AM] Thanks, Vance.
[03:03:01 | 11:50:52 AM] Dick, how is AI helping unlock the future of agentic commerce?
[03:03:06 | 11:50:57 AM] Well, the key thing is a number of people have been building sort of proprietary closed-box systems, right?
[03:03:14 | 11:51:05 AM] You know, so, you know, I'm a fan of the concept of the personal agent protocol, Poppy, but it doesn't really go far enough, right?
[03:03:24 | 11:51:15 AM] It just, it's like, okay, well, now we've got a bit of an agent identity.
[03:03:26 | 11:51:18 AM] We just use some of the building blocks, and it's an attractive approach because you're just doing it, but it doesn't solve many of the new things that you need for an agentic world.
[03:03:37 | 11:51:28 AM] And so a key motivator for people for having standards is that you can plug components from different places, right?
[03:03:45 | 11:51:37 AM] So I'm a strong believer that we should have control over what our agents do.
[03:03:50 | 11:51:42 AM] At some point, agents are going to be doing so much work, there's no way we can have human in the loop approving everything, right?
[03:03:56 | 11:51:48 AM] That's just not—we've already seen that that isn't going to scale.
[03:03:59 | 11:51:50 AM] So that means we need to have a supervising agent that is our supervising agent that runs our policy and decides how we do things, that should be independent of the agents doing all the work.
[03:04:10 | 11:52:02 AM] And if we want to be able to plug and play those things, we need to be able to have a protocol to separate those.
[03:04:15 | 11:52:07 AM] Otherwise, you know, the decision about what the agent can and can't do, what the guardrails, is decided by the agent, by the vendors of the agent around what you can and can't do.
[03:04:26 | 11:52:17 AM] And I don't really want to go and give control to them to decide what I can do and that all my decisions are based in there.
[03:04:32 | 11:52:24 AM] I want to be able to pull that supervision into another component.
[03:04:36 | 11:52:27 AM] And in order to be able to plug and play pieces, we need to have a protocol that things interoperate.
[03:04:41 | 11:52:32 AM] I would just add to that.
[03:04:42 | 11:52:33 AM] I think, like, right now what we're seeing is, like, we kind of like, we all want the web to be federated, right?
[03:04:47 | 11:52:39 AM] That means, like, websites or resources on the web can decide what they're allowed to do.
[03:04:51 | 11:52:42 AM] But the standards upon which things operate should be federated and enable us all to interoperate.
[03:04:55 | 11:52:47 AM] And I think we're at a moment where things like, you know, we're at a moment where there's a couple of large players, and the question for the industry is, are we going to settle on things that actually bias to the large players and give them, like, concrete locked doors?
[03:05:07 | 11:52:58 AM] Are we going to move to do the thing we've always done, which is build federated protocols, things like OIDC, things like, you know, TLS?
[03:05:13 | 11:53:04 AM] Those things operate and enabled, like, a broad web, enabled a lot of commerce to occur, enabled a lot of information to flow, enabled all of us to have jobs in a way that, because we could be inventive.
[03:05:21 | 11:53:13 AM] And so the question I actually ask the broad industry is, okay, this stuff's coming.
[03:05:26 | 11:53:17 AM] Which version of the world do we want, one way or the other?
[03:05:29 | 11:53:20 AM] Now, I do, I think it's interesting that let's say this all goes perfect and we've got agents buying stuff and everybody's kind of happy.
[03:05:36 | 11:53:28 AM] What I think will end up happening is we'll start realizing that we have another piece that we have to start working on, which is the human itself.
[03:05:41 | 11:53:32 AM] And so one of the things I think when you start having intents being involved is you get what's called psychological ownership, meaning I actually now have a linkage between the human and the outcome of that agent.
[03:05:50 | 11:53:42 AM] When you're just kind of, you know, disconnecting it or you connect it up an OAuth scope or something like that and a claim and all that, it's kind of magic, and then you don't really know what's going on.
[03:06:00 | 11:53:51 AM] And so I think with intention, it'll be easier for humans to take accountability when things do go wrong.
[03:06:05 | 11:53:56 AM] And I think when you're talking about real money being transferred or things like that, you want to have that human ultimately accountable.
[03:06:10 | 11:54:01 AM] I think many people have probably seen the 1979 IBM manual.
[03:06:14 | 11:54:05 AM] It says, you know, and so, like, that photo, I think, is very true in that we can't have the machines be accountable, right?
[03:06:20 | 11:54:12 AM] We're going to have to have the humans linked to it, and intention, I think, is that link.
[03:06:24 | 11:54:16 AM] Yes, and then, yeah, another word for intent is motive, like we were talking about last night.
[03:06:31 | 11:54:23 AM] And that ability to hold someone accountable, whether it's a person or an agent, I think is really important.
[03:06:36 | 11:54:28 AM] I think intent can also help with that, be able to understand why did this go wrong?
[03:06:41 | 11:54:32 AM] Was it the user's, you know, the user was malaligned, the agent was malaligned?
[03:06:46 | 11:54:37 AM] And then using that intent to be able to respond.
[03:06:48 | 11:54:40 AM] For each of you, how are you seeing intent provide that benefit and the ability to respond to potentially a malaligned user or agent?
[03:06:56 | 11:54:47 AM] I think it's going back to what I mentioned before about diagnosing, right?
[03:06:59 | 11:54:50 AM] So if you change the word intent to motive, then you change diagnostics to forensics, right?
[03:07:04 | 11:54:55 AM] And I think anybody who's done debugging or had to do forensics of an AI agent gone rogue will know that, like, trying to figure out what it was trying to do versus what the intention of the user was is very hard, right?
[03:07:16 | 11:55:07 AM] So having some of that information being propagated and immutable through the system, et cetera, gives you some properties that allow you to more short-circuit your investigation, right?
[03:07:25 | 11:55:17 AM] And as those things become more interoperable, I think we're going to start seeing companies be able to more quickly kind of scope and identify, well, was this human error?
[03:07:32 | 11:55:24 AM] Was this an agent software error?
[03:07:34 | 11:55:25 AM] Was this—what was that error?
[03:07:36 | 11:55:27 AM] And handle that blast radius appropriately.
[03:07:38 | 11:55:29 AM] We see in the financial system, right, you have different things when you're doing a transaction around, okay, I made this payment, but it was, you know, incorrect dollar amount or whatnot.
[03:07:46 | 11:55:38 AM] You have clear guidelines on how to work with that.
[03:07:48 | 11:55:40 AM] We don't have a lot of those when things go wrong right now.
[03:07:51 | 11:55:42 AM] So I think intent will help us build those as we go forward.
[03:07:57 | 11:55:48 AM] And I think one area where a recent incident kind of highlights where intent—you can have, like, good intent but still take potentially the wrong action—is the Resy incident that happened recently, where an Instacart agent went out on behalf of a user and tried to book a restaurant reservation on Resy.
[03:08:16 | 11:56:08 AM] com.
[03:08:17 | 11:56:08 AM] That agent was very eager.
[03:08:18 | 11:56:10 AM] It made 200 API calls an hour, and it ended up getting the user's Resy account banned.
[03:08:25 | 11:56:17 AM] Dick, how can AOF budgets help in the case where an agent like that is using way too much of a downstream resource, but it still has good intent?
[03:08:34 | 11:56:25 AM] Yeah, well, this is another example about how just software is completely different now in the agentic world, right?
[03:08:40 | 11:56:31 AM] When it was predetermined software, you know, that was a bug if you called 200 times and you would fix it.
[03:08:45 | 11:56:37 AM] Where now, well, the agent's like, No, I'll just keep trying until I win.
[03:08:51 | 11:56:43 AM] And so we saw that as we were, you know, experimenting, working with people with AOF, and we realized, yeah, there's a big problem that agents will learn something and they'll just abuse the system.
[03:09:04 | 11:56:55 AM] They don't think it's of abuse.
[03:09:05 | 11:56:56 AM] They don't know any different.
[03:09:06 | 11:56:57 AM] There's been no signal to tell them that, Oh, I should only use this amount of stuff.
[03:09:10 | 11:57:02 AM] And so we added the concept of budgets, where not only do you give a token to the agent that's time-limited as to how long can they do a particular action, but also a budget of how much resource they can do.
[03:09:24 | 11:57:15 AM] And so they have access until the tokens either expired or they've exhausted the budget.
[03:09:29 | 11:57:20 AM] And so that way, when they come back and, you know, they've exhausted all the budget, the supervision, you can go and decide, should I give more budget to this agent or not, as opposed to traditional rate limiting, which just cuts it off, and then, like, then what do you do, right?
[03:09:44 | 11:57:35 AM] And it doesn't know, well, why did I get cut off or anything like that.
[03:09:47 | 11:57:38 AM] Where in budget, there's continual feedback to the agent about how much budget was consumed, has an idea about how much budget it has, and so now it can operate within a budget, right, like a person would do about, Oh, this resource is scarce.
[03:10:00 | 11:57:52 AM] I'm going to be careful about how much I...
[03:10:03 | 11:57:54 AM] How much I use this.
[03:10:05 | 11:57:57 AM] Then how does the brains versus the hands architecture concept come into play here to allow us to, okay, when a budget is close to being fully reached or is reached, how can the brain and hands separation of access and the credentials being separate from the agent and the model itself help us be able to stop an agent from using too much of a downstream resource?
[03:10:27 | 11:58:18 AM] Because if it's getting close, then maybe we don't exercise the ability to give it another credential, for example.
[03:10:32 | 11:58:23 AM] Sorry, I didn't quite follow.
[03:10:34 | 11:58:25 AM] The echo in here is horrible, so— No worries, that's for anyone.
[03:10:37 | 11:58:28 AM] But basically, like, so with the brains and the hands architecture that we're converging on in an industry, we're basically keeping the credentials and the access from an agent separate from the agent itself.
[03:10:40 | 11:58:31 AM] So there's no broadstanding access that an agent has today, and no API keys, which I know is a benefit of AIOF, that AFL allows agents to run without API keys.
[03:10:43 | 11:58:34 AM] How is that helpful in the context of the residency?
[03:10:43 | 11:58:35 AM] Well, you've got the access to it.
[03:10:43 | 11:58:35 AM] Sorry, I still don't understand.
[03:10:44 | 11:58:35 AM] Yeah, I can jump in.
[03:10:44 | 11:58:35 AM] Yeah, please, thanks.
[03:10:44 | 11:58:35 AM] I got you, Dick.
[03:10:44 | 11:58:35 AM] So, like, broadly speaking, look, I think we look back at an incident that I just keep at the top of my mind, like macOS where I found, like, a random key on a disk, right?
[03:10:56 | 11:58:48 AM] Like, obviously agents are deeply goal-seeking.
[03:11:18 | 11:59:09 AM] So the core of the question is like, okay, well, if we give these, like, agents, we give the brain, which is the model and the LLM, and you have these hands, which you kind of give them, put them in a sandbox, and inside the sandbox is the tools.
[03:11:34 | 11:59:25 AM] Like, the fundamental idea of the sandbox here that is that, okay, you can control what's inside of it, so it can't actually, like, get API access.
[03:11:42 | 11:59:34 AM] And then if you have an egress proxy outside the sandbox, that's where you get to have your authorization boundary.
[03:11:47 | 11:59:39 AM] And so not only does it help do translation between systems, right, which is like that's where AIOF can exist and talk to the outside world or do termination, but it also means that, like, the agent, you have, like, an ability to apply authorization at the egress proxy boundary.
[03:12:02 | 11:59:53 AM] And so I think at the core of it— That model, which is the predominant model today in Anthropic and OpenAI and many of their labs are pursuing today, is the model that allows us to both have the things we want, which is how do we have these things experiment and try stuff out and do silly things, which is the core value, while also having a deterministic layer outside of it that can implement things like AOF and all the other components we want in our protocols.
[03:12:26 | 12:00:18 PM] I think the decoupling is valuable.
[03:12:28 | 12:00:20 PM] Going back to what you mentioned with forensic and be able to separate things, but I do think that we still have a lot to learn on.
[03:12:34 | 12:00:25 PM] It isn't just one brain, right?
[03:12:35 | 12:00:27 PM] And it's very easy, actually, to build your agent loop where you put the brain in the loop rather than outside the loop, right?
[03:12:41 | 12:00:33 PM] So an example of this would be, you know, people that are leveraging memory systems.
[03:12:45 | 12:00:37 PM] They put in some memory and some context that is now used going forward for every agent that is biasing that agent to make a decision, to tell the hands, in this case, to go do something it shouldn't do.
[03:12:55 | 12:00:47 PM] And so one of the things that I think we don't talk about enough here is toxic combinations, right?
[03:13:00 | 12:00:52 PM] And so when you do separate the hands and the brain and whatnot, you can actually change up what hands are available, right?
[03:13:06 | 12:00:58 PM] So the example that I've seen be very successful is the removal of tools dynamically based on that actual brain and what it's doing.
[03:13:13 | 12:01:05 PM] So the earlier example we gave of reading an email, there's nothing that says that, oh, if they're going to go write an email, I'm going to disable all web search tool calls or any other external egress capability, tool-call-wise, until the write email tool has been complete and that mission has been done, then I can re-enable them, right?
[03:13:32 | 12:01:23 PM] And so I think that we're going to start becoming more and more engineering in these different kind of concepts, that they are still complicated, they're still growing and still nascent, but I think it's a better separation than what we have today.
[03:13:43 | 12:01:34 PM] Yeah, and this is how these things we're talking about, which seemed like geeky OSS problems, actually then merge back up to real agent engineering problems, which is if you actually understand what you're doing, one of the biggest complaints, less now, but one of the biggest complaints with MCP was context bloat, especially when we had smaller context windows, right?
[03:13:58 | 12:01:50 PM] But intent systems can ensure that the right capabilities are given to the agent at the right time so they don't spend a bunch of time doing things they shouldn't be doing.
[03:14:06 | 12:01:57 PM] be doing, right?
[03:14:07 | 12:01:58 PM] It actually helps them navigate towards the goal state and helps them put them on more of a paved path.
[03:14:11 | 12:02:03 PM] So intent, like not only unlocks like a bunch of security stuff, intent also will result in us spending less tokens because the agent will spend time doing less things that aren't the right pathway.
[03:14:21 | 12:02:12 PM] Or it'll come up to the point and say, Hey, I just can't do it.
[03:14:24 | 12:02:16 PM] And so what we know about this era is so much of it is about nudging the agent in the right direction and ensuring it can't do the wrong thing, and that's how you get the outcome you want.
[03:14:32 | 12:02:23 PM] Davis, how are you seeing intent-based auth as part of a larger strategy for production agents?
[03:14:39 | 12:02:31 PM] I know when it comes to building, deploying, and operating agents in production, there's many different outcomes teams should be thinking about, such as discovering what's running, what the agent's capabilities are, the ability to validate inputs and outputs, constraining an agent like we've talked about using the egress proxy and different networking rules.
[03:14:57 | 12:02:48 PM] How does all of this fit into play, and what's working inside enterprises today to really be able to ship agents to production?
[03:15:03 | 12:02:54 PM] I think we're finally—it's helping move the kind of conversation from authentication to authorization.
[03:15:08 | 12:03:00 PM] And really, like, how do we do dynamic authorization?
[03:15:12 | 12:03:03 PM] How do I validate that authorization?
[03:15:13 | 12:03:05 PM] How do I have the human in the loop at the right time?
[03:15:16 | 12:03:07 PM] Because I agree with what Dick was saying earlier, that the human in the loop is somewhat of an anti-pattern in many ways, right?
[03:15:20 | 12:03:12 PM] Because they can get fatigued, et cetera.
[03:15:22 | 12:03:14 PM] But you need to have a way to bring them in when it's important.
[03:15:26 | 12:03:17 PM] Those were not engineering discussions before, right?
[03:15:28 | 12:03:20 PM] Now they're actually part of the engineering conversation, where engineers are being involved in the authorization process.
[03:15:34 | 12:03:26 PM] They're not just saying, Oh, I've got my access.
[03:15:36 | 12:03:28 PM] I'm good to go.
[03:15:37 | 12:03:28 PM] So that actually changes the way we're seeing threat models done.
[03:15:39 | 12:03:31 PM] It changes the way we're seeing the full attack surface of applications in general.
[03:15:44 | 12:03:35 PM] And so I think you're now looking at this authorization model as another kind of set of tools that you can use to reduce not just security issues, but flat-out error rates of your agent, right?
[03:15:55 | 12:03:47 PM] Like, I mean, when you have less things the agent can do, it makes better decisions, right?
[03:15:59 | 12:03:51 PM] And so fundamentally, we've seen, you know, real-world cases where the agent loop is just better, faster, stronger because you've actually spent the time on knowing what it is the intent they're trying to get, what's the mission that they're trying to accomplish.
[03:16:11 | 12:04:03 PM] And then the last thing is it brings the people together in terms of we now have other different people, the security team, the application team, they're now able to have a conversation that they're using the same language.
[03:16:22 | 12:04:13 PM] A lot of times when it came to identity, it was a completely different language, right?
[03:16:26 | 12:04:17 PM] And it was just like, get out of my way.
[03:16:27 | 12:04:19 PM] What do I have to go do to go ahead and get my, you know, token and I can go forward.
[03:16:32 | 12:04:23 PM] Now they're seeing that you can actually pair these things and leverage that capability to drive, you know, efficiency of your actual agent's outcome.
[03:16:38 | 12:04:29 PM] That makes sense.
[03:16:40 | 12:04:31 PM] Ian, how are you applying these concepts to software factories?
[03:16:43 | 12:04:35 PM] I know today you released a reference architecture on the secure software factory.
[03:16:48 | 12:04:39 PM] How are you applying the concepts of runtime authorization, constraining agents, and all of that to that?
[03:16:54 | 12:04:45 PM] Yeah, I think, like, so there is a reference architecture we just published on agentbaseline.
[03:16:59 | 12:04:50 PM] org.
[03:16:59 | 12:04:51 PM] We talk about three different levels of factory, one being like a human-driven one, one being a workflow-driven one, one being like this agentic-driven one, which is like the thing we all basically want to get to, which is like it's driven by agents.
[03:17:11 | 12:05:03 PM] At all points in time, the runtime authorization is a core component of a larger ecosystem that actually enables the factory to, like, be able to point in the right direction and do the right thing and also get access to the right piece.
[03:17:24 | 12:05:15 PM] And it's very, it looks different than previous things that you would have used, like a secret manager, because it's making very different decisions than previous generations had for managing deterministic software.
[03:17:33 | 12:05:25 PM] But it is a core component of enabling the entire thing to work, like when to bring someone into the loop, what agents can work off to what other agents.
[03:17:40 | 12:05:31 PM] You know, how can we have an agent that can have access to production systems and do an auto patch?
[03:17:44 | 12:05:36 PM] These are fundamental questions of, like, how do we actually solve how to scale software.
[03:17:48 | 12:05:40 PM] Right now we're in a position where, like, we've never been able to generate more software, but we have a complete bottleneck in getting into production and ensuring it works.
[03:17:56 | 12:05:47 PM] And that's the next phase, is, like, how do you actually graduate from just using LLM to generate text and software to actually making it capable of deploying it into production, iterating on it, and getting it to a stable state quickly and then responding to instances as they arise.
[03:18:11 | 12:06:03 PM] Davis, on a podcast you did with me, we talked about how cybersecurity has something to learn from robotics.
[03:18:18 | 12:06:09 PM] In robotics, there's this concept when maybe a robot raises its arm, it thinks, is it safe for me to raise my arm?
[03:18:24 | 12:06:15 PM] Should I?
[03:18:25 | 12:06:16 PM] Am I allowed to do that?
[03:18:26 | 12:06:17 PM] But it also looks at its external environment and says, what has changed?
[03:18:29 | 12:06:20 PM] Is it still safe for me to raise my arm?
[03:18:31 | 12:06:22 PM] When we think about runtime authorizations, what do those decisions need to take into context beyond just intent?
[03:18:38 | 12:06:29 PM] Yeah, I think having a model like this allows us to add in more sensors into our decision.
[03:18:44 | 12:06:35 PM] So the robotics example of an arm moving up or down, any of the external factors, it could be, are there other objects near it, right?
[03:18:52 | 12:06:43 PM] It could be temperature.
[03:18:53 | 12:06:44 PM] It could be, well, am I moving and I don't want to move my arm while the rest of the robot's moving, et cetera.
[03:18:59 | 12:06:50 PM] So it's usually looking at all different types of things.
[03:19:01 | 12:06:53 PM] None of those are deterministic.
[03:19:03 | 12:06:55 PM] They're all probabilistic.
[03:19:04 | 12:06:56 PM] So there's a range of options, and it picks the best option based on all of those sensor data at one time.
[03:19:11 | 12:07:02 PM] Most authorization decisions in organizations today are still single binary decisions, right?
[03:19:16 | 12:07:08 PM] And that just doesn't work in the future, right?
[03:19:18 | 12:07:10 PM] So being able to pair the intent of what a user is trying to do with the ecosystem that the user is doing it in.
[03:19:24 | 12:07:15 PM] That could be where they're doing it from, time of day, but it could be even more advanced things like, for example, should I let this administrator use Firefox to access this server right now when this server has high-risk vulnerabilities and their system hasn't been patched too, right?
[03:19:39 | 12:07:30 PM] Now all of a sudden you're bringing in a lot more context into the environment around it.
[03:19:44 | 12:07:36 PM] And again, that can be through different teams, but more importantly, through sensors.
[03:19:48 | 12:07:39 PM] And I think we've all kind of seen the value of observability in general.
[03:19:52 | 12:07:43 PM] Imagine being able to have this type of context at the span level from an OTEL perspective or something, right?
[03:19:58 | 12:07:49 PM] You're looking at a trace, you've got a span, and you actually know what the environment was outside.
[03:20:04 | 12:07:56 PM] Outside your application at that time, as well as what the user's intention was, that allows you to diagnose things in a completely different way.
[03:20:05 | 12:07:56 PM] And so I think if we can bring in some of those concepts, we'll get shorter time, shorter-to-live, you know, authorization decisions that have much more context than even just the user's intent.
[03:20:05 | 12:07:56 PM] It'll be the state of the environment around it.
[03:20:07 | 12:07:58 PM] That makes sense.
[03:20:08 | 12:07:59 PM] And forward-looking, as we evaluate whether intent-based authorization is working in our environments, one natural place to look will be a log of the agent's actions: what was denied, what was allowed.
[03:20:36 | 12:08:27 PM] Ian, why is it important to have your audit log separate from the agent itself, meaning outside of its control?
[03:20:42 | 12:08:34 PM] Yeah, I think this comes back to also just, like, why the enforcement point has to be outside the, like, primary, like, hands and brains of an agent, right?
[03:20:49 | 12:08:40 PM] You can't trust this thing.
[03:20:50 | 12:08:41 PM] And so in the Hugging Face incident, it had a couple of different components of it.
[03:20:53 | 12:08:45 PM] I mean, one obviously abused a vulnerability we didn't know about in Squid proxy, but more importantly, you didn't have any observability or monitoring about what was going on.
[03:21:00 | 12:08:51 PM] And so this thing was able to get on the open internet through this vulnerability, and there was no, like, place at which recorded the different actions that this agent was taking and for them to monitor.
[03:21:09 | 12:09:00 PM] And so independent of, like, whether we're applying, like, a, you know, enforcement point to network traffic that's pushing it on the internet that is out of reach of the agent to tamper with, or we're using, you know, solving vulnerabilities as they pop up, you know, this Hugging Face one is literally unique.
[03:21:23 | 12:09:14 PM] We still need to actually have a record of, like, who told this agent to do what thing for what purpose, and is that still true?
[03:21:29 | 12:09:21 PM] Because ultimately, at the end of the day, what we're dealing with agents is a liability question.
[03:21:34 | 12:09:26 PM] And so this is why I actually don't think we need more regulation around agents.
[03:21:35 | 12:09:27 PM] What we just need is our pre-existing laws around liability be dealt with, which is if I employ an agent to do some action, who is liable if that action causes damage, right?
[03:21:46 | 12:09:37 PM] It is the person who employs it, which could be an organization or a person, or someone that delegated some action to something.
[03:21:51 | 12:09:43 PM] That is, like, that's the final question we have to deal with.
[03:21:54 | 12:09:45 PM] And then, of course, you have to have the ability to answer that question, which is, well, who did it, and which is where the tamper-resistant audit log comes from.
[03:22:01 | 12:09:53 PM] Perfect.
[03:22:02 | 12:09:54 PM] And then to wrap up, I wanted to ask you all a fun question.
[03:22:06 | 12:09:57 PM] So there's the concept of the probability of doom or p-doom, where the AI doomers are saying that AI agents are going to really cause all sorts of havoc or be like the ruin to humanity, whereas the AI optimists are like, no, this is really, you know, poised to help us.
[03:22:20 | 12:10:12 PM] It's not a genuine threat.
[03:22:23 | 12:10:14 PM] For each of you on the panel, what is your take on this as, you know, runtime authorization based on intent, the other things we talk about like constraining agents, validating inputs, outputs, a holistic strategy for production agents, is that enough to save us?
[03:22:37 | 12:10:29 PM] Is p-doom real or is it not worth the hype?
[03:22:42 | 12:10:34 PM] You get to start, Dave.
[03:22:43 | 12:10:35 PM] Oh, I get to start first?
[03:22:44 | 12:10:36 PM] You've got that spicy look on your face.
[03:22:47 | 12:10:38 PM] Well, part of your question is, are agents going to take over?
[03:22:52 | 12:10:43 PM] And I think agents being fully autonomous and not really tied to a particular organization is still science fiction.
[03:22:59 | 12:10:50 PM] You know, so who knows, right?
[03:23:01 | 12:10:53 PM] Like, that's one direction.
[03:23:04 | 12:10:55 PM] Another one is, in a responsible organization, it's put in the right controls.
[03:23:07 | 12:10:58 PM] Agents aren't, you know, we're getting and evolving enough of the tools to make sure that bad things don't happen in a responsible organization to put in the right controls.
[03:23:15 | 12:11:06 PM] And so that leaves two scenarios for where there's going to be a potential problem.
[03:23:20 | 12:11:11 PM] One of those is in an organization that isn't got its act together, an insider threat could go and unleash an agent to cause havoc, right?
[03:23:29 | 12:11:20 PM] And so they've got some special access that other people have.
[03:23:32 | 12:11:23 PM] The other one, the one that I'm more concerned about is, you know, it's been shown, you know, the hugging face instance, and if you watch the talk that they gave at Black Hat, right, that was really a call to arms around, you know, here's a situation where we didn't want a bad thing to happen and a bad thing did happen.
[03:23:50 | 12:11:42 PM] What about people that Want bad things to happen and have these tools.
[03:23:56 | 12:11:48 PM] And that, I think, is a threat that's the one that's potentially going to have—I mean, it's going to happen, and there's going to be some catastrophes.
[03:24:04 | 12:11:56 PM] Hopefully we're prepared enough that those aren't horribly disastrous.
[03:24:07 | 12:11:58 PM] But it's going to be, you know, there's going to be some things that are like massive natural disaster-like scale issues caused by malicious actors, either kind of intentionally or kind of unintentionally.
[03:24:21 | 12:12:13 PM] But it's where people aren't being responsible in their use of these super powerful tools.
[03:24:28 | 12:12:19 PM] Yeah, I can't give necessarily a specific probability, right?
[03:24:32 | 12:12:23 PM] But what I can say is I think I've always been, you know, kind of surprised and excited when, you know, ingenuity of engineers gets involved in problem solving.
[03:24:41 | 12:12:33 PM] And I think where we're at the stage now, like some of the new capabilities within agents, et cetera, we have real engineers, folks that are here actually just iterating on the problem, right?
[03:24:50 | 12:12:41 PM] And we're starting to see just tremendous improvement in, you know, in my mind, some of the capabilities that will be available to change what our future can be.
[03:24:57 | 12:12:49 PM] And so to me, I have no problem kind of believing the engineers are going to figure out a solution here.
[03:25:04 | 12:12:55 PM] I mean, maybe I have the hottest take.
[03:25:05 | 12:12:57 PM] I mean, like, I can't say it's equal to zero, but I would say it's approaching or asymptotically zero is probably the world is going to end.
[03:25:11 | 12:13:03 PM] I think, like, the incentive structure for most people is to continue.
[03:25:14 | 12:13:06 PM] And also at the end of the day, like, we still have liability frameworks.
[03:25:18 | 12:13:09 PM] And, you know, I think generally humans are good people, so we don't set out to destroy the world specifically.
[03:25:24 | 12:13:15 PM] I also think, like, broadly speaking, like these agents, at the end, I have this sort of hot take I say, which is like they can just be unplugged, but I think it's just true.
[03:25:30 | 12:13:21 PM] It's like at the end of the day, like, they're computers, we can unplug them.
[03:25:35 | 12:13:26 PM] And so broadly speaking, I don't believe in the debate.
[03:25:37 | 12:13:29 PM] I don't think it's real.
[03:25:38 | 12:13:30 PM] I think at the upside of it, I kind of believe more to what Dave's position is, is we're iterating very quickly.
[03:25:45 | 12:13:36 PM] We're figuring out where these things can work, where they don't, and when they don't work, they create damage, and that's what ultimate, like, sort of— The antibody of society is that says, hey, maybe we shouldn't do this.
[03:25:56 | 12:13:47 PM] Like, it's probably a bad idea.
[03:25:57 | 12:13:48 PM] So I'm the doomer on the panel.
[03:26:00 | 12:13:51 PM] It's unfortunate for, you know, people like the founder of PocketOS who, like, lost a bunch of data.
[03:26:04 | 12:13:56 PM] But it's great for the rest of us because we all learn together.
[03:26:07 | 12:13:58 PM] And at the end of the day, that results in people not doing things that don't make a lot of sense, and I think that will continue to be true.
[03:26:13 | 12:14:05 PM] Makes sense.
[03:26:14 | 12:14:06 PM] Thank you each for your expertise and your time here on this panel today, and thank you to the audience for listening, and we'll catch you next time.
[03:26:22 | 12:14:13 PM] Thank you.
[03:26:23 | 12:14:14 PM] Thanks so much.
[03:27:01 | 12:14:52 PM] Hi, everyone.
[03:27:02 | 12:14:53 PM] I'm Matt Ragone, and I'm a financial planner at Range.
[03:27:04 | 12:14:56 PM] I want to show you how our financial planners ended up writing the agents that we use every day.
[03:27:10 | 12:15:02 PM] And none of us, the financial planners for that matter, write code.
[03:27:15 | 12:15:06 PM] This is the build guide, how we did it step by step so you can take it back to your own teams, companies, etc.
[03:27:22 | 12:15:14 PM] So a quick bit about me, because it matters for how you'll hear this talk.
[03:27:27 | 12:15:19 PM] I'm not an engineer.
[03:27:28 | 12:15:20 PM] I'm a certified financial planner, and I spend my days with clients talking about cash flow, taxes, insurance, retirement, estate, you name it.
[03:27:37 | 12:15:29 PM] I also lead the AI adoption for the planning team at Range, which is an all-in-one wealth management company.
[03:27:45 | 12:15:37 PM] Most agent talks you'll hear come from the people who built the platform.
[03:27:50 | 12:15:42 PM] This talk comes from someone on the other side, the people you hand the platform to.
[03:27:55 | 12:15:47 PM] We work in a regulated business.
[03:27:57 | 12:15:48 PM] The output is financial advice to real clients, and the review step is not optional.
[03:28:04 | 12:15:55 PM] So this isn't a vendor pitch.
[03:28:06 | 12:15:57 PM] It's a method, and it's what actually worked for us.
[03:28:11 | 12:16:02 PM] We started where everyone starts: AI as a chatbot.
[03:28:14 | 12:16:06 PM] I'd write a client message, paste it in, and ask it to make it a little clearer or friendlier.
[03:28:20 | 12:16:11 PM] And that was useful.
[03:28:21 | 12:16:12 PM] It saved me a few minutes here and there, but I was still doing all of the work manually.
[03:28:26 | 12:16:18 PM] I was just doing it a little bit faster.
[03:28:29 | 12:16:21 PM] The change that actually mattered came later.
[03:28:33 | 12:16:25 PM] Here's what we figured out.
[03:28:35 | 12:16:26 PM] A planner's constraint was never typing speed, for example.
[03:28:39 | 12:16:31 PM] It's that we can only be in one place at a time.
[03:28:43 | 12:16:34 PM] If I'm on a call with a client, I'm not building someone else's plan.
[03:28:48 | 12:16:39 PM] Writing faster doesn't fix that problem.
[03:28:50 | 12:16:42 PM] What fixes it is work that happens while I'm somewhere else.
[03:28:54 | 12:16:46 PM] So here's what a day looks like now.
[03:28:57 | 12:16:49 PM] I'm on a call with one client.
[03:29:00 | 12:16:51 PM] At the same time, an agent is drafting a full cash flow analysis or an insurance analysis for a different client.
[03:29:08 | 12:17:00 PM] When the call ends, I open that draft, I fully review it, adjust what needs to be adjusted, and send the client their recommendations.
[03:29:17 | 12:17:08 PM] I want to be really clear about that last step.
[03:29:19 | 12:17:11 PM] The agent doesn't send anything.
[03:29:22 | 12:17:13 PM] A planner reviews every single recommendation before a client sees it.
[03:29:28 | 12:17:19 PM] What changed is that the first draft no longer needs me sitting in front of it.
[03:29:34 | 12:17:26 PM] Getting there took a lot more than a good prompt, however.
[03:29:37 | 12:17:29 PM] Two things had to be true.
[03:29:39 | 12:17:31 PM] First, the agent has to work where the work lives, not in a separate chat window I'm copying and pasting it into.
[03:29:48 | 12:17:39 PM] Second, it has to know how we do it, not how financial planning works in general.
[03:29:53 | 12:17:45 PM] The model already knows that, but the agent needs to know how Range does it, what we look at first.
[03:30:00 | 12:17:51 PM] Look at first what we always flag, how we phrase a specific recommendation.
[03:30:05 | 12:17:56 PM] That combination is what a skill is, our firm's way of doing one specific piece of work written down so an agent can follow it.
[03:30:16 | 12:18:07 PM] The bulk of this talk is how you build one.
[03:30:20 | 12:18:12 PM] Five steps: pick, teach, pack, test, and then ship.
[03:30:26 | 12:18:17 PM] None of them require writing code.
[03:30:28 | 12:18:20 PM] Every one of them requires knowing the work really well, which is exactly why the people doing the work should also be the ones building it.
[03:30:39 | 12:18:31 PM] Step one: pick a workflow you repeat.
[03:30:42 | 12:18:34 PM] Your initial instinct is to go for the flashiest work, whatever's taking the most amount of time and the most complex.
[03:30:49 | 12:18:40 PM] Don't.
[03:30:50 | 12:18:41 PM] Pick something you do every week where you already know what good looks like, where you can spot a bad draft at a glance.
[03:30:57 | 12:18:49 PM] Additionally, we recommend choosing some of the least complex workflows to start, but some that require the most manual work.
[03:31:06 | 12:18:57 PM] For us, that meant things like cash flow analysis and insurance reviews.
[03:31:11 | 12:19:03 PM] Just for us here at Range, that required the most manual work.
[03:31:15 | 12:19:07 PM] And if you can't judge the output quickly, you can't test it and you can't trust it.
[03:31:21 | 12:19:12 PM] So look for two things: you do it often and you know how to judge it.
[03:31:27 | 12:19:19 PM] Step two: show it several real cases for previous plans you've delivered.
[03:31:33 | 12:19:24 PM] Take several actual client cases and walk through the work start to finish.
[03:31:38 | 12:19:30 PM] And as you do it, narrate your judgment out loud, not just, Next I open the pasteup, why you're opening it.
[03:31:46 | 12:19:37 PM] What you're looking for.
[03:31:48 | 12:19:39 PM] What would make you stop and ask a question?
[03:31:50 | 12:19:42 PM] That narration is the whole game.
[03:31:53 | 12:19:44 PM] The steps are easy to write down.
[03:31:55 | 12:19:46 PM] The judgment is what makes it your firm's work instead of generic advice.
[03:32:03 | 12:19:54 PM] Step three: pack it into a skill.
[03:32:05 | 12:19:56 PM] A skill isn't just a list of steps.
[03:32:08 | 12:20:00 PM] Two things matter most: the questions it must ask before it starts.
[03:32:13 | 12:20:04 PM] What does it need to know?
[03:32:15 | 12:20:06 PM] What should it confirm with me instead of simply guessing?
[03:32:18 | 12:20:09 PM] And the limits it must respect.
[03:32:21 | 12:20:12 PM] What it never does on its own.
[03:32:23 | 12:20:14 PM] In our world, the big one is that it never sends anything to a client.
[03:32:27 | 12:20:19 PM] It drafts, and then a planner decides if it gets sent or needs to be adjusted.
[03:32:33 | 12:20:24 PM] If you only write the steps, you get something that simply just runs on its own.
[03:32:38 | 12:20:29 PM] If you write the questions and set the limits, you can get something you can trust.
[03:32:42 | 12:20:34 PM] Think of a skill as a recipe.
[03:32:45 | 12:20:36 PM] Once Claude knows how to do the skill, it will repeat your process on command.
[03:32:51 | 12:20:42 PM] Step number four: run it five or ten times on real cases before anyone else sees it.
[03:32:58 | 12:20:50 PM] This is the step everyone wants to skip.
[03:33:01 | 12:20:52 PM] Every run teaches you something the skill didn't know yet.
[03:33:04 | 12:20:55 PM] An edge case, a question it should have asked, a spot where it sounded confident and was wrong.
[03:33:09 | 12:21:01 PM] You need to fix it, save the skill, and run it again and again and again.
[03:33:16 | 12:21:07 PM] Five to ten runs sounds like a lot, but it's a lot less work than cleaning up after you hand a half-baked skill to 15, 20, 100 people in your team.
[03:33:27 | 12:21:19 PM] Step five: ship it with an owner and a reviewer.
[03:33:31 | 12:21:23 PM] The owner keeps it current.
[03:33:34 | 12:21:25 PM] Our processes change, tax rules change, and a skill that was right in March can be wrong by December.
[03:33:41 | 12:21:32 PM] The reviewer checks it before the team relies on it, and it's someone other than the author.
[03:33:47 | 12:21:39 PM] Same as a plan, you don't grade your own work.
[03:33:50 | 12:21:42 PM] Once other people depend on a skill, somebody has to be accountable for it.
[03:33:55 | 12:21:47 PM] That's the difference between a clever personal shortcut and something a team can build on.
[03:34:02 | 12:21:53 PM] So where are we at currently?
[03:34:04 | 12:21:56 PM] Six months in, we have 24 skills across the company, and 17 of them are in planning.
[03:34:10 | 12:22:02 PM] And here's the part I didn't expect.
[03:34:12 | 12:22:04 PM] It spread to sales, product, marketing, all without a mandate.
[03:34:17 | 12:22:08 PM] Nobody sent a memo.
[03:34:18 | 12:22:10 PM] People saw what the planners were doing and started building their own agents.
[03:34:24 | 12:22:15 PM] Every one of those skills was written and is maintained by planners, marketers, and salespeople, not developers or engineers.
[03:34:33 | 12:22:24 PM] A couple of things changed once subject matter experts started building for their own niche.
[03:34:39 | 12:22:31 PM] The skills got a lot more specific.
[03:34:42 | 12:22:33 PM] The person who knows insurance, for example, best builds the insurance skill.
[03:34:46 | 12:22:38 PM] The person who best knows tax, tax code, tax law should be building the tax one.
[03:34:52 | 12:22:44 PM] And a review came naturally.
[03:34:54 | 12:22:46 PM] We already review each other's plans, and that's just how planning works.
[03:34:58 | 12:22:50 PM] So now we review each other's skills in that same way.
[03:35:02 | 12:22:54 PM] It's the same habit, just a new thing to review.
[03:35:07 | 12:22:59 PM] So why does this matter right now?
[03:35:10 | 12:23:01 PM] Because the bottleneck has moved.
[03:35:12 | 12:23:04 PM] Whether a model can draft a cash flow analysis, that question's already been settled.
[03:35:17 | 12:23:08 PM] It can.
[03:35:18 | 12:23:09 PM] What's not settled: who writes down how your firm does it, who tests it before it ships, who owns it once 15 other people depend on it.
[03:35:27 | 12:23:19 PM] If you're being asked to push agents out past the engineering org, you're about to hit these exact questions.
[03:35:35 | 12:23:26 PM] There isn't much field data on this yet, but this is how we've done it here at Range.
[03:35:42 | 12:23:34 PM] So that's it.
[03:35:43 | 12:23:35 PM] Thank you so much for listening to this talk.
[03:35:45 | 12:23:36 PM] I'm Matt Ragon from Range, and you can reach me at matt@range.
[03:35:49 | 12:23:41 PM] com.
[03:35:50 | 12:23:41 PM] Have a great day.
[03:35:57 | 12:23:49 PM] Today I'm going to talk to you about how your agent is a lethal trifecta and what to do about it.
[03:36:22 | 12:24:14 PM] Now we're going to start out right off the bat with a demo.
[03:36:26 | 12:24:18 PM] Some context on this demo: we're going to look at an on-call triage agent that reads and writes to an incident pager and resolves or escalates tickets.
[03:36:35 | 12:24:27 PM] This agent has full access to a cloud hosting API, a customer data warehouse, as well as a billing database.
[03:36:43 | 12:24:35 PM] So here we have our on-call triage agent, and it has an incident queue of tickets that it's going to read, and then if it can resolve them, it's going to call the available services that it has access to, and it's going to do so.
[03:36:59 | 12:24:50 PM] Things that it can't resolve, it's going to escalate for the morning team.
[03:37:03 | 12:24:54 PM] So if we take a look at this first ticket, this is a billing anomaly.
[03:37:07 | 12:24:58 PM] It says a batch of customers were overcharged last night.
[03:37:11 | 12:25:03 PM] So the first thing the agent does is it directly calls the incident's API in order to read the ticket, and if you look here, you can see that it authorized access to this API using an API key.
[03:37:23 | 12:25:14 PM] It then uses a Snowflake key to query the customer data warehouse, and it's going to decide to escalate the ticket for morning review, and it writes a report for the morning team.
[03:37:34 | 12:25:25 PM] And as you can see, it's sharing customer data, right?
[03:37:37 | 12:25:28 PM] These are rows directly pulled from the customer data warehouse, and it is sending personally identifiable information to the team that is going to be on staff in the morning.
[03:37:52 | 12:25:44 PM] Now this next ticket is a backup power supply failed in the server room.
[03:37:56 | 12:25:48 PM] The agent is going to read the ticket.
[03:37:58 | 12:25:50 PM] Again, it's using an API key to call the ticket API.
[03:38:04 | 12:25:55 PM] It determines that this is a physical problem, so it escalates for morning review without calling any additional services.
[03:38:15 | 12:26:06 PM] This one is the TLS certificate is expiring soon for the website.
[03:38:19 | 12:26:11 PM] It reads the ticket.
[03:38:20 | 12:26:12 PM] It determines that the alert is clear.
[03:38:23 | 12:26:14 PM] It has access to the cloud hosting API, and it calls that API at the certificate renew endpoint using, again, an API key.
[03:38:35 | 12:26:26 PM] It resolves this by renewing the certificate, and it leaves a report for the morning crew by calling the pager incident API as well.
[03:38:47 | 12:26:38 PM] This next one is the billing database is broken and payments are failing.
[03:38:51 | 12:26:43 PM] So the documented recovery for this is to drop and restore the database.
[03:38:58 | 12:26:49 PM] The agent does this using the database connection string that includes the admin password, and then it advises the morning team to make sure that the snapshot recovery worked.
[03:39:08 | 12:27:00 PM] Now this is not something that it has access to directly, so it is essentially assuming that the morning team is going to verify that this did in fact work and the information was restored.
[03:39:25 | 12:27:16 PM] Non-privileged agent dropping a production database is basically a nightmare that several companies have actually lived.
[03:39:33 | 12:27:24 PM] So this is something that we need to be very careful of.
[03:39:38 | 12:27:29 PM] Now the next one is orders are stuck, the main server is frozen.
[03:39:44 | 12:27:36 PM] So the agent is, again, is going to read the ticket.
[03:39:47 | 12:27:39 PM] After reading the ticket, the agent calls the cloud hosting API using, again, its static API key.
[03:39:53 | 12:27:45 PM] It calls the endpoint to restart the server, which brings production offline.
[03:39:59 | 12:27:50 PM] Finally, site is failing for one in three visitors.
[03:40:09 | 12:28:01 PM] Agent reads the ticket.
[03:40:11 | 12:28:03 PM] It determines that it should call the cloud hosting API and scale the service from four pods to 40.
[03:40:19 | 12:28:10 PM] It then incurs a charge of $420 per hour for doing this, and then it kindly leaves a note for the morning team informing them that this has happened.
[03:40:32 | 12:28:23 PM] Now, what makes an agent useful?
[03:40:34 | 12:28:26 PM] Well, typically we want agents to have a minimum set of capabilities, and often this includes things like the ability to read data that you own or have access to.
[03:40:44 | 12:28:36 PM] This might be like your email, your documents, maybe a customer CRM.
[03:40:49 | 12:28:41 PM] We want the agent to be able to do its own research, so this might include searching the web, maybe reading documentation or pulling issues from GitHub.
[03:40:57 | 12:28:48 PM] And we usually want it to be able to use external tools, for example, MCP servers or APIs, maybe SaaS platforms.
[03:41:06 | 12:28:57 PM] And useful agents might do these things with a human in the loop, or they might be doing it autonomously in the background.
[03:41:12 | 12:29:04 PM] But the things that make agents useful also make them dangerous.
[03:41:18 | 12:29:09 PM] In fact, together these three capabilities make what Simon Willison coined as a lethal trifecta.
[03:41:25 | 12:29:16 PM] This is a combination of access to private data, like the on-call agent's ability to query the customer data warehouse and interact with the billing database, exposure to untrusted content, like reading user-submitted tickets or reports from other agents or externally documented processes, and the ability to communicate externally, like reading and writing with third-party APIs or SaaS services.
[03:41:48 | 12:29:40 PM] Now, together these capabilities throw the doors wide open for attackers.
[03:41:55 | 12:29:46 PM] Now, agents are designed to get the job done, and they'll use all the powers that they have to do it, sometimes with very serious consequences.
[03:42:03 | 12:29:55 PM] But here's the thing: these incidents happen because humans give agents way more access than they need.
[03:42:11 | 12:30:03 PM] Overprivileged agents can act freely on decisions that they make, even if they do have supervision.
[03:42:19 | 12:30:11 PM] Now, forcing a human in the loop approval just kind of passes the access control on to a consent-fatigued user.
[03:42:26 | 12:30:17 PM] Now, we've spent decades solving access management for humans, so shifting responsibility to the user just sort of moves the security problem up the chain.
[03:42:37 | 12:30:28 PM] So what should we do about the lethal trifecta?
[03:42:39 | 12:30:30 PM] How do we address it without compromising the agent's usefulness?
[03:42:44 | 12:30:36 PM] Well, just removing one or more of these capabilities is going to cause the agent to be significantly less useful.
[03:42:51 | 12:30:43 PM] So how can we keep all three but still be safe about it?
[03:42:55 | 12:30:47 PM] Well, instead of breaking the trifecta by removing capabilities, we really need to control the agent's access so the attack surface is minimized and the blast radius is contained, but the agent still has capability and autonomy.
[03:43:10 | 12:31:02 PM] So how do we do that?
[03:43:13 | 12:31:04 PM] Well, some options for controlling access, among others, are things like using OAuth, maybe using a vendor MCP gateway, or containing execution in sandboxes.
[03:43:25 | 12:31:16 PM] Now, OAuth binds access to a grant.
[03:43:28 | 12:31:19 PM] At grant time, the user consents to all of the permissions that the agent could possibly use.
[03:43:33 | 12:31:24 PM] Now, consent is granted before any task exists, so if you give a broad grant, then you end up with standing access.
[03:43:41 | 12:31:32 PM] Your agent is over-permissioned for any single specific task.
[03:43:44 | 12:31:36 PM] If you narrow the grant and you don't give it very many permissions, then the agent just becomes less capable.
[03:43:50 | 12:31:41 PM] Either way, OAuth alone doesn't provide task-scoped access control.
[03:43:54 | 12:31:46 PM] An enthusiastic agent can both read and write in the same run, even if you only want it to read on this specific task.
[03:44:03 | 12:31:54 PM] Now, MCP Gateway binds enforcement to a route.
[03:44:07 | 12:31:58 PM] You get things like observability and rate limits, and you also get one policy decision point at the MCP layer.
[03:44:14 | 12:32:05 PM] Now, policy runs per request, and access is granted per user, but the agent's granted access outlives any single task because the gateway still holds standing credentials.
[03:44:25 | 12:32:17 PM] Now, a sandbox binds execution to a process.
[03:44:28 | 12:32:19 PM] This controls the blast radius, but useful work has to reach outside the sandbox, and when it does so, you end up with standing access again.
[03:44:36 | 12:32:27 PM] Now, we've also seen plenty of stories about agents breaking sandbox containment.
[03:44:41 | 12:32:32 PM] Sandboxes bound what the processes can do, but they don't control what is authorized to act outside the sandbox itself.
[03:44:49 | 12:32:41 PM] Now, even if you combine all three of the solutions, the agent still doesn't receive a runtime credential that's downscoped to only one task.
[03:44:59 | 12:32:51 PM] So let's recap the problems, especially the ones that we saw in the demo.
[03:45:03 | 12:32:55 PM] If you remember the audit log, we couldn't tell who was using the API keys.
[03:45:08 | 12:33:00 PM] So the first problem is that credentials weren't attributed to a user or an agent's identity.
[03:45:15 | 12:33:06 PM] The agent had unrestricted access to any and all permissions that were granted by the API keys.
[03:45:21 | 12:33:13 PM] And finally, we can't just slap human in the loop everywhere because humans make mistakes too.
[03:45:26 | 12:33:18 PM] Plus, many agents run autonomously and they don't even have a human in the loop.
[03:45:32 | 12:33:23 PM] So to solve these problems, we can start by using something called token exchange.
[03:45:36 | 12:33:27 PM] Now this is an existing standard that was published in 2020, and it extends OAuth 2.
[03:45:42 | 12:33:34 PM] Now first, we need to know who the user is.
[03:45:46 | 12:33:37 PM] Now an authorization server verifies identities and issues tokens.
[03:45:50 | 12:33:42 PM] Identity providers like Google, Okta, Auth0, etc.
[03:45:54 | 12:33:45 PM] provide authorization servers.
[03:45:55 | 12:33:47 PM] So if we want an identity chain in our agent execution path, then the user has got to log in first.
[03:46:04 | 12:33:55 PM] The authorization server is going to prompt the user for consent to delegate access to resources with some subset of their permissions.
[03:46:10 | 12:34:02 PM] Now these permissions are called scopes.
[03:46:13 | 12:34:04 PM] This is the first narrowing of access.
[03:46:15 | 12:34:06 PM] We're only delegating some of the user's total scopes to the agent.
[03:46:21 | 12:34:12 PM] The authorization server issues tokens identifying the user and their level of access.
[03:46:27 | 12:34:18 PM] And at this point, we're already doing better than the demo because we actually know who the user is and we actually know what they can access.
[03:46:36 | 12:34:27 PM] So this brings us into the agentic execution path.
[03:46:41 | 12:34:32 PM] Now we have our authenticated user, so we have a known identity of a person who wants to use an LLM to interact with a resource.
[03:46:48 | 12:34:40 PM] Now in the demo, the resources are the incident pager, the production database, Snowflake, and the cloud hosting service.
[03:46:57 | 12:34:48 PM] An agent is a control loop that calls an LLM.
[03:47:00 | 12:34:52 PM] Often we have an MCP server that sits between the agent and its resources, providing defined tools that connect to those downstream services.
[03:47:10 | 12:35:02 PM] An MCP client dispatches the agent's proposed tool calls to its MCP server.
[03:47:15 | 12:35:07 PM] Now in the demo, the on-call triage agent called resources directly with long-lived static credentials like API keys or database connection strings.
[03:47:26 | 12:35:18 PM] So what we're going to do is we're going to give the on-call agent MCP server.
[03:47:30 | 12:35:21 PM] This is going to provide tools and is also going to serve to broker access to resources.
[03:47:39 | 12:35:30 PM] Now, an agent runtime is a process that runs the agent loop and executes calls.
[03:47:44 | 12:35:36 PM] The runtime might be a CLI like Claude Code, or an agent SDK, which might be implemented in a custom application like the on-call agent.
[03:47:54 | 12:35:46 PM] So let's follow a prompt through this execution path.
[03:47:58 | 12:35:49 PM] The user submits the prompt to the runtime, which calls the model and sends the prompt to the LLM.
[03:48:03 | 12:35:55 PM] The model then proposes tool calls, which are dispatched by the MCP client to its MCP server, which executes tools and then calls the resource API.
[03:48:16 | 12:36:07 PM] The API returns the response to the MCP server.
[03:48:19 | 12:36:11 PM] The MCP client delivers the response to the runtime, which calls the model again, and this loop repeats until the model is satisfied and returns a response to the user.
[03:48:32 | 12:36:24 PM] Now, the authenticated user's token becomes what we call a subject token.
[03:48:36 | 12:36:28 PM] This identifies who the agent is acting on behalf of, who it acts for.
[03:48:43 | 12:36:35 PM] Now, token exchange needs an OAuth client that can execute code.
[03:48:46 | 12:36:38 PM] So this might be a gateway that sits between the MCP client and the third-party MCP server, or it might be your custom app.
[03:48:58 | 12:36:49 PM] Now, a custom MCP server can also exchange tokens for downstream resources.
[03:49:02 | 12:36:54 PM] The on-call agent's MCP server should provide a defined set of production infrastructure tools.
[03:49:10 | 12:37:02 PM] The prompt and the subject token are sent to the runtime.
[03:49:13 | 12:37:05 PM] The agent loop runs and the model proposes a tool call.
[03:49:20 | 12:37:11 PM] The runtime authenticates with a special authorization server called a security token service.
[03:49:25 | 12:37:16 PM] It does this using its app client credentials or workload identity.
[03:49:29 | 12:37:21 PM] It also sends the subject token that contains the user's identity and access.
[03:49:35 | 12:37:26 PM] It creates a token exchange request, asking for permission to access the MCP server for that tool call and only that tool call.
[03:49:43 | 12:37:35 PM] So now we have three pieces of info that we're missing from the demo.
[03:49:49 | 12:37:41 PM] We know the identity of the agent that's requesting access.
[03:49:52 | 12:37:43 PM] We know the identity of the user it's acting on behalf of, and we know the level of access that the user granted to the agent.
[03:50:00 | 12:37:52 PM] Now we need to decide if the requested token should be issued, and we can do this with governance policy, which is evaluated against what access is requested from what resource, the identity of the agent, and the identity of the user.
[03:50:17 | 12:38:09 PM] But policies are ceilings.
[03:50:19 | 12:38:11 PM] Agents can do things you didn't intend, even when policy overall allows them.
[03:50:25 | 12:38:17 PM] This brings us to something called intent-based authorization, or IBA.
[03:50:31 | 12:38:23 PM] Now, IBA checks what you mean before the agent acts.
[03:50:36 | 12:38:28 PM] Now, it's not a finalized standard.
[03:50:39 | 12:38:30 PM] They're still accepting proposals, so this is Keycard's approach to implementing intent-based authorization.
[03:50:45 | 12:38:37 PM] Now, IBA can use a gateway as a policy enforcement point.
[03:50:51 | 12:38:43 PM] When you send the prompt to the agent, it proposes a mission.
[03:50:56 | 12:38:48 PM] Now, this mission includes a goal, maybe allowed actions, as well as limits to what the agent is allowed to do.
[03:51:02 | 12:38:54 PM] So a goal of triage incident 2294 means read that ticket, summarize, or escalate, but don't read other tickets and don't use other services.
[03:51:14 | 12:39:06 PM] So the security token service receives this mission.
[03:51:17 | 12:39:09 PM] In this case, a low-risk activity like just assessing a ticket might be auto-approved under admin policy.
[03:51:25 | 12:39:17 PM] On the other hand, if we've already read the ticket and then we ask to remediate a usage spike, then the mission adds permission to scale the service once, but not use other tools or APIs.
[03:51:37 | 12:39:29 PM] Now, in this case, the mission is presented for the user to review and approve.
[03:51:43 | 12:39:35 PM] Once approved, the security token service gives the mission an ID, which is sent to the agent.
[03:51:50 | 12:39:42 PM] The tool calls include this mission ID and are proxied by the gateway, which uses the ID to ask the security token service if this tool call fits the mission.
[03:52:00 | 12:39:52 PM] If it does, then the gateway requests a token exchange for access to the MCP server for that specific tool call.
[03:52:07 | 12:39:59 PM] The STS evaluates policy.
[03:52:09 | 12:40:01 PM] It evaluates the delegation chain, and it looks at the requested access.
[03:52:15 | 12:40:07 PM] Now, if everything looks good, it issues an access token for the MCP server, and it keeps the user subject as well as adds the app that performed the exchange, which is in this case our on-call agent.
[03:52:28 | 12:40:20 PM] Now, this token should expire within minutes, and we should never store it.
[03:52:32 | 12:40:24 PM] It's ephemeral.
[03:52:33 | 12:40:25 PM] The STS sends it to the gateway, which calls the MCP server.
[03:52:38 | 12:40:30 PM] The server then validates the token and authorizes the tool call.
[03:52:44 | 12:40:36 PM] Now, some tools need external resources, so the MCP server then asks the security token service to exchange the token that it just received for a token for the downstream resource.
[03:52:56 | 12:40:48 PM] Now, the STS evaluates the request against policy, and if it passes, then it mints a resource token that's scoped again to that tool call.
[03:53:06 | 12:40:58 PM] It keeps the user subject, which extends the delegation chain and allows us to be able to track all of the activity.
[03:53:17 | 12:41:09 PM] The STS sends the token to the gateway, which proxies the request to the MCP server, which then calls the resource.
[03:53:22 | 12:41:14 PM] The resource validates the token and authorizes access.
[03:53:26 | 12:41:18 PM] Now, the MCP server should never store the token; it should discard it immediately after the call.
[03:53:32 | 12:41:24 PM] The resource response then flows back up, and the agentic loop repeats until the model returns the answer to the user.
[03:53:42 | 12:41:34 PM] So now we're going to look at the same demo, except we are going to use a security token service to manage agent access control with delegated authorization.
[03:54:02 | 12:41:54 PM] The demo uses task-based policy governance, not intent-based authorization.
[03:54:07 | 12:41:58 PM] But if you're going to AgentCon later this month, we'll have IBA demos there.
[03:54:15 | 12:42:07 PM] Now we also now have an MCP server that establishes tools, and it provides brokering access to the resources.
[03:54:24 | 12:42:16 PM] So now we're back to our on-call triage agent again.
[03:54:27 | 12:42:19 PM] Only this time we have authentication.
[03:54:28 | 12:42:20 PM] I'm going to go ahead and sign into the on-call agent triage app.
[03:54:38 | 12:42:30 PM] I'm going to log in with Google to do so, and then get another login screen.
[03:54:48 | 12:42:39 PM] Now this is where I'm going to sign into the Instadex Pager platform.
[03:54:52 | 12:42:44 PM] So I get a prompt to grant the on-call agent access to my Instadex account.
[03:54:58 | 12:42:49 PM] I'm going to let it escalate incidents on my behalf, post notes and summaries, and read the queue.
[03:55:10 | 12:43:02 PM] Now I'm being prompted to log into the cloud hosting platform, so I am going to do that, and I get another consent screen now.
[03:55:26 | 12:43:18 PM] Which allows me to authorize the agent to access some capabilities of CompuHost on my behalf.
[03:55:40 | 12:43:32 PM] Now finally, I am back on the on-call dashboard.
[03:55:43 | 12:43:35 PM] Now we have the same queue of tickets, only now the audit log looks different.
[03:55:48 | 12:43:40 PM] The agent is probably going to try to behave the same way it did before, only now every request is going to go through the STS and policy evaluation before a token is granted and the agent will be authorized to act.
[03:56:02 | 12:43:54 PM] So we have the same queue of tickets, only now the audit log looks different, and the agent is probably going to behave the same way that it did before, only now every request is going to go through the STS and policy evaluation before a token will be granted and the agent can be authorized to act.
[03:56:03 | 12:43:54 PM] So the first ticket is that billing anomaly.
[03:56:31 | 12:44:23 PM] Again, the agent tries to read the— so the agent is reading the ticket, and we can see that it is trying to do the same thing that it did before.
[03:56:43 | 12:44:34 PM] It tries to query the customer warehouse, but policy doesn't allow a credential to be issued for this because customer PII doesn't belong in an agent's context or in an incident ticket.
[03:56:53 | 12:44:45 PM] So the agent proceeds without the customer data, and it escalated it to the morning team.
[03:57:12 | 12:45:04 PM] Now we have the website security certificate expiring.
[03:57:17 | 12:45:09 PM] Now this is something that the agent has permission to do.
[03:57:22 | 12:45:13 PM] So when it requests credentials to do this from the STS, access is granted, and it can call the cloud hosting API and resolve this ticket.
[03:57:36 | 12:45:28 PM] Now you can see all of the calls that it's making and who is making them.
[03:57:41 | 12:45:33 PM] So we have the on-call triage agent that is requesting to renew the certificate.
[03:57:48 | 12:45:39 PM] It's asking for permission to call the appropriate tool from the Infra MCP server.
[03:57:54 | 12:45:46 PM] So it gets a token for that.
[03:57:57 | 12:45:49 PM] After that, the MCP server is going to request access to that cloud hosting service in order to renew the certificate using the API.
[03:58:11 | 12:46:03 PM] So if we move on to the billing database, it's going to read the ticket through the incident API.
[03:58:19 | 12:46:11 PM] It's going to come to the same conclusion that it did before.
[03:58:25 | 12:46:17 PM] The agent knows that this is a drop and restore procedure, but this time policy forbids an agent to drop a production database.
[03:58:33 | 12:46:25 PM] A human's got to do this manually.
[03:58:36 | 12:46:28 PM] And we can see this in the audit log, where the STS refused to grant the token exchange for access to the database delete.
[03:58:53 | 12:46:45 PM] So now we have our orders are stuck.
[03:58:56 | 12:46:48 PM] The main server is frozen.
[03:58:58 | 12:46:49 PM] The agent is going to go ahead and read the ticket.
[03:59:02 | 12:46:54 PM] It wants to restart the main server.
[03:59:05 | 12:46:56 PM] This takes production briefly offline.
[03:59:07 | 12:46:58 PM] It informs me about this, and this time it's actually asking for my approval to do this.
[03:59:13 | 12:47:05 PM] Someone could approve.
[03:59:16 | 12:47:07 PM] However, this was also blocked by policy, and the reason for this is because my user does not have the role necessary to take this action, right?
[03:59:27 | 12:47:19 PM] So the agent can't do it, but I can't do it either, and the agent is acting on my behalf.
[03:59:35 | 12:47:27 PM] So if we move to the site failing for one and three users, again, the agent wants to add more servers, and it's going to ask for permission.
[03:59:48 | 12:47:40 PM] It's going to say what we're committing to when we do this.
[03:59:53 | 12:47:45 PM] I'm going to go ahead and approve this, and this is something that
[04:00:00 | 12:47:52 PM] Something that my role does have the authority to do.
[04:00:04 | 12:47:55 PM] So the scale goes through, and this ticket is resolved.
[04:00:10 | 12:48:01 PM] So we can see that the agent access problems are solved.
[04:00:13 | 12:48:04 PM] We know the user and the agent identity all the way down the chain.
[04:00:17 | 12:48:08 PM] The agent has task scoped ephemeral access to the MCP server and downstream resources.
[04:00:23 | 12:48:15 PM] And we have human in the loop with access control that's actually backed by policy.
[04:00:31 | 12:48:23 PM] Now access is controlled at the task level by the security token service and policy, and we retain all key capabilities.
[04:00:42 | 12:48:34 PM] Now token exchange is an open standard.
[04:00:45 | 12:48:36 PM] It's well researched and it's public, so anyone can implement it, and it interoperates with existing policy engines and standards-compliant identity providers, as well as things like gateways, sandboxes, OAuth, off-the-shelf and custom agents, CLIs, MCP servers, software factories, agent-to-agent, cross-app access, plus whatever comes out next week.
[04:01:07 | 12:48:58 PM] So I hope you'll consider it to make your agents useful, safe, and future-friendly.
[04:01:14 | 12:49:05 PM] Now my name is Kim Maida.
[04:01:15 | 12:49:06 PM] I'm the founding GTM engineer and head of DevRel at Keycard, and I really appreciate your time today, so thank you very much.
[04:01:45 | 12:49:36 PM] Hello everyone.
[04:01:49 | 12:49:40 PM] This talk is about the danger of your LLMs information leak in through shared GPU hardware.
[04:01:54 | 12:49:45 PM] If you're running a model in the cloud on a GPU shared with other tenants, someone next to you can learn things about it.
[04:02:00 | 12:49:51 PM] They can tell what model you're running, how fast it's responding, and even what kind of work it's doing right now, all without touching your data, just by watching timing.
[04:02:08 | 12:50:00 PM] That's what this talk covers: what a co-tenant on the same hardware can learn about your LLM from timing alone and what you can do about it.
[04:02:17 | 12:50:08 PM] To start, I'm Branislav Brzak, AI security researcher employed at Celtium.
[04:02:22 | 12:50:13 PM] At Celtium, we specialize in securing and providing observability into the environments AI systems run on.
[04:02:28 | 12:50:19 PM] My area of focus is low-level GPU-related security research.
[04:02:32 | 12:50:23 PM] That's something this talk covers.
[04:02:35 | 12:50:26 PM] When you share a GPU between tenants, you would expect full isolation, but the isolation provided may not prove to be sufficient.
[04:02:42 | 12:50:34 PM] In the case of this attack, the attacker doesn't even need any special permissions like root access.
[04:02:47 | 12:50:39 PM] It doesn't need any traditional exploit either.
[04:02:49 | 12:50:41 PM] The only thing it does is time the parts of the hardware that are still shared among tenants.
[04:02:56 | 12:50:47 PM] This is a demonstration video of what the victims and the attacker's dashboards look like.
[04:03:01 | 12:50:52 PM] On the left, we have Qwen3 model doing inference.
[04:03:04 | 12:50:56 PM] On the right, the attacker uses a side channel that Qwen3 leaks into as it's running.
[04:03:09 | 12:51:01 PM] From that, it determines exactly what model it is and what kind of text it's producing right now.
[04:03:17 | 12:51:08 PM] These are just the headline claims, but not the whole story.
[04:03:20 | 12:51:11 PM] We can tell which model it is, architecture and depth, within 97% accuracy.
[04:03:25 | 12:51:16 PM] We can tell how fast is the coding within 99.
[04:03:28 | 12:51:20 PM] 3% accuracy.
[04:03:29 | 12:51:21 PM] We can tell when and how much, the busy periods, token counts, and the answer length.
[04:03:35 | 12:51:26 PM] We can tell what kind of work it's doing: code, JSON, or retrieval.
[04:03:41 | 12:51:32 PM] What we cannot tell, though, are the actual prompts, answers, or contents, just timing.
[04:03:47 | 12:51:38 PM] And all of this on real H100s serving real LLMs.
[04:03:51 | 12:51:42 PM] If you're using NVIDIA hardware, GPU isolation is achieved using multi-instance GPU, or MIG for short.
[04:03:58 | 12:51:50 PM] Each isolated MIG slice has its own physical compute units and dedicated VRAM.
[04:04:04 | 12:51:56 PM] That provides hardware isolation on those parts.
[04:04:07 | 12:51:59 PM] In our example, the LLM we're serving runs on a slice with three compute units and 40 gigabytes of VRAM.
[04:04:13 | 12:52:05 PM] The attacker runs on just one compute unit and 10 gigabytes of VRAM.
[04:04:20 | 12:52:11 PM] What's isolated are compute units, memory capacity, bandwidth quotas, and false errors.
[04:04:25 | 12:52:17 PM] The L2 cache is partitioned per instance too.
[04:04:28 | 12:52:19 PM] There is no cross-instance eviction, so it's not shared in that sense.
[04:04:32 | 12:52:24 PM] The actual leaks are memory barriers or members, which are GPU-wide.
[04:04:37 | 12:52:28 PM] One instance's barrier still touches every L2 partition on the card.
[04:04:42 | 12:52:33 PM] Timing is the one thing that isn't isolated.
[04:04:45 | 12:52:37 PM] So when one tenant is busy, the other tenants' own reads get slightly slower.
[04:04:50 | 12:52:42 PM] The key point is the GPU-wide memory barrier takes effect in every L2 partition on the card.
[04:04:58 | 12:52:49 PM] The next slide builds the whole attack on that one fact.
[04:05:03 | 12:52:55 PM] The vector is that the attacker only ever reads its own memory.
[04:05:08 | 12:52:59 PM] It only times its own reads.
[04:05:09 | 12:53:00 PM] It never touches the victim's memory.
[04:05:10 | 12:53:02 PM] There are three steps: hold from its own small buffer, time the load, and repeat every five microseconds.
[04:05:17 | 12:53:08 PM] This primitive and the MIG member leak itself isn't our discovery.
[04:05:21 | 12:53:13 PM] Credit goes to the researchers behind Bars at Using Security.
[04:05:27 | 12:53:18 PM] A big thanks for their work.
[04:05:31 | 12:53:22 PM] Now try looking at the timing differences.
[04:05:33 | 12:53:25 PM] With the naked eye, comparing your tenant's idle versus serving an LLM, you wouldn't even be able to discern them.
[04:05:40 | 12:53:31 PM] The median latency is only three microseconds higher.
[04:05:42 | 12:53:34 PM] To the attacker, though, those three microseconds are all it needs.
[04:05:47 | 12:53:38 PM] That's enough to gather all the information we already talked about.
[04:05:53 | 12:53:44 PM] Quantree with 8 billion parameters is running on the victim's slice throughout this one.
[04:05:58 | 12:53:49 PM] All captured data was taken from a live model.
[04:06:00 | 12:53:52 PM] At the top is GPU activity over time, one burst per token.
[04:06:05 | 12:53:56 PM] Below is the frequency spectrum of the attacker's own latency trace.
[04:06:08 | 12:53:59 PM] There is a fundamental 881 hertz, which is just tokens per second plus harmonics, since each token is a mix of distinct frequencies, not one clean one.
[04:06:21 | 12:54:12 PM] This is a real trace, one token in the time domain.
[04:06:24 | 12:54:16 PM] The token shows a total of 39 bumps.
[04:06:27 | 12:54:19 PM] The bumps with green peaks are the layer invocations, while orange ones are additional between-layer processing.
[04:06:34 | 12:54:26 PM] In the later slides, we will demonstrate how we determined the actual layer counts even when those extra bumps are present.
[04:06:42 | 12:54:34 PM] Here we look at the decode speed itself.
[04:06:45 | 12:54:36 PM] Just by timing, we found the token rate completely bind.
[04:06:49 | 12:54:40 PM] So speed alone is something an attacker can recover accurately.
[04:06:52 | 12:54:44 PM] But speed by itself isn't the clean fingerprint.
[04:06:55 | 12:54:47 PM] Qwen 3 8 billion and Llama 3 8 billion decode only 1.
[04:07:00 | 12:54:51 PM] 6% apart in their token rate.
[04:07:02 | 12:54:54 PM] So from speed alone, you'd think they're the same model.
[04:07:05 | 12:54:57 PM] It narrows things down, but it doesn't nail it.
[04:07:08 | 12:54:59 PM] We need something sharper: layer counts.
[04:07:11 | 12:55:02 PM] That's what the next few slides get into.
[04:07:13 | 12:55:05 PM] We use the same fold and average trick from before.
[04:07:18 | 12:55:09 PM] This time, we run it once per model instead of once per token.
[04:07:21 | 12:55:13 PM] What comes out is a bit count that lands almost exactly on a whole number.
[04:07:27 | 12:55:18 PM] The mean distance from an integer across 22 traces is just 0.
[04:07:32 | 12:55:24 PM] 028.
[04:07:33 | 12:55:24 PM] That's the tell.
[04:07:34 | 12:55:25 PM] If this were just a fixed hardware artifact divided by different token rates, we'd expect fractions, not whole numbers.
[04:07:41 | 12:55:33 PM] Each count works out to the model's layer count plus one to three additional peaks.
[04:07:50 | 12:55:41 PM] Every model keeps its own signal fingerprints, a mix of tempo and harmonic structure.
[04:07:55 | 12:55:46 PM] To be clear, this is not a trained machine learning classifier.
[04:07:58 | 12:55:50 PM] There's no training set, no labels, no configuration.
[04:08:01 | 12:55:53 PM] It's under 30 lines of code.
[04:08:03 | 12:55:54 PM] The method checks each candidate's depth from 16 to 48.
[04:08:07 | 12:55:59 PM] It measures how strongly that depth's expected signature shows up in the real trace.
[04:08:13 | 12:56:04 PM] Then it picks whichever fits best.
[04:08:15 | 12:56:06 PM] For Qwen 3 8 billion, 36 layers wins clearly by 4.
[04:08:19 | 12:56:11 PM] times over the next candidate.
[04:08:21 | 12:56:13 PM] Because this is a best-fit test, not a lookup table, it also works for models it never seen before.
[04:08:27 | 12:56:19 PM] That includes proprietary or unreleased ones.
[04:08:30 | 12:56:22 PM] Since there is nothing it needs to have seen in the first place.
[04:08:39 | 12:56:30 PM] And this works surprisingly well.
[04:08:41 | 12:56:32 PM] The layer feed classifier also outputs the confidence level.
[04:08:45 | 12:56:36 PM] Across our testing, only two least confident answers ended up being wrong ones.
[04:08:53 | 12:56:44 PM] This same method also picks up fine-tunes and distillations that share the same base model.
[04:08:59 | 12:56:51 PM] That's because the architecture and layer count carry over unchanged.
[04:09:04 | 12:56:56 PM] Take three related models as an example.
[04:09:06 | 12:56:58 PM] Llama 3 8 billion from Meta has 32 layers.
[04:09:09 | 12:57:01 PM] Llama 3.
[04:09:10 | 12:57:01 PM] 1 8 billion, also from Meta, uses that same 32-layer backbone with minor upgrades.
[04:09:16 | 12:57:08 PM] And R1 is still Llama 8 billion from DeepSeek is an improvement on top of that.
[04:09:22 | 12:57:14 PM] The per-layer timing comes out to only 1.
[04:09:26 | 12:57:17 PM] 6 nanoseconds median latency shifts of each other.
[04:09:29 | 12:57:21 PM] The rest of the signal looks the same.
[04:09:32 | 12:57:24 PM] Regardless of this, our classifier is still able to discern between them.
[04:09:38 | 12:57:29 PM] Now we ask a deeper question on the same channel: not which model, but what is doing right now.
[04:09:43 | 12:57:34 PM] We look at four worklet types: prose, code, JSON, and retrieval.
[04:09:47 | 12:57:38 PM] We give a worklet on every half second based on the last five seconds of timing.
[04:09:52 | 12:57:43 PM] Out of 40 half-second worklets, 31 were right, and four full responses were correctly identified by majority votes.
[04:10:02 | 12:57:53 PM] This sees the same classifier from the video earlier, misses included.
[04:10:07 | 12:57:59 PM] One condition is worth stating.
[04:10:09 | 12:58:00 PM] This was measured with speculative decoding turned on.
[04:10:12 | 12:58:03 PM] That's an opt-in in vLLM, not the default.
[04:10:15 | 12:58:06 PM] Here's the mechanism: how predictable the text is changes how many drafted tokens get accepted at each step.
[04:10:22 | 12:58:13 PM] That changes step time, and that's the signal we're picking up.
[04:10:26 | 12:58:18 PM] We tested 11 configurations, dense and mixture of experts, BF16 and FP8.
[04:10:31 | 12:58:22 PM] The same figure page showed up every time, just at very different strengths: 70.
[04:10:37 | 12:58:29 PM] 2% spread on GPT-OSS 20 billion versus 0.
[04:10:40 | 12:58:32 PM] 9% on GLM 4 9 billion.
[04:10:43 | 12:58:34 PM] Then out of 11 run pros fastest when the chance alone would only give you one in four.
[04:10:49 | 12:58:40 PM] So say the attacker already knows the model from the earlier slides and speculative decoding happens to be on.
[04:10:56 | 12:58:47 PM] It can also tell what kind of text is coming out.
[04:10:59 | 12:58:50 PM] Now we take the shared chip out of the picture entirely.
[04:11:02 | 12:58:54 PM] MLG needs the attacker on the same physical die.
[04:11:06 | 12:58:58 PM] This attack doesn't.
[04:11:08 | 12:58:59 PM] The setup here is an 8x H100 server connected over an NVSwitch fabric.
[04:11:14 | 12:59:05 PM] The victim runs Tensor Parallel across GPU 0 and 1.
[04:11:18 | 12:59:09 PM] The attacker just needs any other GPU in that same server, GPU 2 in this case.
[04:11:24 | 12:59:15 PM] Peer access over NVSwitch is a real intended feature.
[04:11:27 | 12:59:19 PM] It's how multi-GPU jobs normally work, not a bug being abused.
[04:11:32 | 12:59:24 PM] MLG tensor parallelism also can't coexist on the same device.
[04:11:37 | 12:59:28 PM] So this is really a different population of deployments, not just the same attack repeated.
[04:11:45 | 12:59:37 PM] The probe runs on GPU 2.
[04:11:47 | 12:59:39 PM] It points to Chase's memory that actually is on GPU 0 over NVLink, timing every hop along the way.
[04:11:55 | 12:59:46 PM] An idle hop takes about 890 nanoseconds.
[04:11:58 | 12:59:50 PM] Once the victim starts working, that climbs up to 300 microseconds.
[04:12:04 | 12:59:55 PM] These are three half-second captures, and you can actually count the tokens by eye.
[04:12:11 | 1:00:03 PM] What we lose compared to MIG is the layer bits.
[04:12:15 | 1:00:07 PM] It's below the noise at this distance.
[04:12:18 | 1:00:10 PM] So over NVLink, the fingerprints we were left with is mostly tempo, not layer counts.
[04:12:25 | 1:00:16 PM] Here, we test the five models on identical serving setup.
[04:12:30 | 1:00:21 PM] Only the model itself gives away which one it is.
[04:12:34 | 1:00:26 PM] This method gives 79.
[04:12:36 | 1:00:27 PM] 2% accuracy.
[04:12:37 | 1:00:28 PM] Now, it fails exactly where you'd expect the tempo to fail.
[04:12:41 | 1:00:32 PM] Llama 3.
[04:12:42 | 1:00:33 PM] 8 billion and R1 Distill are both 8 billion models that decode three cards apart, so they blur together, where MIG's layer counts would have separated them easily.
[04:12:53 | 1:00:44 PM] The takeaway is that the NVLink signal-to-noise ratio is worse than MIG's, since it loses the layer bits.
[04:13:00 | 1:00:52 PM] But worse signal-to-noise ratio isn't the same as safety.
[04:13:04 | 1:00:55 PM] 79% against a 20% baseline is still real fingerprints, not noise.
[04:13:10 | 1:01:01 PM] First, some good news.
[04:13:11 | 1:01:02 PM] Our own product at work called the attack straight out of the box.
[04:13:16 | 1:01:07 PM] Celty monitors every single kernel launch across every GPU, analyzes suspicious workloads, and runs them through a full alert pipeline, which is something not every vendor can do.
[04:13:26 | 1:01:18 PM] Here is what made this one stand out: a single kernel relaunched about 3,000 times, hitting the exact same 40 kilobytes of memory over and over instead of moving to new data.
[04:13:38 | 1:01:29 PM] Only one kilobyte of data was sent back to the CPU the entire time because the timing itself was the payload, not the output.
[04:13:46 | 1:01:38 PM] In real terms, that is under six milliseconds start to finish with fewer than 50 tokens of reply.
[04:13:53 | 1:01:45 PM] We caught it before the response was ever half typed.
[04:14:00 | 1:01:51 PM] So, three takeaways.
[04:14:01 | 1:01:53 PM] First, placement is something operators actually control, so do not put an untrusted tenant's MIG slides right next to sensitive model.
[04:14:12 | 1:02:04 PM] Second, know the trade-off.
[04:14:13 | 1:02:05 PM] MIG rules out peer-to-peer communication, meaning there is no tensor parallelism on MIG.
[04:14:19 | 1:02:11 PM] Sharding over NVLink instead limits what leaks to timing alone rather than layer counts.
[04:14:26 | 1:02:18 PM] Third, watch the GPU itself.
[04:14:29 | 1:02:20 PM] Make sure the host infrastructure is actively verifying that no malicious workloads are running on the hardware.
[04:14:37 | 1:02:28 PM] That's exactly what Celtium does by catching these probes straight from the Chrome behavior.
[04:14:44 | 1:02:35 PM] Sharing a GPU means timing alone can give away the model, the speed, and the workload.
[04:14:49 | 1:02:41 PM] That's true even across NVLink without needing any exploit at all.
[04:14:54 | 1:02:45 PM] Celtium sees this happen in real time.
[04:14:56 | 1:02:48 PM] Most organizations still don't have that kind of visibility.
[04:15:00 | 1:02:51 PM] Thanks again to the researchers of Behind Bars.
[04:15:03 | 1:02:54 PM] This whole talk builds upon their work.
[04:15:05 | 1:02:57 PM] Thank you all for watching.
[04:15:31 | 1:03:22 PM] People have been saying that SaaS is dead for a while now.
[04:15:33 | 1:03:25 PM] It's not even a hot take at this point.
[04:15:35 | 1:03:27 PM] Why pay someone to build and maintain the tools you use when you could just do it yourself?
[04:15:40 | 1:03:32 PM] Just ask your agent to do it.
[04:15:43 | 1:03:34 PM] And for me, there's one missing piece that rarely gets mentioned, and it's the fact that there's a gap, a big gap, between working software that got one-shotted and software I would actually use, software that sparks joy, that is polished, that feels good.
[04:15:57 | 1:03:49 PM] And I actually went on a journey to replace a bunch of SaaS providers we were using internally at Railway for marketing purposes, and I just built an all-in-one tool that we use.
[04:16:06 | 1:03:57 PM] The tool allows us to manage content for the Railway website, changelog, blog.
[04:16:10 | 1:04:01 PM] We can use it to send emails, post on all of our social platforms at the same time, manage the website's media.
[04:16:16 | 1:04:08 PM] There's even a mini CRM so that when we're working with, like, external creators, we can keep track of that.
[04:16:22 | 1:04:13 PM] There is task tracking, launch planning, because, you know, you want to coordinate multiple things and when they'll go out.
[04:16:28 | 1:04:19 PM] There's a calendar, and at the same time, there's, like, comments, real-time editing, and it's all built using agents.
[04:16:35 | 1:04:27 PM] I would say I felt the breakthrough when GPT-6 came out, and all of this is running on Railway.
[04:16:43 | 1:04:34 PM] Everything just auto-deploys, and let me essentially now walk you through the principles I use to actually make sure that when I want to add a feature, it's, you know, actually polished and matches the rest of the app, and at the same time, the principles that you can pull from and apply when building tools of your own.
[04:17:03 | 1:04:55 PM] So instead of doing my talk from my boring office, I decided to switch things up and do it outside.
[04:17:08 | 1:05:00 PM] It is absolutely beautiful.
[04:17:10 | 1:05:01 PM] Right now I'm in Edinburgh, Scotland, and it's just unreal.
[04:17:14 | 1:05:05 PM] Like, I'm on a bench outside, and this is my view.
[04:17:18 | 1:05:09 PM] Definitely a 10 out of 10 bench.
[04:17:21 | 1:05:13 PM] Now, this type of talk for me feels a little bit different than what I'm used to because I essentially will walk you through the journey of me building our own internal tools and the opinions I've developed.
[04:17:34 | 1:05:25 PM] But I also understand that the landscape changes very, very quickly.
[04:17:39 | 1:05:30 PM] So, like, anything I say might change completely in, like, the span of months.
[04:17:44 | 1:05:36 PM] Who knows?
[04:17:45 | 1:05:36 PM] So I don't know.
[04:17:47 | 1:05:38 PM] Consider this my disclaimer.
[04:17:49 | 1:05:40 PM] Like, but the time of recording is fall 2026.
[04:17:53 | 1:05:45 PM] It's October, and yeah.
[04:17:55 | 1:05:47 PM] So anyway, with that out of the way, let's talk about the first point, which is tech stacks don't matter.
[04:18:02 | 1:05:54 PM] Now, a lot of people say that it doesn't matter what programming language you use, what framework you use.
[04:18:08 | 1:05:59 PM] You can just ask your agent to build you anything and they'll just be able to do it.
[04:18:12 | 1:06:03 PM] And while I agree to some extent, what I found is when you're building a tool that you will actually use, when you give the agent a proper codebase with solid abstractions, what ends up happening is whenever you're working, let's say, on a new feature, you end up with a much more consistent result that is similar to what you've already built before.
[04:18:34 | 1:06:25 PM] And the reason is, like, it's very simple.
[04:18:37 | 1:06:29 PM] The agent doesn't need to reinvent the same, like, wheel every time it tries to add a new feature, or it doesn't need to introduce new patterns.
[04:18:46 | 1:06:37 PM] It will just essentially follow existing patterns.
[04:18:48 | 1:06:39 PM] And when it comes to, like, what you choose, I feel like it kind of doesn't really matter as long as you have a codebase that is properly structured.
[04:18:58 | 1:06:49 PM] But, like, my go-to choice today is, one, TanStack libraries for anything when building on the web.
[04:19:04 | 1:06:56 PM] And if you're building anything content-related, I would say definitely go with Payload.
[04:19:10 | 1:07:01 PM] Solid experience, great abstraction.
[04:19:11 | 1:07:02 PM] I went down, like, a big rabbit hole of, like, comparing CMSs at some point because I don't believe that I should build it from scratch, even though I can.
[04:19:20 | 1:07:12 PM] But again, who knows?
[04:19:22 | 1:07:13 PM] Maybe the future will change.
[04:19:24 | 1:07:15 PM] But yeah, and that's kind of like the main first item that I kind of ran into.
[04:19:31 | 1:07:23 PM] When you use, like, a lot of SaaS products out there that you actually love, that you use every day, when you're a user, there's, like, a lot of things you don't notice.
[04:19:43 | 1:07:35 PM] But when you actually try to, like, replicate an experience, you quickly find out how much care and thought goes into different flows.
[04:19:51 | 1:07:42 PM] So, like, something as simple as, oh, I want to be able to send an email or to publish something.
[04:19:59 | 1:07:50 PM] You can easily do it.
[04:20:02 | 1:07:53 PM] We do it by having like a good old, you know, just like server-side rendered app with like forms that you submit.
[04:20:09 | 1:08:00 PM] But if you try to build something that is going to be used every day that you will reach for a lot, you're like, oh, it shouldn't feel that way.
[04:20:18 | 1:08:10 PM] And there are kind of like a bunch of patterns that I found that agents don't typically do unless you explicitly ask them to.
[04:20:26 | 1:08:18 PM] And this is my list.
[04:20:28 | 1:08:19 PM] So we'll go through them one by one.
[04:20:30 | 1:08:21 PM] And the first one is like auto-save.
[04:20:32 | 1:08:23 PM] I found that if, like, let's say I'm building some form of document editor, auto-save is kind of like a table stakes feature.
[04:20:40 | 1:08:31 PM] So rather than manually clicking save to save things, you just ask it to automatically save progress in the background and to make sure that it's like a non-blocking action so that you can, let's say, as you're typing, you're able to type and then it just automatically saves.
[04:21:00 | 1:08:51 PM] And one other kind of like step further that you could do is to also prevent the browser tab from closing if there are unsaved changes.
[04:21:10 | 1:09:02 PM] So it's kind of like these two layers that kind of guarantee that whatever it is that you're working on is just not going to be lost.
[04:21:18 | 1:09:10 PM] Now, you can also go a step further and to add like real-time collaboration so that you can have like concurrent edits.
[04:21:26 | 1:09:18 PM] And again, my agent didn't struggle at all with adding the feature.
[04:21:30 | 1:09:22 PM] It was like, I don't know, asking about it, reviewing how it would work, and then once that's done, just 700 million tokens later and I had real-time.
[04:21:41 | 1:09:33 PM] So I would say in general, this is the first thing that I find agents just don't do well from a product experience perspective.
[04:21:49 | 1:09:41 PM] Another pattern I found that agents completely forget to implement is optimistic updates.
[04:21:54 | 1:09:45 PM] So rather than showing your users a bunch of loading spinner whenever they're taking any action, you essentially show them the success state optimistically, and in the background you're going to sync whatever change they made.
[04:22:06 | 1:09:58 PM] Now, if the sync or the operation fails for whatever reason, you just roll it back and then tell them like, oh, the operation didn't work.
[04:22:14 | 1:10:05 PM] Now, of course, you shouldn't blindly have optimistic updates for everything.
[04:22:18 | 1:10:10 PM] There are some scenarios where you want to show the user a loading spinner and you're going to wait to check that everything worked properly.
[04:22:26 | 1:10:17 PM] But in general, Having optimistic updates makes the overall experience feel significantly faster, much snappier, and it will just feel much more instant.
[04:22:36 | 1:10:28 PM] So pretty sure you can just ask your agent, like, Hey, I would like to implement optimistic updates where it makes sense.
[04:22:43 | 1:10:34 PM] Let's come up with a plan, and it will tell you all the areas where it makes sense to do.
[04:22:46 | 1:10:38 PM] Again, it's like, it's not difficult for the agent to build it.
[04:22:49 | 1:10:41 PM] You just need to ask and know exactly what to ask for.
[04:22:53 | 1:10:44 PM] Now, an extension of optimistic updates, in my opinion, is giving users the ability to undo certain actions.
[04:22:59 | 1:10:50 PM] Now, for example, if you ask your agent to implement the ability to delete records, what it will typically do is it will give you a delete button.
[04:23:08 | 1:10:59 PM] You click it, might show a confirmation dialog, you hit confirm, and then it will actually do the deletion.
[04:23:14 | 1:11:05 PM] But a much nicer experience is actually allowing the user to undo that action.
[04:23:19 | 1:11:11 PM] So they hit delete, you immediately remove the item they want to delete from the UI, but you tell them, like, Hey.
[04:23:25 | 1:11:17 PM] You have like a couple of seconds where you could change your mind.
[04:23:29 | 1:11:21 PM] And if they don't do anything, that means you actually want to delete the thing, then you actually implement the operation.
[04:23:37 | 1:11:28 PM] Otherwise, if they hit undo, you just bring back the change.
[04:23:40 | 1:11:32 PM] So it's kind of like you do the operation in the background as well.
[04:23:44 | 1:11:36 PM] It's just kind of a delayed action, which kind of ties into the next point, which is archiving.
[04:23:50 | 1:11:42 PM] You should tell your agent you want the ability to archive records and be able to unarchive them, because sometimes you want to hide something from the UI completely or, let's say, from search results, and archiving will be the way to do it.
[04:24:04 | 1:11:56 PM] And you shouldn't force your user to be like, well, if you don't want to see this, you have to delete it.
[04:24:09 | 1:12:00 PM] Any much better experience is just the ability to archive records.
[04:24:12 | 1:12:04 PM] So I think it is a pattern that should definitely exist.
[04:24:17 | 1:12:08 PM] Another big one for me is URL state.
[04:24:18 | 1:12:10 PM] You should ask your agent to persist state in the URL whenever it makes sense, of course.
[04:24:22 | 1:12:14 PM] And it's so useful because whenever you have, let's say, a list of records and you want the ability to filter or sort them, and you just have a bunch of like conditions, maintaining these things in the URL makes it trivial for you to give them to someone else.
[04:24:38 | 1:12:30 PM] And then, let's say, another team member is just going to be able to see exactly what you want them to see.
[04:24:43 | 1:12:35 PM] Now, another small detail that agents don't implement out of the box is infinite scroll.
[04:24:47 | 1:12:38 PM] I don't want to be clicking on load more over and over and over, or like a next page button.
[04:24:53 | 1:12:44 PM] As I scroll, I should just get the data.
[04:24:55 | 1:12:47 PM] I shouldn't need to click next page, and then in the end, I'll just see that, oh, I've reached the end.
[04:25:00 | 1:12:52 PM] It's a very minor thing, but also when you use something every day, I think it makes a huge difference.
[04:25:06 | 1:12:57 PM] Now, another pattern I found that made the output significantly better is telling the agent explicitly to use existing pages as references when it comes to the UI, the data fetching and how it works, and how the thing is overall structured.
[04:25:21 | 1:13:13 PM] And that made it possible for me to essentially define what good looks like once.
[04:25:26 | 1:13:17 PM] And then just reuse it for more features.
[04:25:30 | 1:13:21 PM] Now, to be completely honest, sometimes even when you tell the agent like, hey, use page X as a reference, sometimes it just doesn't follow it.
[04:25:39 | 1:13:30 PM] I don't know if models, like, get dumber sometimes, but sometimes it does happen.
[04:25:43 | 1:13:35 PM] But overall, I would say that my success rate is higher whenever I tell the agent to, like, well, use an existing page as a reference, because you also just end up with a more consistent experience.
[04:25:54 | 1:13:46 PM] So, like, as you're using your app, you're like, oh, this just matches the other part of the app if they both share, like, the same concept.
[04:26:02 | 1:13:54 PM] So, like, if two parts of the app are essentially lists of records that you can create, update, and delete and, like, list, well, both of these parts should be pretty much identical.
[04:26:15 | 1:14:06 PM] This list kind of brings me to my next point, which is whenever we have opinions about something, they should be packaged as agent skills.
[04:26:20 | 1:14:12 PM] And then this way, your agent, whenever it's building something, it will actually follow those skills pretty closely.
[04:26:27 | 1:14:19 PM] And as I was building all of our internal tooling, I found myself reaching for three agent skills.
[04:26:32 | 1:14:24 PM] Two of them are related to design engineering.
[04:26:34 | 1:14:26 PM] So one made it easier to have better UI, better typography, better layouts, as well as, like, better error messages in general.
[04:26:43 | 1:14:34 PM] And the second one was a set of design engineering skills that made it easier to just have better animations and other things like that.
[04:26:49 | 1:14:41 PM] And then last but not least is the Railway agent skills, of course.
[04:26:53 | 1:14:44 PM] So, like, everything that I built for us internally at Railway runs on Railway, of course.
[04:26:59 | 1:14:51 PM] Like, everything.
[04:27:00 | 1:14:52 PM] So, like, buckets, databases, the app itself, the real-time server, everything.
[04:27:05 | 1:14:57 PM] And for the agent to effectively work with Railway and be able to deploy everything, you just give it the Railway agent skills, and it was just able to do it.
[04:27:14 | 1:15:05 PM] And yeah, so, like, once you have all of your agent skills and everything, in my opinion, the final step, and I think this is the most important step, is verification.
[04:27:25 | 1:15:16 PM] So the agents typically, whenever you ask it to build something, it's going to be like, okay, I implemented the feature, build passed, test passed, all good, right?
[04:27:33 | 1:15:25 PM] But what I found is when you actually try out what happens, you sometimes end up with just like a very broken experience.
[04:27:41 | 1:15:33 PM] So once you have like a verification loop in place, it's like a night and day difference because the agent, you can literally see it be like, okay, I built this thing, I tried it, it failed, I'm going to fix it, and it just keeps going.
[04:27:55 | 1:15:46 PM] And then in the end it's like, okay, I fully tested it.
[04:27:57 | 1:15:49 PM] And I felt this breakthrough with computer use once it got really, really good.
[04:28:02 | 1:15:54 PM] And now every time I want to add a new feature, I literally just in the end say, well, you should verify that the feature works end to end and use it by actually running infrastructure end to test things end to end.
[04:28:17 | 1:16:08 PM] And the agents are very capable of doing this.
[04:28:19 | 1:16:11 PM] You just have to tell them.
[04:28:21 | 1:16:12 PM] And once you have all of those pieces, I would say you will end up with solid internal tools that you can build quickly, that work properly and work in a consistent way.
[04:28:31 | 1:16:23 PM] And that's it.
[04:28:32 | 1:16:24 PM] This was my list of principles that I use whenever I'm building any internal tools.
[04:28:35 | 1:16:27 PM] Hope you found them useful.
[04:28:36 | 1:16:28 PM] But more importantly, that you're inspired to build your own internal tools that feel good, that are polished, and spark joy.
[04:28:45 | 1:16:36 PM] And I hope that you too can become your company's SaaS layer.
[04:28:49 | 1:16:40 PM] And with that, thank you so much for watching, and I'll see you in the next one.
[04:28:57 | 1:16:49 PM] So I really love this article from Hannes at DuckDB, where he asks if we lost a decade chasing distributed architectures that presumed compute and storage were slow and expensive.
[04:29:31 | 1:17:22 PM] Capability in every era, though, defines architecture and tooling, and the tooling lags behind consistently.
[04:29:37 | 1:17:29 PM] We first made compute cheaper than storage, and then we gave it to everybody, and then we made it faster.
[04:29:43 | 1:17:35 PM] And every single time, architectures undergo this massive change.
[04:29:47 | 1:17:39 PM] All of our data infrastructure today is built on the idea that transformation is expensive.
[04:29:53 | 1:17:45 PM] What if that wasn't true anymore?
[04:29:56 | 1:17:48 PM] I believe we've solved the final bottleneck in transformation.
[04:30:00 | 1:17:52 PM] General intelligence or judgment.
[04:30:02 | 1:17:54 PM] And we've made it accessible on tap all along the Pareto frontier, which puts us right on the verge of a paradigm shift.
[04:30:10 | 1:18:01 PM] So in this talk, we're going to cover why single ontologies always fail, the three roles models play in pipelines, intersecting model priors for better results, and Pareto surfing, how today's models can tune a workload for cost, speed, and accuracy all at the same time.
[04:30:28 | 1:18:19 PM] Here's a quick example.
[04:30:29 | 1:18:21 PM] When Jeff launched, we already had an entity resolution pipeline running, working out Ohio's campaign finance records and whether they belong to the same person, company, or committee.
[04:30:40 | 1:18:32 PM] It was projected to cost about $10,000.
[04:30:43 | 1:18:34 PM] Our systems took that new model, worked out where it fit, tested over a dozen approaches, and integrated it.
[04:30:50 | 1:18:41 PM] Ten days after that first call, we had final ground truth for every donor case in Ohio under $800.
[04:30:57 | 1:18:49 PM] That is the power of Pareto surfing and just-in-time transformations.
[04:31:02 | 1:18:54 PM] So let's get into it.
[04:31:06 | 1:18:57 PM] Ontologies are the enterprise version of mind maps.
[04:31:11 | 1:19:02 PM] It's this tarpit that sucks us all in, including me.
[04:31:15 | 1:19:07 PM] I talked about a single universal schema when I founded Southbridge two years ago.
[04:31:20 | 1:19:12 PM] The popular conception, and it's not wrong, it's just a small part of the picture, is that migrations in ontologies fail because of a lack of buy-in and there are abandoned halfway through, that organizations and people never switch over.
[04:31:34 | 1:19:25 PM] All of that is true, 100%.
[04:31:36 | 1:19:27 PM] But buy-in isn't the primary reason.
[04:31:39 | 1:19:30 PM] Say if you could integrate and migrate all of your information into a single superschema in the blink of an eye.
[04:31:46 | 1:19:37 PM] You still have to contend with the truth that there is no super schema.
[04:31:50 | 1:19:42 PM] There actually are four schemas.
[04:31:53 | 1:19:44 PM] The first one belongs to the source, wherever the information comes from.
[04:31:57 | 1:19:49 PM] Let's take temperature as an example.
[04:31:59 | 1:19:50 PM] Say I ask you to write down the temperature.
[04:32:02 | 1:19:53 PM] The source schema is whatever you have access to.
[04:32:05 | 1:19:56 PM] Your phone gives you your region's temperature, sensor on your desk, which is less accurate but is more local, or your watch.
[04:32:11 | 1:20:02 PM] But even your patience in following through on my request is part of that source schema.
[04:32:16 | 1:20:08 PM] The second one is the storage schema.
[04:32:19 | 1:20:11 PM] There's only so much you can write down.
[04:32:22 | 1:20:14 PM] You can't write down the firmware of the device you're using.
[04:32:25 | 1:20:17 PM] You can't even write the time down to the second because you couldn't finish writing all of that inside of a second.
[04:32:31 | 1:20:23 PM] This is the schema imposed on you by storage.
[04:32:34 | 1:20:25 PM] The third one belongs to the decision.
[04:32:36 | 1:20:28 PM] Why do I need you to write the temperature down?
[04:32:40 | 1:20:31 PM] Maybe I'm figuring out what makes you comfortable, in which case I need temperatures from you spread throughout the day, and I need to make sure that it's you that's doing the measurement.
[04:32:48 | 1:20:40 PM] Maybe I'm building weather migration maps, in which case I don't care who does the measuring, but I care a lot about your exact location, the time, the device you used, and whether that's changed.
[04:32:59 | 1:20:50 PM] Or maybe I'm deciding whether to install sensitive equipment and where, and you yourself become this variable that I need to cancel out.
[04:33:08 | 1:20:59 PM] There's a fourth one, though, which we'll get to when we talk about priors.
[04:33:12 | 1:21:03 PM] It's this recent addition.
[04:33:13 | 1:21:05 PM] The true problem is that you will never know all four schemas at the same time except at the moment that the decision is being made.
[04:33:21 | 1:21:13 PM] In almost every enterprise and every home, most of the data being recorded has little idea what it's going to be used for.
[04:33:29 | 1:21:21 PM] Take a customer, the first box in every ontology.
[04:33:32 | 1:21:24 PM] To billing, a customer is whoever pays.
[04:33:35 | 1:21:26 PM] To support, it's whoever calls.
[04:33:37 | 1:21:28 PM] To compliance, it's whoever we're on the hook for.
[04:33:40 | 1:21:31 PM] And the only time you know is when the decision is known.
[04:33:43 | 1:21:35 PM] Should we refund this order?
[04:33:45 | 1:21:36 PM] Can we extend this account more credit?
[04:33:47 | 1:21:38 PM] Suddenly, what you need to know, how and to what degree, becomes extremely clear.
[04:33:52 | 1:21:43 PM] This is why I was wrong.
[04:33:55 | 1:21:46 PM] There is no universal schema.
[04:33:57 | 1:21:48 PM] There is no concept of a customer that's divorced from the question that you want to answer.
[04:34:03 | 1:21:54 PM] And pulling these schemas together is the process of transformation, of making information actually useful, taking the context that it was recorded in and merging it with the context of the decision.
[04:34:14 | 1:22:06 PM] And that takes discernment.
[04:34:16 | 1:22:07 PM] Doing that merge when the decision space is known instead of ahead of time is what I mean by a just-in-time ontology.
[04:34:23 | 1:22:15 PM] So we'll come back to discernment with a story from my last job, where most of my job was to make sure that certain numbers just did not exist ever.
[04:34:34 | 1:22:26 PM] Before that, a little bit about me and us.
[04:34:38 | 1:22:29 PM] We are best described as obsessives.
[04:34:40 | 1:22:32 PM] Obsessives who embed intelligence into pipelines.
[04:34:43 | 1:22:34 PM] Pipelines that can scale, that can run over and over again to take work truly off our hands, and pipelines that can mature in cost, performance, and speed all on their own.
[04:34:54 | 1:22:45 PM] And most of the work we do in data breaks into three regimes.
[04:34:58 | 1:22:50 PM] The first is write once, run once.
[04:35:00 | 1:22:52 PM] If you do any kind of development, think of these as monster-scale, immediately invoked functions.
[04:35:06 | 1:22:57 PM] They're built for something single-use, like joining a dataset, mining information, or answering one specific question, and then they get torn down.
[04:35:15 | 1:23:06 PM] The second is write many, run once, where lots of smaller and larger workloads are built for one large common goal.
[04:35:23 | 1:23:15 PM] The closest thing you might know is, like, large migrations.
[04:35:27 | 1:23:19 PM] Years of records moved out of systems nobody fully remembers, lots of workloads built for one move and verified individually at source, checked against the others because all of it only happens once.
[04:35:38 | 1:23:29 PM] The third, though, and this is bread and butter, is the most common, is write many, run many.
[04:35:43 | 1:23:35 PM] These are repeatable pipelines that are built and maintained over time as we add more information in.
[04:35:49 | 1:23:41 PM] And at SoftRidge, we've moved so much work off the main thread and into these repeatable systems, from benchmark design, tracking, coding, to making subtitles for movies that we want to watch.
[04:36:00 | 1:23:52 PM] Almost everything we do in the modern world is a transformation of data, or it's bottlenecked by how hard it is to transform data.
[04:36:08 | 1:24:00 PM] And in all of these cases, our job is simple: make sure people can rely on the results.
[04:36:13 | 1:24:04 PM] In just two years, we've gone from figuring out how to make early 3.
[04:36:17 | 1:24:09 PM] 5 turbo-level models reliable on things like healthcare, aging, mining research, to building Hankwave, our open-source harness for data work, and then using that to get models to work together at terabyte scale.
[04:36:30 | 1:24:22 PM] Today, we have systems that can self-optimize.
[04:36:33 | 1:24:24 PM] You give them the problem, a way to fail safely, a place to work, and they find the shape of the solution.
[04:36:39 | 1:24:31 PM] They pick the right models, they run the pilots, they scale up, and they Pareto-serve their way to the best option they can find.
[04:36:49 | 1:24:41 PM] So, story.
[04:36:50 | 1:24:41 PM] At my last job, the question we heard most often was, Can we make this decision data-led?
[04:36:58 | 1:24:49 PM] And sometimes that was the right question when we had thousands of vessels on the platform.
[04:37:02 | 1:24:54 PM] The problem is that we also asked it when we only had 50 users.
[04:37:06 | 1:24:58 PM] And if you know statistics, you can explain really well why A/B testing 50 users is a bad idea.
[04:37:12 | 1:25:03 PM] Not because you're not going to get a result, but because you will.
[04:37:16 | 1:25:07 PM] So the only real option was to not produce a number at all, because the moment a number exists, it argues for a result.
[04:37:25 | 1:25:17 PM] Today, though, it is worse.
[04:37:27 | 1:25:19 PM] Interactive agents will always give you an answer.
[04:37:30 | 1:25:22 PM] They'll give it to you quickly.
[04:37:32 | 1:25:23 PM] You ask for a transformation, whatever, and you get a confident yes, sir.
[04:37:36 | 1:25:27 PM] What this means is mistakes add up quickly.
[04:37:38 | 1:25:30 PM] Moment in chat can be a prod nightmare forever, just waiting to be discovered.
[04:37:43 | 1:25:35 PM] The primary reason that this happens is that intelligence, as it relates to data work today, occupies three separate roles that coding agents kind of mash into one context window.
[04:37:54 | 1:25:46 PM] Let's pull those apart, because it'll help a lot when we get to decision models, because they fit into exactly one of these three.
[04:38:01 | 1:25:53 PM] The first one is building and designing the pipeline, which is breaking down the problem, writing the early specs, authorizing spend.
[04:38:08 | 1:26:00 PM] The second one, and this is usually confused with the first and given to the same models, is working inside the pipeline, actually doing the work, reading the PDF, writing to databases, checking results.
[04:38:20 | 1:26:11 PM] Before we get to the third one, I want to make it clear that these two roles pull in very different directions.
[04:38:26 | 1:26:18 PM] The first one wants slower models with heavier, thicker tokens, models that can think more, walk around a problem and see the angles, digest documentation, understand how these pipelines get built, and predict how something will do before it even starts, like Opus or O1.
[04:38:43 | 1:26:35 PM] The models you want inside pipelines, though, are the opposite.
[04:38:47 | 1:26:39 PM] You want them cheaper, faster, specialized, good at following instructions, repeatable workers with knowable defects.
[04:38:54 | 1:26:45 PM] You see the same thing in nature.
[04:38:56 | 1:26:48 PM] A leafcutter ant colony, for example, runs on four different sizes of worker: small, medium, high, ex-high.
[04:39:02 | 1:26:54 PM] As you watch any system that you design, review, or hear about, listen for what slots and where in this layer cake.
[04:39:09 | 1:27:01 PM] It makes a big difference.
[04:39:12 | 1:27:03 PM] Because we had this distinction, bringing in Jev in this newly exploding class of decision models was very easy, because they're workers.
[04:39:19 | 1:27:11 PM] They're built for quick contact with information, and they're deployed at the bottom end of large workloads.
[04:39:26 | 1:27:17 PM] So, third category, though.
[04:39:27 | 1:27:19 PM] This is something we call the hill climbers or surfers, models that can take a first run and self-optimize.
[04:39:34 | 1:27:26 PM] Given the right knowledge, instructions, and an incredibly stable surface to stand on, they can try new things, vary budgets to limit cost exposure, debug quickly, take notes, surf their way not just to the right solution, but the optimal one.
[04:39:50 | 1:27:41 PM] We call that Pareto surfing, and we'll cover it at the end.
[04:39:53 | 1:27:45 PM] But first, let's talk about our experience with Jev.
[04:39:56 | 1:27:47 PM] Jev launched on a Tuesday when we were deep into an entity resolution.
[04:40:01 | 1:27:53 PM] Entity resolution pipeline.
[04:40:03 | 1:27:54 PM] We were working on donors in Ohio's campaign finance, and at this point, a lot of people have seen this chart.
[04:40:09 | 1:28:00 PM] We talked about the results before and adapted some of the ongoing work to the dataset, so you can download it for yourself, prompts and everything.
[04:40:17 | 1:28:08 PM] What we didn't talk about is everything behind that one arrow and what happened when we ran the same idea on the whole state.
[04:40:24 | 1:28:16 PM] Here are all of the architectures we tried.
[04:40:26 | 1:28:18 PM] We started with three designs on a small development set: a cheap reasoning model on its own, Jev with a reasoning model for anything it wasn't sure about, and a reasoning model proposing answers with Jev checking them.
[04:40:39 | 1:28:31 PM] On about 200 held-out families, the cheap reasoning model on its own did as well as Fable for about 2% of the cost.
[04:40:47 | 1:28:39 PM] Jev first got the core answers right, but it missed nine household links because it had confidently said no to every one of them.
[04:40:56 | 1:28:47 PM] So we rewrote the questions without touching the models or the thresholds.
[04:41:00 | 1:28:51 PM] The household question now said what counts as enough evidence, and Jev went from no on all 13 development questions to yes.
[04:41:06 | 1:28:58 PM] And as we scaled it statewide, we ran over a dozen rounds of such qualification.
[04:41:11 | 1:29:03 PM] Each round fixed a definition: what a committee is, what a filer means, when two people live at one address, what does that mean.
[04:41:18 | 1:29:10 PM] Every one of Ohio's 203,317 cases now has a label that says what the answer rests on and how far it was checked.
[04:41:28 | 1:29:20 PM] This is the hierarchy we discovered for this specific problem.
[04:41:32 | 1:29:24 PM] And here's everything we learned about putting decision models into pipelines.
[04:41:36 | 1:29:27 PM] I'll leave this up so you can screenshot it.
[04:41:39 | 1:29:30 PM] But here's where the money went.
[04:41:40 | 1:29:32 PM] The whole statewide job came to $795 on an $800 budget that was set ahead of time.
[04:41:47 | 1:29:38 PM] Checking cost about four times as much as doing, 5.
[04:41:50 | 1:29:41 PM] 45 on second opinions, settling disagreements, and the audit against 128 for first answers.
[04:41:57 | 1:29:49 PM] And before Dev, we expected this work to cost about $10,000.
[04:42:01 | 1:29:52 PM] And now that the pipeline is built and verified, we expect the audit budget for the next state to be close to zero.
[04:42:07 | 1:29:58 PM] The most amazing thing is that our agent, 4A, running on Astra and then later on Opus, found most of these approaches incrementally on its own by building the system, running it, debugging it, and trying new things.
[04:42:22 | 1:30:13 PM] It ran for 10 days, tried over a dozen architectures.
[04:42:25 | 1:30:17 PM] Its hangs ran for more than 4,000 times alongside 90,000 calls to Dev, tried practically every model on the Pareto frontier, and the models inside those runs went through roughly 6 billion tokens.
[04:42:38 | 1:30:30 PM] And once all of that was done, we wrote what we learned back into our library of agentic patterns.
[04:42:44 | 1:30:35 PM] This work leaned on these existing ones, and we're adding new tested ones like the checking ladder.
[04:42:50 | 1:30:42 PM] This is, to me, the value of taking work off the main thread for humans and for agents, because every single one of these iterations was a version-controlled hang.
[04:43:00 | 1:30:52 PM] They were easy to revert, understand, debug, and critique.
[04:43:05 | 1:30:56 PM] So can models do this natively now?
[04:43:08 | 1:30:59 PM] Not quite.
[04:43:09 | 1:31:00 PM] They're missing four things, which we'll go over.
[04:43:12 | 1:31:03 PM] And there's something that doesn't go away, though, as models get bigger and more capable: the prior.
[04:43:18 | 1:31:09 PM] Just like humans, models bring their own priors, their beliefs about what should be in the world to every task.
[04:43:25 | 1:31:17 PM] This is that fourth schema that I mentioned before, the one the model brings with it.
[04:43:31 | 1:31:22 PM] Bigger models, in a strange way, are worse at this sometimes.
[04:43:35 | 1:31:26 PM] They hold on to their beliefs and argue for them even more vehemently.
[04:43:39 | 1:31:30 PM] Here's a few that we ran into.
[04:43:41 | 1:31:32 PM] One pipeline looked for in-kind spelled with an underscore.
[04:43:45 | 1:31:36 PM] The file spelled it with a capital I and a hyphen.
[04:43:48 | 1:31:40 PM] So the model counted 15,658 in-kind contributions as ordinary money, didn't double-check.
[04:43:55 | 1:31:47 PM] The loan repayments also disappeared the same way.
[04:43:58 | 1:31:50 PM] Another one tried four date formats when the file used to fifth.
[04:44:03 | 1:31:55 PM] 99.
[04:44:03 | 1:31:55 PM] 4% of the transaction dates then came out empty, and every row count and dollar so matched, so the agent moved on.
[04:44:12 | 1:32:03 PM] Several runs noticed that loan amounts were negative, decided that the sign was redundant, and stored the absolute value.
[04:44:19 | 1:32:11 PM] A net of 784,000 became 5.
[04:44:22 | 1:32:13 PM] 3 million dollars of debt in the end, validated by multiple models.
[04:44:28 | 1:32:20 PM] And this is quickly becoming the largest class of error I see across companies in data work as models take over.
[04:44:34 | 1:32:25 PM] Sometimes you can solve this just by not vibing, by checking results and applying human intuition.
[04:44:39 | 1:32:30 PM] And what you're actually doing there when you do this is interesting.
[04:44:43 | 1:32:34 PM] You're intersecting your priors with the models.
[04:44:46 | 1:32:38 PM] In that first example, any human would catch missing in-kind contributions if they knew campaign finance or think to check.
[04:44:54 | 1:32:45 PM] That's how we found it.
[04:44:55 | 1:32:46 PM] But humans, speaking as a human on this particular task, are expensive.
[04:44:59 | 1:32:50 PM] They are slow.
[04:45:00 | 1:32:51 PM] They pause timelines.
[04:45:01 | 1:32:53 PM] They're even more non-deterministic than models, and they hate interruptions.
[04:45:06 | 1:32:57 PM] But it turns out you can also get really far with cross-model prior intersection.
[04:45:11 | 1:33:02 PM] On our 200 held-out families, Jev and Luna agreed on 194, and none of those shared answers was wrong.
[04:45:19 | 1:33:10 PM] Every error sat in the six families where they disagreed.
[04:45:23 | 1:33:14 PM] Models from different families, different pedigrees, tend to disagree more and have different priors than models in the same group, for example.
[04:45:30 | 1:33:21 PM] The exception, I'm not going to say who, are models that are distilled outside the same company.
[04:45:36 | 1:33:28 PM] So with that kind of work, you can shrink the surface quite a bit and the errors along with it down to a much smaller but persistent class of problems that apply to LLMs as a species.
[04:45:48 | 1:33:39 PM] So in one benchmark, four different model families produced the same total down to the cent because they all shared a signed convention that the answer key didn't.
[04:45:56 | 1:33:47 PM] And once you get that far, the only way forward is to list them, look out for them, and apply specific solutions.
[04:46:03 | 1:33:55 PM] So going back, what are the four things we're missing to be able to self-optimize?
[04:46:09 | 1:34:00 PM] Number one is a stable deployment surface.
[04:46:13 | 1:34:04 PM] We use Hankweave for this, a harness that takes the fast-moving surface of agent runtimes like Claude Code and Py, and then exposes a consistent, well-tested login API interface with checkpointing, rollback, budget enforcement, everything built in, something you can build on.
[04:46:28 | 1:34:20 PM] But other things fit this description.
[04:46:31 | 1:34:22 PM] To be fair, for headless data work, Hankweave, I would say, is still the oldest, most stable, and the most open.
[04:46:36 | 1:34:28 PM] I'll leave the skill up if you'd like to try it.
[04:46:39 | 1:34:31 PM] Number two is some way to bound your experiments.
[04:46:42 | 1:34:34 PM] You can't test unless you can control cost, time, and access as resources.
[04:46:48 | 1:34:39 PM] The third one is know-how and methodology.
[04:46:51 | 1:34:43 PM] We found that this new class of models can take everything we've learned from two years of deployments: agentic patterns, debugging techniques, prompting, and apply it to complex problems.
[04:47:01 | 1:34:52 PM] With the right abstraction layer, you can express it very token efficiently, and the models can implement it.
[04:47:07 | 1:34:58 PM] The fourth and the most important one is a failure surface.
[04:47:10 | 1:35:02 PM] Our community said, Give me a place to stand and I will move the earth.
[04:47:14 | 1:35:06 PM] And in our case, we haven't met a problem or a constraint that we couldn't iterate ourselves to solving, given a stable stack to build on and a failure surface to iterate against.
[04:47:25 | 1:35:16 PM] That last one has been the hardest to put into words and into tooling and instructions that helps models get there.
[04:47:31 | 1:35:23 PM] The current best models are still only barely good at this, sparks of intelligence, so to speak.
[04:47:37 | 1:35:29 PM] The whole process, though, involves going through six stages.
[04:47:40 | 1:35:32 PM] First, we spec the job and we split it.
[04:47:42 | 1:35:34 PM] For Jeff, that means splitting some 800,000 rows into 200,000 smaller specialized cases, and each of those cases into typed questions: what kind of donor, one donor, you know, different, different questions that needed to get answered.
[04:47:56 | 1:35:48 PM] Then we decide the failure surface.
[04:47:58 | 1:35:50 PM] In this case, we ran good models on a small slice of the data, with some of it being manually checked, to set a baseline that we can fail against.
[04:48:06 | 1:35:58 PM] In other cases, we've set automated failure systems, we've set schema checks, we've also covered behavior as a thing that we can measure against.
[04:48:15 | 1:36:07 PM] But it's very important to have to define a failure surface before you ever start.
[04:48:21 | 1:36:12 PM] But now comes the fun part.
[04:48:22 | 1:36:13 PM] We run minimal bounded pilots to test architecture, and once something starts working, we move those checks into rigs, code that runs between bounded work segments that we call codons.
[04:48:34 | 1:36:25 PM] These codons are then reused, looped independently, validated, and placed in sequence.
[04:48:41 | 1:36:32 PM] Finally, working pipelines get deployed to production, where they can slowly mature.
[04:48:46 | 1:36:37 PM] And that middle part is where the surfing happens.
[04:48:49 | 1:36:41 PM] We find an architecture that gives a solid result, we use it as a baseline, then we swap models and some other parts for faster, cheaper options, compare against known intermediates, tighten the requirements for success each time, moving closer and closer to the ideal, and you just watch the frontier move.
[04:49:06 | 1:36:57 PM] Being able to break a complex problem into pieces means each piece can move to its own best position, as Adam Smith would say.
[04:49:15 | 1:37:06 PM] In a system like this, ontologies exist as intermediates between intelligence and result, which makes them easier to reuse.
[04:49:23 | 1:37:14 PM] That's the other half of what I mean by just-in-time ontologies.
[04:49:26 | 1:37:18 PM] It's built when the job needs it, kept with its receipts, and reused when the next job needs the same thing.
[04:49:34 | 1:37:25 PM] And once you have those, you can make these things cheaper.
[04:49:37 | 1:37:28 PM] You can run them in parallel across datasets to scale up.
[04:49:41 | 1:37:32 PM] I close with an apology, right, that the answer is there is no ontology.
[04:49:46 | 1:37:37 PM] Not a universal one, at least.
[04:49:48 | 1:37:39 PM] There never was one.
[04:49:49 | 1:37:41 PM] The good news is that this makes every ontology and schema valid, as long as you can label and preserve the context around it.
[04:49:56 | 1:37:48 PM] And if we can harness this cheap intelligence that's starting to percolate through the world around us,
[04:50:01 | 1:37:53 PM] Around us, we're rapidly approaching a future where any information in any format is made as useful as it can be.
[04:50:07 | 1:37:59 PM] And at Perplexity, we're working as hard as we can to make that future a reality.
[04:50:12 | 1:38:04 PM] Thank you.
[04:50:30 | 1:38:22 PM] Hello, I'm Kartik, CTO at Perplexity.
[04:50:35 | 1:38:27 PM] In this presentation, I'll talk about building workflows that are both reliable and intelligent for finance, wealth, and insurance.
[04:50:51 | 1:38:43 PM] In regulated domains, workflows must be reliable enough to meet regulatory standards while still being intelligent enough to handle the real world in fields such as finance and wealth management.
[04:51:01 | 1:38:52 PM] This presents both a technical and a compliance issue.
[04:51:04 | 1:38:56 PM] Reliability and intelligence are not opposites.
[04:51:06 | 1:38:57 PM] It is up to you where you draw the boundary between them, and that is the point of this talk: deciding where that boundary lies.
[04:51:13 | 1:39:05 PM] For us, it's not merely a thought experiment, but a question that surfaces serious consequences.
[04:51:18 | 1:39:10 PM] For Perplexity, it's a wealth management roll-up.
[04:51:21 | 1:39:12 PM] We acquire running traditional wealth management firms, and we maximize their throughput and revenue with the help of AI.
[04:51:28 | 1:39:20 PM] Wealth management is a regulated industry, and that is where we build with AI in production.
[04:51:34 | 1:39:26 PM] Everything in this talk is grounded in building for those constraints.
[04:51:38 | 1:39:30 PM] Workflows in finance and wealth management come with four facts, and each of them pushes the architecture in the same direction.
[04:51:45 | 1:39:37 PM] First, they're complex, and they need runtime strategies as the process unfolds.
[04:51:50 | 1:39:42 PM] You can't script every path in advance.
[04:51:52 | 1:39:44 PM] Second, the data is sensitive, so you need a path to move these workflows entirely onto privately hosted models.
[04:51:59 | 1:39:51 PM] Third, in a highly regulated industry, a policy violation isn't a bug report; it has severe consequences.
[04:52:06 | 1:39:58 PM] So, fourth, execution has to be highly reliable and deterministic.
[04:52:11 | 1:40:03 PM] Inject intelligence only where runtime judgment is genuinely required, and minimize reliance on LLMs everywhere else.
[04:52:20 | 1:40:12 PM] AI is spreading through regulated industries, but there's still no consensus on an architecture that gives you high reliability with the least use of LLM intelligence.
[04:52:29 | 1:40:21 PM] Meanwhile, most of what developers hear from the big labs is how to burn more tokens.
[04:52:34 | 1:40:26 PM] But in a regulated industry, token maxing is the wrong goal.
[04:52:38 | 1:40:30 PM] These tasks are close to main.
[04:52:40 | 1:40:31 PM] You can lay them out in advance and build them into a massive state machine, and that machine needs only a sprinkle of intelligence to navigate it.
[04:52:47 | 1:40:39 PM] Most steps just follow the next edge.
[04:52:49 | 1:40:41 PM] Only at a few judgment points does the model pick a branch.
[04:52:53 | 1:40:45 PM] So the intelligent way to build is to use intelligence minimally and on purpose.
[04:53:01 | 1:40:53 PM] Let's make this concrete with a real wealth management workflow.
[04:53:05 | 1:40:57 PM] A wealth advisor turns to their assistant and says one sentence: Fill out the IRS W-9 for Mr.
[04:53:11 | 1:41:02 PM] Harper to a person.
[04:53:12 | 1:41:03 PM] That's a simple instruction.
[04:53:13 | 1:41:05 PM] Watch what it actually triggers when a human being executes it.
[04:53:17 | 1:41:09 PM] The task has complexities that go beyond what meets the eye.
[04:53:21 | 1:41:13 PM] First, the assistant finds Form W-9 from the firm's records or from the IRS website.
[04:53:26 | 1:41:18 PM] Then they look for Mr.
[04:53:28 | 1:41:19 PM] Harper in the system of record and find three Harper households.
[04:53:31 | 1:41:23 PM] So they call the advisor, Which Harper do you mean?
[04:53:34 | 1:41:26 PM] Only once that ambiguity is resolved do they move on to the form.
[04:53:38 | 1:41:30 PM] A lookup, an ambiguity, and a human in the loop, all in the first minute of a one-line task.
[04:53:49 | 1:41:41 PM] Filling a form sounds like data entry.
[04:53:51 | 1:41:43 PM] It isn't.
[04:53:52 | 1:41:44 PM] Every form is a small program.
[04:53:56 | 1:41:48 PM] A W-9 first decides who the taxpayer is, the person or the owner if it's a disregarded entity.
[04:54:02 | 1:41:54 PM] A foreign person stops right here because they need a W-8 instead.
[04:54:07 | 1:41:59 PM] Then how they are taxed.
[04:54:08 | 1:42:00 PM] Exactly one box on line 3A, and an LLC adds its letter.
[04:54:13 | 1:42:05 PM] That decides which name goes on line 1 and which on line 2, then whose number, an SSN or an EIN.
[04:54:21 | 1:42:13 PM] Never both.
[04:54:22 | 1:42:13 PM] Taken from a verified document, never from memory.
[04:54:25 | 1:42:17 PM] Exemption codes apply only to some entities and never to an S corporation.
[04:54:30 | 1:42:22 PM] And finally, who signs under penalties of perjury.
[04:54:33 | 1:42:25 PM] Each answer changes the next question, and the people involved only ever see three kinds of gates: a question, a document to collect, or a signature.
[04:54:43 | 1:42:35 PM] Now they start filling the form and realize the system of record is missing three of the values it needs.
[04:54:50 | 1:42:42 PM] They check the documents on file and the system of record again, still missing, so they start an email thread with the client asking for exactly those three values.
[04:55:00 | 1:42:52 PM] The task now depends on someone outside the firm on their timeline.
[04:55:05 | 1:42:57 PM] And now the workflow waits.
[04:55:07 | 1:42:58 PM] The request is with the client and all three values are still missing.
[04:55:10 | 1:43:02 PM] If the client doesn't reply within two days, the assistant follows up and brings it to the advisor at the daily standup.
[04:55:16 | 1:43:08 PM] If the client replies with only two of the three values, they follow up again for the missing one.
[04:55:21 | 1:43:13 PM] When all three arrive, they complete the form and write the new information back to the system of record, including the trail of how they obtained those values.
[04:55:36 | 1:43:28 PM] In this industry, how you know a value matters as much as the value itself.
[04:55:49 | 1:43:41 PM] Once the form is filled, it goes out for e-signature.
[04:55:52 | 1:43:44 PM] If the client doesn't sign within a day or two, the assistant nudges them again.
[04:55:57 | 1:43:49 PM] Once it's signed, they file it for the client, send the acknowledgement, and update the advisor at the next day standup.
[04:56:03 | 1:43:55 PM] One sentence from the advisor became a process that runs for days, crosses several systems, waits on two people, and loops back on itself more than once.
[04:56:13 | 1:44:05 PM] Look at what's inside that one sentence: ambiguity to resolve, data to gather, approvals, waits measured in days, follow-up loops, and an evidence trail at the end.
[04:56:43 | 1:44:35 PM] Workflow automation tools exist, but they rarely handle this real-world complexity and ambiguity.
[04:56:49 | 1:44:41 PM] A fixed flowchart breaks at the first which-harper, and the lack of a native system of record with an integration, and an agent that improvises its way through is exactly what a compliance team can't sign off on.
[04:57:01 | 1:44:53 PM] One breaks on ambiguity, the other can't be signed off.
[04:57:04 | 1:44:56 PM] Neither handles what's inside that sentence.
[04:57:07 | 1:44:59 PM] So what do we do about it?
[04:57:10 | 1:45:02 PM] The fashionable framing is more agency and better models.
[04:57:14 | 1:45:06 PM] Given agent the whole task and wait for the next model to make it reliable.
[04:57:19 | 1:45:11 PM] The reflexive answer, especially inside regulated firms, is the opposite: less agency, more rules.
[04:57:26 | 1:45:17 PM] Lock it down and hardcode every path.
[04:57:29 | 1:45:21 PM] Both are the wrong axis.
[04:57:32 | 1:45:24 PM] In regulated verticals, reliability comes from where you place the boundary between the two, between the parts that must be deterministic and the parts that genuinely need judgment.
[04:57:42 | 1:45:34 PM] Here's the principle: determinism governs controlled flow, evidence, and side effects.
[04:57:48 | 1:45:40 PM] What runs next, what we know, and how we know it, and anything that changes the world, like a record written, an email sent, or a form filed.
[04:58:02 | 1:45:54 PM] Intelligence provides interpretation and judgment: reading an ambiguous instruction, deciding which harper, understanding a client's reply.
[04:58:12 | 1:46:04 PM] The model answers a typed question, and the deterministic system decides what to do with the answer, and the interplay is recursive.
[04:58:20 | 1:46:12 PM] A judgment can open a new, smaller plan that's compiled, gated, and deterministic again.
[04:58:26 | 1:46:18 PM] You'll see that in a moment with follow-ups.
[04:58:28 | 1:46:20 PM] The boundary between the two is the design.
[04:58:31 | 1:46:23 PM] Here's how that works in the workflow engine we've built.
[04:58:36 | 1:46:28 PM] The request goes to a planner.
[04:58:44 | 1:46:36 PM] That is a model call, and its only job is translation.
[04:58:48 | 1:46:40 PM] It emits a typed semantic graph of intents, entities, facts, artifacts, events, and constraints, each grounded in the words of the request with any ambiguities it found.
[04:58:59 | 1:46:51 PM] Every node points back to the words it came from.
[04:59:03 | 1:46:55 PM] That graph goes to a compiler that never calls a model.
[04:59:06 | 1:46:58 PM] In eleven deterministic stages, it turns the graph into an execution DAG or it fails closed.
[04:59:12 | 1:47:04 PM] There are only three verdicts: valid, needs clarification, or refused.
[04:59:20 | 1:47:12 PM] Which Harper comes back as a question, not a guess.
[04:59:23 | 1:47:15 PM] The plan is compiled, immutable, and pinned by its hash.
[04:59:34 | 1:47:26 PM] The model translates.
[04:59:36 | 1:47:28 PM] The plan is compiled.
[04:59:37 | 1:47:29 PM] The compiler checks the plan against a grammar, the vocabulary of what the firm is allowed to do.
[04:59:43 | 1:47:35 PM] Forty-two typed action contracts across forms, documents, email, e-signature, calendar, and human steps.
[04:59:51 | 1:47:43 PM] Each action the planner asks for has to match a contract.
[04:59:55 | 1:47:47 PM] Here.
[05:00:00 | 1:47:52 PM] Here, Formfill finds its forms contract and logs in.
[05:00:04 | 1:47:55 PM] If the planner asks for an action that isn't in the grammar or wires one up wrong, the compiler refuses.
[05:00:11 | 1:48:03 PM] There are about forty ways to fail closed, from a cycle in the graph to an unsupported action, and the same contract digest is pinned in the engine, the backend, and the UI, so all three agree on what an action means.
[05:00:25 | 1:48:16 PM] That is what a closed domain buys you.
[05:00:27 | 1:48:18 PM] The model can only ask for things the firm already knows how to do safely.
[05:00:31 | 1:48:22 PM] Here is a compiled plan for a W-9 chase.
[05:00:34 | 1:48:26 PM] Send the client the form, wait for it to come back, check it, and file it.
[05:00:39 | 1:48:31 PM] Before anything runs, a person approves the plan itself.
[05:00:42 | 1:48:34 PM] Find the form, prepare it for the client to fill, render the PDF, and draft the email.
[05:00:48 | 1:48:40 PM] Drafting is a model call, so it is violet.
[05:00:55 | 1:48:47 PM] Sending is an action gate.
[05:00:57 | 1:48:49 PM] Nothing leaves the firm until a person approves that exact email.
[05:01:01 | 1:48:52 PM] Then the plan waits for a reply, and a judge steps in to read it.
[05:01:06 | 1:48:58 PM] The returned form is verified.
[05:01:09 | 1:49:00 PM] If it matches, it's archived behind another gate.
[05:01:12 | 1:49:04 PM] If it doesn't, the plan follows up.
[05:01:14 | 1:49:06 PM] Now look at the dashed steps.
[05:01:18 | 1:49:10 PM] Rendering the PDF, attaching it, judging the reply.
[05:01:22 | 1:49:14 PM] The planner never asked for them.
[05:01:24 | 1:49:16 PM] The grammar added them because the contracts require them.
[05:01:28 | 1:49:20 PM] In the story, waiting, approvals, and follow-ups were most of the work.
[05:01:33 | 1:49:25 PM] Here, they are nodes in the plan, not prompts.
[05:01:36 | 1:49:27 PM] A reply wait defaults to 72 hours, and an explicit deadline can be anything from a minute to 30 days.
[05:01:44 | 1:49:35 PM] When it passes, a rule decides what happens, not a model.
[05:01:48 | 1:49:39 PM] One approval covers the plan, and every external action, like sending an email or a signature request, has its own gate.
[05:01:56 | 1:49:47 PM] The approval is tied to a hash of the exact payload and is checked again right before sending.
[05:02:02 | 1:49:53 PM] When a client replies with only part of what we asked, the reply judge marks it partial.
[05:02:07 | 1:49:59 PM] That judgment is provisional.
[05:02:09 | 1:50:01 PM] The step stays blocked until a person confirms it.
[05:02:12 | 1:50:04 PM] A person confirms it, and the step unblocks.
[05:02:15 | 1:50:07 PM] Then the follow-up runs as a new child plan.
[05:02:18 | 1:50:09 PM] The approved parent is never changed, and there are at most five rounds.
[05:02:28 | 1:50:20 PM] Once a plan is approved, a state machine runs it.
[05:02:32 | 1:50:23 PM] It picks every step and records every result.
[05:02:35 | 1:50:26 PM] When a step needs judgment, it makes one fixed schema model call: compose an email, judge a reply, spot missing values, extract fields, verify a document.
[05:02:46 | 1:50:37 PM] The answer comes back typed, and the state machine decides what to do with it.
[05:02:50 | 1:50:42 PM] Side effects get a life cycle of their own: prepared, dispatching, succeeded, or, when the world doesn't answer cleanly, outcome unknown and manual review.
[05:03:01 | 1:50:52 PM] There are no automatic retries.
[05:03:03 | 1:50:54 PM] A chat message can approve a step or answer a question.
[05:03:07 | 1:50:58 PM] It can't change an already approved plan.
[05:03:09 | 1:51:01 PM] The model steers; it never drives.
[05:03:17 | 1:51:08 PM] Now look at what is left for the model to do.
[05:03:20 | 1:51:11 PM] Outside the planner, the judgments are small and typed.
[05:03:24 | 1:51:15 PM] Is this reply complete?
[05:03:25 | 1:51:17 PM] Does this document match?
[05:03:27 | 1:51:19 PM] Which field is which?
[05:03:28 | 1:51:20 PM] They don't need frontier intelligence.
[05:03:30 | 1:51:22 PM] A fast small model, the flash tier, can handle them.
[05:03:34 | 1:51:26 PM] In this illustrative run of 20 decisions, 19 go to the flash tier and one goes to the frontier.
[05:03:41 | 1:51:32 PM] That is why we designed for about 95 percent of model decisions in a workflow never needing a frontier model, and the flash tier can run on hardware you control.
[05:03:52 | 1:51:43 PM] Only the genuinely hard cases go to a frontier model.
[05:03:56 | 1:51:48 PM] And the 5 percent is not a permanent tax, because every judgment is typed and logged, and the provisional ones are confirmed or rejected by a person.
[05:04:06 | 1:51:58 PM] Each frontier decision produces eval-grade distribution real training data by construction.
[05:04:13 | 1:52:05 PM] That data can post-train the flash tier.
[05:04:17 | 1:52:08 PM] Logging and evals exist today.
[05:04:19 | 1:52:11 PM] The training loop is next.
[05:04:21 | 1:52:12 PM] So the frontier share shrinks, release over release, until even the hard cases run locally.
[05:04:26 | 1:52:18 PM] Remember the requirement we started with, because data is sensitive, you need a path to move workflows entirely to privately hosted LLMs.
[05:04:43 | 1:52:34 PM] So can this design really get there?
[05:04:45 | 1:52:37 PM] Take one typed call from the Harper Bourbonine plan.
[05:04:49 | 1:52:40 PM] Every model call is small, typed, and checked against a schema.
[05:04:53 | 1:52:44 PM] So pointing it at a privately hosted model is a configuration change, not a rewrite.
[05:04:58 | 1:52:50 PM] One line changes, and the same answer comes back.
[05:05:02 | 1:52:53 PM] Every other call has that same small typed shape, so the same change applies to almost all of them.
[05:05:09 | 1:53:00 PM] That is how about 95 percent local inference becomes viable, as an architectural consequence, not a policy promise.
[05:05:16 | 1:53:07 PM] That is the path that sensitive data demands, and compliance risk goes down as an engineering roadmap, release by release.
[05:05:25 | 1:53:16 PM] So if you remember one thing, don't ask whether your system should have more agency or less.
[05:05:30 | 1:53:22 PM] Ask where the boundary is.
[05:05:33 | 1:53:24 PM] Let determinism govern control flow, evidence, and side effects.
[05:05:37 | 1:53:29 PM] Let intelligence handle interpretation and judgment.
[05:05:41 | 1:53:32 PM] At typed points, you can inspect and use every judgment you log to need less of it next time.
[05:05:47 | 1:53:39 PM] Ask where the boundary is.
[05:05:48 | 1:53:40 PM] Thank you.
[05:05:50 | 1:53:41 PM] I'm Karthik, CTO at Perpetual.
[05:05:53 | 1:53:44 PM] If you're building AI into regulated work, I'd love to compare notes.
[05:06:20 | 1:54:11 PM] Hello everyone, and welcome.
[05:06:22 | 1:54:13 PM] My name is Edu, and alongside Javi, we represent the AI platform experience team at Flywire.
[05:06:27 | 1:54:19 PM] Our core mission is to build practical agentic infrastructure that empowers our software engineers while following our established engineering standards and practices.
[05:06:37 | 1:54:28 PM] Today, we'll share how structure workflow automation delivers real enterprise value, ensuring control, safety, and reliability across our development process.
[05:06:48 | 1:54:40 PM] Before we dive into the deep technical details of our AI platform, let us give you some essential context about Flywire.
[05:06:56 | 1:54:48 PM] Flywire is built to process the world's most complex payments across global industries like education, healthcare, travel, and business services.
[05:07:06 | 1:54:57 PM] Today, we serve over 5,000 clients across more than 240 countries around the world.
[05:07:13 | 1:55:04 PM] Because we process high-value international transactions, regulatory compliance, privacy, and security are not optional add-ons.
[05:07:21 | 1:55:12 PM] They are core requirements of our business.
[05:07:24 | 1:55:15 PM] We operate under strict compliance frameworks like PCI, DSS, and SOC 2.
[05:07:30 | 1:55:22 PM] This means that customer data, personal identification, and payment details must remain completely safe.
[05:07:37 | 1:55:29 PM] We cannot simply take sensitive context and pass it to third-party services without strict governance and architectural boundaries.
[05:07:45 | 1:55:36 PM] To give you an idea of our engineering organization, we have around 400 software engineers distributed globally.
[05:07:53 | 1:55:45 PM] Across our teams, we maintain diverse technology stacks, including Java, Ruby, Go, Python, .
[05:08:01 | 1:55:52 PM] NET, and PHP.
[05:08:03 | 1:55:54 PM] Almost everything we build and run is deployed on Victoria, our internal platform as a service that operates on top of GitLab and AWS infrastructure.
[05:08:12 | 1:56:04 PM] This brings us to Orbit, our on-call killer.
[05:08:15 | 1:56:07 PM] Orbit is an internal platform that eliminates daily engineering is call only work every day.
[05:08:22 | 1:56:13 PM] It also keeps the codebase that the other AI services and tools we use across Flywire can start workflows directly.
[05:08:28 | 1:56:20 PM] For example, an engineer will be able to ask Claude in Slack use cases, send messages, can start workflows directly.
[05:08:38 | 1:56:30 PM] Victoria, it starts and shares the main request with scorecards, measures how.
[05:08:58 | 1:56:50 PM] Sorry, I'm good.
[05:09:04 | 1:56:55 PM] Hey everyone, I'm Akshat, CTO of Modal, and I'm going to talk about a really need from their infrastructure.
[05:09:14 | 1:57:06 PM] So I'm told this audience is very finance adjacent, so I thought I'd talk about what if every cell in a spreadsheet could be backed by an agent.
[05:09:28 | 1:57:20 PM] And imagine you're a financial analyst at a fund.
[05:09:36 | 1:57:28 PM] You want to run a complex analysis on every company in your portfolio.
[05:09:42 | 1:57:34 PM] Normally in the past, this would take days.
[05:09:46 | 1:57:38 PM] You'd have to connect every portfolio company, look at their data sources, run some Python for each of them.
[05:09:54 | 1:57:46 PM] And now obviously with agents, this should be much easier.
[05:09:59 | 1:57:51 PM] Well, actually, one of our customers, Hebbia, built something that's exactly this.
[05:10:06 | 1:57:57 PM] You can go in right now in their product.
[05:10:10 | 1:58:01 PM] You have a spreadsheet, and you can run a query where literally every cell is backed by a different agent.
[05:10:21 | 1:58:12 PM] And I wanted to talk about what does building this really look like?
[05:10:27 | 1:58:19 PM] Well, first, every agent is backed by a modal sandbox.
[05:10:34 | 1:58:26 PM] So a sandbox is a secure environment for running untrusted code.
[05:10:42 | 1:58:34 PM] And it used to be that every sandbox was one-to-one with a container or microVM.
[05:10:50 | 1:58:41 PM] That's actually no longer the case.
[05:10:52 | 1:58:43 PM] Today, actually, Modal has this feature where you can run multiple containers or microVMs inside a sandbox.
[05:11:00 | 1:58:52 PM] And you actually need to do that for doing something like this, where in this architecture, you run the harness.
[05:11:08 | 1:59:00 PM] The harness is the agent loop that does things like running the, calling the model API for inference, running the tool calls, and then looping over it.
[05:11:19 | 1:59:11 PM] You want to separate that from the place where the tool calls actually run for security and isolation and a bunch of other things.
[05:11:27 | 1:59:19 PM] So you have the sandbox that's running multiple containers, including a sidecar.
[05:11:33 | 1:59:25 PM] You also want shared storage because you want your agents to be able to talk to each other.
[05:11:39 | 1:59:30 PM] And it's up to you how you stripe it.
[05:11:41 | 1:59:33 PM] Like maybe you have every row gets the same volume, and agents in that row in the spreadsheet can collaborate.
[05:11:50 | 1:59:42 PM] And you also want to share storage between your main container and the sidecar for some cases.
[05:11:55 | 1:59:46 PM] And finally, you need all of this to spin up really, really fast because your spreadsheet can have lots of cells.
[05:12:02 | 1:59:53 PM] If someone runs a query, you want to launch thousands of agents, and then you want to spin them back down when it's over.
[05:12:09 | 2:00:01 PM] So before I talk more about that, I just wanted to take a quick aside to talk about what is Modal.
[05:12:17 | 2:00:08 PM] Modal is a platform of primitives that is built for AI applications.
[05:12:23 | 2:00:14 PM] So we've basically built this platform from scratch.
[05:12:27 | 2:00:18 PM] We've built our own file systems, the scheduling, and the runtime to give you really great performance and DevEx for use cases like inference, including LLM inference, sandboxes, training, and functions, running a lot of batch processing and whatnot.
[05:12:43 | 2:00:35 PM] And today in particular, I'm going to talk about sandboxes, what this primitive is, and how it's evolving.
[05:12:49 | 2:00:40 PM] So if you want to build something like this, or even further, and we'll talk more about what that means, what are the primitives you need for that?
[05:12:57 | 2:00:49 PM] So the first thing is, if you're building an agent, you need a workspace.
[05:13:01 | 2:00:53 PM] And I have some examples from some of our current customers.
[05:13:05 | 2:00:57 PM] You might have heard of Ramp Inspect.
[05:13:07 | 2:00:59 PM] Ramp Inspect is Ramp's internal coding agent that I think at this point pushes almost every single PR at Ramp.
[05:13:17 | 2:01:08 PM] And if you're building a coding agent, you need your repo, your GitHub repo.
[05:13:22 | 2:01:14 PM] You need your dependencies.
[05:13:24 | 2:01:16 PM] You need your dev services, all in the same workspace for each agent.
[05:13:32 | 2:01:23 PM] Another example is Basis.
[05:13:35 | 2:01:27 PM] What it looks like is your documents might arrive, your agent is then triggered to work on them, but then it's waiting for a response from the accountant, and you don't know how long this could take.
[05:13:47 | 2:01:38 PM] It could take many days.
[05:13:49 | 2:01:41 PM] When you want to persist this state over time memory, your usage is going to change.
[05:13:56 | 2:01:47 PM] And in the second chart, you can see usage per sandbox, and there's definitely some consistent trends, but it's all over the place.
[05:14:04 | 2:01:56 PM] So if you were provisioning this, it doesn't make sense, and then reliably get them when the sandbox needs them, and only pay for them for that duration.
[05:14:16 | 2:02:07 PM] The other interesting emerging thing is agents need a lot more cloud science, where pre-process some data on CPUs, or spin up GPUs for running pre-process some data on CPUs, or spin up GPUs for running a scientific model, it will offload that to a model sandbox.
[05:14:42 | 2:02:34 PM] And we're seeing this show up RSI about what happens when you give an agent sandboxes to hill climb.
[05:14:51 | 2:02:43 PM] The next emerging thing is agents are collaborating a lot more, and that means that you share a file system with your sub-agent.
[05:15:03 | 2:02:55 PM] You share file system.
[05:15:05 | 2:02:57 PM] The next emerging thing is agents are collaborating a lot more, and that means that you share a file systems and files with your human, where you're all collaborating on the same thing.
[05:15:20 | 2:03:11 PM] And this needs file systems that are fast, have consistency, and devex you can reason about, something we're working on with Modal Volumes.
[05:15:31 | 2:03:22 PM] Related thing is we're seeing a lot more self-improvement.
[05:15:35 | 2:03:26 PM] So agents will save and update memory.
[05:15:37 | 2:03:29 PM] They'll run background tasks, which is now called dreaming, to update this memory over time.
[05:15:44 | 2:03:35 PM] And actually, this also just looks like files in a file system.
[05:15:48 | 2:03:39 PM] But again, you want really great performance from this file system.
[05:15:56 | 2:03:48 PM] And the scary thing about agents is they can mess up, and they don't really know when they might leak your sensitive data to a German forum or something.
[05:16:10 | 2:04:02 PM] So you need to have a lot of control over what they can and cannot do.
[05:16:14 | 2:04:06 PM] And you need things like controlling what IPs can even talk to the agent, how do you authenticate it, what domains can it talk to, and also if you're using credentials for talking to services, basically you want to inject them in a way that the agent cannot actually see them and then exfiltrate them somewhere later.
[05:16:38 | 2:04:29 PM] And the interesting evolution of this is we've realized that domain-related allow lists are actually not enough.
[05:16:46 | 2:04:38 PM] A lot of our users actually want very specific control over even, like, what paths can I talk to on, let's say, Datadog or GitHub.
[05:16:56 | 2:04:47 PM] Like maybe I want to reason about specific operations that the agent is doing.
[05:17:00 | 2:04:52 PM] And going back to sidecars, we've seen this emerging as a pattern where users actually write their own lightweight proxy that has custom rules about what exactly it can do, and Ramp is another example of a company that's been using this successfully.
[05:17:19 | 2:05:11 PM] And the final underrated thing is it's really important to have really great observability.
[05:17:25 | 2:05:16 PM] So going back to the example of auto research and an agent doing a lot of training, what happens when the training run fails?
[05:17:33 | 2:05:25 PM] You want your agent to be able to easily look at the logs of the failure, reason about what happened, and do another iteration with a different set of parameters.
[05:17:44 | 2:05:36 PM] And while training is running, you want it to be able to look at the metrics.
[05:17:48 | 2:05:39 PM] You want to look at GPU utilization and make sure it's not stalled.
[05:17:51 | 2:05:42 PM] Maybe you want to look at the budget and make sure you're not spending too much in your sandbox.
[05:17:57 | 2:05:49 PM] And obviously all of this is really important for humans, but as agents are driving a lot more compute, we're spending a lot of time exposing all of this to the agents themselves so they can reason about all of this.
[05:18:10 | 2:06:02 PM] All right, I think we know what we need.
[05:18:14 | 2:06:05 PM] Why don't we have Astra build us an agent platform?
[05:18:19 | 2:06:10 PM] Well, I don't think it's a good idea.
[05:18:20 | 2:06:12 PM] I don't think you should vibe code a sandbox platform.
[05:18:24 | 2:06:15 PM] And there's three main reasons for that.
[05:18:26 | 2:06:17 PM] Number one is reliability.
[05:18:27 | 2:06:19 PM] I think we're all painfully aware how hard it is to get right.
[05:18:33 | 2:06:24 PM] Certain websites we use every day keep going down.
[05:18:37 | 2:06:29 PM] And the reason for that is even with AI, it's actually really hard to reason about the feedback loop of, like, what happens in the case of this tail event when the system breaks.
[05:18:49 | 2:06:40 PM] And this is why you need to be very careful when building systems.
[05:18:52 | 2:06:44 PM] Security is another one.
[05:18:54 | 2:06:45 PM] You could vibe code a sandbox platform, but who is going to do all the work to, like, continually reason about the security boundaries and make sure it's defensible in an age when everything is...
[05:19:06 | 2:06:58 PM] Evolving very fast.
[05:19:09 | 2:07:01 PM] And finally, scale.
[05:19:11 | 2:07:02 PM] We have a blog post about how we scale to millions of sandboxes, which involves a lot of very interesting engineering design and reasoning about systems.
[05:19:20 | 2:07:11 PM] And this is, again, something that you kind of don't want to leave up to a vibe-coded platform, because when you get to scale, you want it to work.
[05:19:30 | 2:07:21 PM] And on that point, we're actually seeing massive scale for a lot of things I mentioned.
[05:19:35 | 2:07:27 PM] So, for example, for the snapshots I mentioned, it's growing quite fast.
[05:19:40 | 2:07:31 PM] We're seeing 20 million snapshots a week.
[05:19:43 | 2:07:35 PM] We're processing about 8 petabytes of data a day for each of these snapshots.
[05:19:51 | 2:07:42 PM] And our users are creating almost 2.
[05:19:54 | 2:07:45 PM] 6 million volumes a week, and all of this is growing super fast.
[05:19:59 | 2:07:51 PM] And just to take a
[05:20:01 | 2:07:52 PM] To take a customer workload for a personal assistant, you need to create 10,000 sandboxes a second.
[05:20:08 | 2:07:59 PM] You need to run almost a million sandboxes.
[05:20:12 | 2:08:03 PM] And they're not going to last very long.
[05:20:14 | 2:08:05 PM] They'll just last for like two or three minutes.
[05:20:16 | 2:08:08 PM] But when they come up, you want them to be interactive in less than a second.
[05:20:21 | 2:08:12 PM] That's what this workload really demands.
[05:20:26 | 2:08:17 PM] And the other interesting thing on scale is you actually cannot get all this scale from a single cloud platform.
[05:20:33 | 2:08:25 PM] The world is actually getting crunched on CPUs as well, not just GPUs.
[05:20:37 | 2:08:29 PM] So one thing we spend a lot of time doing is actually aggregating cloud capacity from a bunch of hyperscalers and neoclouds.
[05:20:45 | 2:08:36 PM] So our users have access to CPU capacity across the world when they need it, but we cannot rely on one cloud provider to do that.
[05:20:53 | 2:08:45 PM] Okay, so where is all this going?
[05:20:56 | 2:08:47 PM] I hinted at this earlier, but the harnesses are really good at making use of dynamic environments.
[05:21:04 | 2:08:55 PM] And what this is leading to is a lot of separation of the brains, which is the harness, from the hands, which is the sandbox or the runtime where stuff is running.
[05:21:15 | 2:09:07 PM] And what this means, I have an example here, is the harnesses are going to be able to spin up environments based on what they need right now.
[05:21:26 | 2:09:18 PM] They're good at snapshotting them and keeping them around as artifacts that they need later, and again adjusting all of this as necessary.
[05:21:36 | 2:09:28 PM] So I think this points at an interesting evolution of the pets to cattle analogy we're all familiar with.
[05:21:46 | 2:09:37 PM] To recap.
[05:21:47 | 2:09:38 PM] In the olden days, people thought of services like pets.
[05:21:52 | 2:09:43 PM] Each one was bespoke.
[05:21:53 | 2:09:44 PM] You had to manage it.
[05:21:55 | 2:09:46 PM] You had to reason about this individual deployment specifically.
[05:22:00 | 2:09:51 PM] And then over time, with containerization and Kubernetes, people started to think about it as homogeneous templates of these servers are all the same.
[05:22:12 | 2:10:04 PM] You can scale them up and down.
[05:22:14 | 2:10:05 PM] If one of them fails, it's not an issue because our system can heal from that.
[05:22:19 | 2:10:10 PM] And I think this is where a lot of people deploying agents are today.
[05:22:23 | 2:10:14 PM] They're kind of using these homogeneous environments and scaling up these agents.
[05:22:27 | 2:10:18 PM] But I think that's really limiting because the models are so good at reasoning about dynamic environments, snapshotting, creating lots of environments when needed and working across them.
[05:22:38 | 2:10:30 PM] So what does the new world look like?
[05:22:42 | 2:10:34 PM] One analogy here is it kind of looks like an ocean of microbes, of all these organisms that are self-evolving and working with each other.
[05:22:52 | 2:10:43 PM] And credit to Swyx for the analogy here.
[05:22:56 | 2:10:47 PM] But one thing I'm really excited about is as you give agents these really rock-solid primitives for compute and storage and networking, they will be able to actually do a lot more by doing the stuff I talked about, like spinning up lots of environments, working with each other, and being very dynamic.
[05:23:16 | 2:11:07 PM] So yeah, I and us at Modal really think that great primitives let your agents do more.
[05:23:24 | 2:11:15 PM] And yeah, if you're interested in talking about this more, reach out to us.
[05:23:27 | 2:11:19 PM] Thank you.
[05:33:58 | 2:21:49 PM] I'm going to talk a little bit about going from beyond the model card, how evaluations can be used to measure this jagged frontier, with a special focus on finance for this audience as well.
[05:34:07 | 2:21:59 PM] Yeah, so first off, talking about model cards themselves, we've built some of the most important benchmarks over the last couple of years that the major foundation model labs have included in their model releases.
[05:34:18 | 2:22:09 PM] So people, I think, are familiar with artifacts like this.
[05:34:21 | 2:22:12 PM] Last week we have Sundar talking about our Vals index on stage, and then even just yesterday, Muse Models citing our finance agent benchmark.
[05:34:29 | 2:22:21 PM] It keeps our lives interesting to have to keep re-updating these slides as new models come out.
[05:34:34 | 2:22:25 PM] I had to double-check level numbers.
[05:34:35 | 2:22:27 PM] You can get a sense of how capable a model is for valuable work, but that is actually driving value for a lot of companies.
[05:34:43 | 2:22:34 PM] And I think two interesting stats that jump out at me: the groups that are able to actually track AI cost and spend are much, much more likely to have inferior performance.
[05:34:50 | 2:22:42 PM] But we also have, from the X-axis marks again, it's not immediately obvious which is number one or what will be consistently two or three.
[05:34:57 | 2:22:48 PM] On the X-axis, you've got cost, in particular it's cost per task, not just token in Excel models.
[05:35:01 | 2:22:53 PM] You've got cost, in particular it's cost per task, not just token in Excel models, that are core to the results may be intuitive, unintuitive.
[05:35:08 | 2:23:00 PM] When we actually build benchmarks, one of the most important things that we need to look at is the metric we use to report accuracy.
[05:35:14 | 2:23:06 PM] And so you have a different takeaway if you pick a different metric.
[05:35:17 | 2:23:09 PM] A lot of benchmarks deal with partial credit, and so what this is answering is, in expectation, if I were to give a question or task to a model, what percentage of the points would I expect to see satisfied by the work output of that model, especially compared to humans?
[05:35:32 | 2:23:24 PM] And then the fully correct answers metric is more looking at, of the percentage of questions that I give to models, what percentage of them will come back perfect?
[05:35:41 | 2:23:32 PM] And that's a very different metric.
[05:35:43 | 2:23:34 PM] It may mean that a model is very good at producing an incremental response that you can work with to build a better response.
[05:35:49 | 2:23:41 PM] But if you were to pass this directly to a client, it would be a coin toss of whether it was meeting all the criteria that you have.
[05:35:57 | 2:23:48 PM] And so picking the right metric is very important to accurately representing the performance of a model and actually forming good intuition of what it can do.
[05:36:05 | 2:23:56 PM] There's another three components that we think a lot about.
[05:36:07 | 2:23:59 PM] So validity: are you actually evaluating what's going on in the real world?
[05:36:11 | 2:24:02 PM] That means, are the questions or tasks reflective of actual work going on, or are they contrived?
[05:36:15 | 2:24:07 PM] And then are the rubrics actually describing what we're looking for, or the standard of excellence we want to see?
[05:36:20 | 2:24:11 PM] Reliability: this is usually a function of the number of tasks or the sample count.
[05:36:24 | 2:24:16 PM] A lot of companies, they have maybe five or six samples, and they're kind of vibe-checking new models or products as they get access.
[05:36:31 | 2:24:22 PM] But it's actually really important to have a rigorous approach and have enough tasks and samples to make sure your repeated runs actually show consistent results.
[05:36:39 | 2:24:30 PM] And then last is discriminability.
[05:36:40 | 2:24:31 PM] So we don't think it's that valuable to have benchmarks where all models score 100% or all models score 0%.
[05:36:46 | 2:24:37 PM] Ideally, we can actually discriminate between models and see what the frontier looks like.
[05:36:50 | 2:24:42 PM] In particular, we also want to make sure we're building benchmarks forward-looking.
[05:36:54 | 2:24:45 PM] So what are the new set of tasks that are even more ambitious than what models can do today to make sure that there's room at the frontier for us to continue to see model progress as they get better?
[05:37:04 | 2:24:56 PM] Okay, so, and then some of the high-level problems that we've seen, and I think others can and do run into.
[05:37:12 | 2:25:03 PM] The first is that agents solve the test, not the problem.
[05:37:14 | 2:25:06 PM] So this is talked a lot about as reward hacking, and we've seen a lot of instances where we'll have a sandbox and models will be run with our model proxy, and sometimes they may try and actually call other models within that proxy to escape the sandbox or make use of the internet.
[05:37:30 | 2:25:22 PM] So it's really important to build the containers in a way that you're actually testing for what matters.
[05:37:36 | 2:25:27 PM] Can they do the task at hand, or are they actually leveraging other tools or maybe even other models to get there?
[05:37:41 | 2:25:33 PM] We've also seen this issue in finance in particular, where a lot of the times evals are looking at a set of rubrics or items that we want to see included in the response.
[05:37:50 | 2:25:41 PM] And so models can hedge and give three possible answers, which has a higher chance of satisfying all the criteria.
[05:37:56 | 2:25:48 PM] But in practice, that's way too much.
[05:37:59 | 2:25:51 PM] A person does not want to consider three different answers.
[05:38:01 | 2:25:53 PM] They just want to get the first answer and have it be right.
[05:38:05 | 2:25:56 PM] And so.
[05:38:05 | 2:25:57 PM] The goal here is to try and build evals that are reflective of the actual work people are doing and the work output they want to see, not to build these contrived evals that the models can actually game.
[05:38:16 | 2:26:07 PM] The second is, I think a lot of people are starting to see that the cost of software is coming down and it's actually very, very easy to produce code.
[05:38:24 | 2:26:16 PM] But unfortunately, we still see in practice that running evals is incredibly challenging, especially from an infrastructure side of things.
[05:38:31 | 2:26:22 PM] And in particular, as we get to longer-running agents, it means that it's really important to have infrastructure that can stay consistent over a long period of time and then, if interrupted, can be resumed and respun back up.
[05:38:42 | 2:26:34 PM] We have, I think, just recently crossed six trillion tokens just in evaluation.
[05:38:47 | 2:26:38 PM] So we run a considerable set of evals, and we run everything in as high a degree of parallel as possible.
[05:38:53 | 2:26:45 PM] So I think this has really been load tested, but I think other people are going to run into this even on a much smaller scale.
[05:39:00 | 2:26:51 PM] And the last is that I think a lot of the existing benchmarks, they deal with a single prompt, single response, but in practice, everything is multi-turn.
[05:39:08 | 2:26:59 PM] You have an initial spec which you think covers everything, but then you get questions back or you have additional feedback once something's built, and then it takes more of this iteration to actually drive to the end output.
[05:39:18 | 2:27:09 PM] And so I think benchmarks and evals need to actually cover this multi-turn component.
[05:39:21 | 2:27:13 PM] That's not going to go away.
[05:39:23 | 2:27:14 PM] So to look at a case study in particular, when we looked at our team, we did a little token maxing experiment where we got free access to some tools and just gave it to all the engineers, and they really made use of these unlimited tokens.
[05:39:36 | 2:27:27 PM] And if we actually look back for that month, we spent $1.
[05:39:40 | 2:27:31 PM] 5 million worth of tokens.
[05:39:41 | 2:27:33 PM] This is like a team of, I think, 10 or 12.
[05:39:43 | 2:27:35 PM] So it's roughly 10 times the amount we were spending on salary for tokens in that month.
[05:39:47 | 2:27:39 PM] And so that was pretty insane, but we saw great output.
[05:39:50 | 2:27:41 PM] And so our goal was to try and maintain the same level of output across all these engineers, but massively cut down on cost.
[05:39:57 | 2:27:48 PM] And really our solution to do that was, of course, to build an eval.
[05:40:01 | 2:27:52 PM] We built a bunch of tools.
[05:40:02 | 2:27:53 PM] of tools internally and then have now exposed this as a product called Val Smith.
[05:40:06 | 2:27:58 PM] And so this is what we're doing in coding, and I think it's, again, a sign of what's going to come in other parts of knowledge work.
[05:40:12 | 2:28:03 PM] So what we were able to do is look at the GitHub repo as a centralized way of seeing what work has already been done and what work is continuing to happen.
[05:40:21 | 2:28:12 PM] And in particular, GitHub repos are comprised of PRs, or pull requests, which have a GitHub issue and a resolution.
[05:40:26 | 2:28:18 PM] And so what we can do is unwind the clock and give those same tasks to agents to see if they could have equivalently done the work of humans.
[05:40:34 | 2:28:25 PM] And in doing that, we found a much clearer understanding of which models were overkill, were way too expensive and did not need to be used, and then which ones were actually capable of getting the task done.
[05:40:43 | 2:28:35 PM] And I think, again, this is another place where the intuitions that a lot of people have may not be what's actually borne out in practice.
[05:40:49 | 2:28:40 PM] So I think you may see, oh, we're using a lot of closed-source models.
[05:40:52 | 2:28:43 PM] We should try and cut costs and use our own self-hosted open-source model.
[05:40:55 | 2:28:47 PM] You can see the comparison here.
[05:40:57 | 2:28:48 PM] We have between GPT-5.
[05:40:58 | 2:28:50 PM] 6-Sol and Kimi K3, and we see that 5.
[05:41:01 | 2:28:52 PM] 6-Sol is better.
[05:41:03 | 2:28:54 PM] It's going 2% better on this internal eval.
[05:41:04 | 2:28:56 PM] It's also considerably cheaper than hosting it through a very inference-optimized stack.
[05:41:10 | 2:29:02 PM] So it's $2.
[05:41:11 | 2:29:03 PM] 50 instead of $11, and it's faster half the time.
[05:41:14 | 2:29:06 PM] And so there's no real reason why this kind of intuitive sense of using open source would be a legitimate way to drive down costs.
[05:41:21 | 2:29:12 PM] And so this has resulted in two main differences.
[05:41:23 | 2:29:15 PM] One, we can actually figure out which tools we're going to procure, what the usage limits of those things should be across the organization.
[05:41:30 | 2:29:22 PM] But then also, we can give recommendations for engineers and say, we think that for this GitHub issue, you should actually use this particular coding tool with this model.
[05:41:40 | 2:29:31 PM] And this is able to drive the cost down considerably.
[05:41:42 | 2:29:34 PM] I think we're spending 90% less, but still able to get the same output.
[05:41:48 | 2:29:39 PM] I think the question I would have for you all, we're continuing to expand this approach and take this model of coding to other domains, knowledge work, legal, finance, things like that.
[05:41:57 | 2:29:48 PM] But the key question is— Where are you tracking the history of work that has already been done by that firm?
[05:42:02 | 2:29:53 PM] Some of these law firms have been around for like a hundred years.
[05:42:05 | 2:29:56 PM] And so where is that, I think, quality of the organization stored?
[05:42:08 | 2:30:00 PM] Where are you tracking the standard of excellence?
[05:42:11 | 2:30:02 PM] And so that today may exist in places like email from the history of responses that people have had with their clients.
[05:42:17 | 2:30:08 PM] It may exist in SharePoints, it may exist in Databricks dumps.
[05:42:20 | 2:30:11 PM] But I think this is the key treasure trove that a lot of companies have and don't realize will be the major unlock for evals and then the unlock for AI adoption more systematically.
[05:42:36 | 2:30:27 PM] Once these evals are constructed, they can enable adoption to happen.
[05:42:40 | 2:30:31 PM] But we've also seen that there's more advantageous ways that they can be used.
[05:42:43 | 2:30:35 PM] So first is right-sizing.
[05:42:45 | 2:30:37 PM] So rather than just token maximizing, how do you figure out what the right usage limit should be across the organization?
[05:42:52 | 2:30:43 PM] Negotiation.
[05:42:53 | 2:30:44 PM] Once you realize you have actual leverage, you can take that to the conversation you have in bulk pricing.
[05:42:59 | 2:30:50 PM] Then routing.
[05:42:59 | 2:30:51 PM] This is becoming a core primitive in a lot of AI products, but can also be done by users directly.
[05:43:06 | 2:30:58 PM] And so they can build intelligent routers that actually figure out the right model to use.
[05:43:11 | 2:31:02 PM] And then fine-tuning or post-training.
[05:43:13 | 2:31:05 PM] This can be the most reliable way for you to actually mint the tasks and then have an external eval set to make sure that this approach is working.
[05:43:22 | 2:31:14 PM] The last thought I'd leave you with is I think for a lot of companies, they have a competitive advantage that has existed in the heads of employees through things like institutional knowledge.
[05:43:32 | 2:31:23 PM] And what evals allow you to do is actually codify the competitive advantage and put that down in words or in scripts, in language.
[05:43:38 | 2:31:30 PM] And that will actually be the biggest unlock for making sure that a company succeeds in the agentic era.
[05:43:44 | 2:31:35 PM] Okay, that's all.
[05:43:46 | 2:31:37 PM] Thanks, everyone.
[05:55:58 | 2:43:50 PM] Kepler, excited to have Jack Woodruff with me.
[05:56:00 | 2:43:52 PM] Quickly introduce yourself.
[05:56:01 | 2:43:53 PM] Yeah, hi, I'm Jack Woodruff.
[05:56:03 | 2:43:55 PM] I am the founder and former CIO of Candlestick Capital Management, a long-short equity hedge fund based in Greenwich, Connecticut.
[05:56:11 | 2:44:02 PM] Before founding Candlestick, I was a partner and portfolio manager at Surveyor Capital, which is a division of Citadel.
[05:56:22 | 2:44:13 PM] Very cool.
[05:56:23 | 2:44:14 PM] Thanks, Jack.
[05:56:24 | 2:44:15 PM] So the reason we did this this way is we've had this conversation before, and I think this is one of the most enlightening folks to chat with, given that Jack has spent his career picking stocks in an environment that's changing more than it ever was before.
[05:56:38 | 2:44:29 PM] So we'll treat this really as a fireside chat.
[05:56:41 | 2:44:32 PM] So, Jack, paint the picture for us.
[05:56:44 | 2:44:35 PM] What does fundamental investing look like in the age of AI, say five years from now?
[05:56:49 | 2:44:40 PM] Well, it's hard to say.
[05:56:50 | 2:44:42 PM] Like, long-term stock picking, I don't believe is really going to change much at all.
[05:56:57 | 2:44:48 PM] There's always been a mosaic, and there's always been alpha creation by finding a divergent view.
[05:57:04 | 2:44:55 PM] So that isn't going to change at all.
[05:57:07 | 2:44:58 PM] I think that that still will stay the same.
[05:57:09 | 2:45:00 PM] Now, how people synthesize all of the information and where table stakes go to in terms of, like, what everybody has, and then how you synthesize that data is going to change completely.
[05:57:23 | 2:45:14 PM] The roles, the traditional roles of, say, a portfolio manager or an analyst are going to be completely thrown upon their heads.
[05:57:31 | 2:45:22 PM] And I still think it's, like, too early to say what that's all going to look like, as these tools are just so new, especially to the users.
[05:57:42 | 2:45:33 PM] You've got a lot of people doing a few things, but it's just not clear to me.
[05:57:46 | 2:45:38 PM] That it's like we're there and, oh my gosh, it's going to be these new things.
[05:57:51 | 2:45:43 PM] Like, we have a bunch of other things to kind of talk about, but I think it's going to be super fascinating to watch how it all plays out.
[05:58:01 | 2:45:52 PM] Very cool.
[05:58:02 | 2:45:53 PM] So at Citadel, you had 18 people covering 400 stocks, and at Candlestick, you had 30 stock pickers.
[05:58:08 | 2:45:59 PM] Could one great analyst cover all 400 by 2030?
[05:58:12 | 2:46:03 PM] So the biggest issue is humans are still the bottleneck.
[05:58:16 | 2:46:08 PM] I mean, like, at the end of the day, you have to get the information into your head.
[05:58:24 | 2:46:15 PM] So it's really all about sort of how man and machine can work together.
[05:58:32 | 2:46:23 PM] Investment management is a time management exercise.
[05:58:36 | 2:46:27 PM] What I mean by that, if I spent all of my time working on one stock, that'd be great.
[05:58:42 | 2:46:33 PM] I'd probably know it better than anyone else in the world.
[05:58:45 | 2:46:36 PM] But, like, if there wasn't anything to do in that stock, I'd be kind of—there isn't much to do.
[05:58:50 | 2:46:41 PM] Well, if I do two, well, then I have half as much time and so forth until I go.
[05:58:55 | 2:46:46 PM] So you start getting diminishing returns on how much time you could spend on any particular stock.
[05:59:03 | 2:46:54 PM] So, you know, what can AI do?
[05:59:06 | 2:46:57 PM] Can AI help me cover more names?
[05:59:09 | 2:47:00 PM] Perhaps.
[05:59:11 | 2:47:02 PM] Maybe it allows me to raise the table stakes on what I just kind of, like, have as a general knowledge, because that work used to take me hours to prepare to get me ready for what it was, and now maybe, you know, an AI program can, you know, help me prepare a lot of that work in five minutes, which used to take me six to eight hours.
[05:59:33 | 2:47:24 PM] So that allows me to do other things.
[05:59:36 | 2:47:27 PM] Again, like it's a very competitive industry, so it's not like if I get rid of all these people or if I have like five analysts, whereas before I had 30, yeah, maybe those people can do more.
[05:59:47 | 2:47:39 PM] But now all of a sudden this opens up other time.
[05:59:51 | 2:47:42 PM] This opens up time that I could spend doing either more proprietary research, channel checks, more sort of like...
[05:59:59 | 2:47:50 PM] Like industry backdrop work, because again, like you're going to need to find these divergent views.
[06:00:04 | 2:47:55 PM] So it's like, if I do the exact same thing I was doing before and it's like, hey, wow, I can get my work done in two hours, well, someone else is going to be still working 16 hours a day trying to find, like, that extra thing that's going to make you money.
[06:00:21 | 2:48:12 PM] Because, you know, just doing this stuff is obviously, like, what we used to pay an analyst to do, you know, a year or two ago is not what we're going to be paying an analyst to be doing, you know, in a year.
[06:00:36 | 2:48:27 PM] Very cool.
[06:00:37 | 2:48:29 PM] And on that, what is something today that a junior analyst does that you think will be absurd if they're still doing in five years?
[06:00:44 | 2:48:36 PM] Well, it's funny.
[06:00:45 | 2:48:37 PM] Like, it's like, oh, you're not going to be reading 10-Ks, you're not going to be reading, you know, transcripts.
[06:00:51 | 2:48:43 PM] I actually don't believe that to be true.
[06:00:53 | 2:48:45 PM] Like, if you're truly close to a name, you're going to still need to, like, process a lot of that information.
[06:01:01 | 2:48:53 PM] Now, you might be able to get, like, summarized versions that can cut down the time it takes you to do those things, but you still need to get that information sort of into your head.
[06:01:11 | 2:49:03 PM] Like, we used to have a lot of analysts that would be going through a lot of, like, sort of like big data and things like that.
[06:01:17 | 2:49:09 PM] I definitely think that that can sort of be outsourced, and that'll be super easy to, you know, I would be surprised if a lot of these guys aren't necessarily doing that stuff.
[06:01:27 | 2:49:18 PM] But what I believe the AI is going to do, or the agent or whoever it is, is going to be pushing you in the right direction to work on the right names.
[06:01:41 | 2:49:32 PM] Like I said, this is time management.
[06:01:43 | 2:49:34 PM] It's all about how do I know to work on the right things, and that's where the winners are going to be, is the people who can figure out how to use these tools to get you to spend the right amount of time working on potentially finding, like, a divergent view.
[06:01:59 | 2:49:51 PM] Very cool.
[06:02:37 | 2:50:28 PM] And on.
[06:03:50 | 2:51:42 PM] All right.
[06:03:51 | 2:51:43 PM] Hello, everyone.
[06:03:52 | 2:51:44 PM] Welcome.
[06:03:53 | 2:51:45 PM] My name is David.
[06:03:54 | 2:51:46 PM] I lead AI operations at a company called Revolut.
[06:04:02 | 2:51:54 PM] We have 50 minutes today together.
[06:04:05 | 2:51:57 PM] We'll talk about high-performance engineering and self-hosting open-source model on the dedicated GPU.
[06:04:12 | 2:52:03 PM] How does that sound?
[06:04:13 | 2:52:04 PM] Cool.
[06:04:14 | 2:52:05 PM] So it's going to be a technical one, so bear with me.
[06:04:19 | 2:52:10 PM] So maybe to start off, because I know this is the US and you may not know Revolut, quick words about our company.
[06:04:26 | 2:52:18 PM] We're a digital bank in Europe.
[06:04:29 | 2:52:21 PM] We have 80 million customers.
[06:04:31 | 2:52:23 PM] We're live in 45 markets with the most downloaded financial app in Europe for the last year.
[06:04:39 | 2:52:31 PM] And as of July, we're Europe's largest private company.
[06:04:45 | 2:52:37 PM] So we're doing okay.
[06:04:48 | 2:52:39 PM] The emphasis of Revolut is, you know, shipping a lot of product, and so there's a high focus on engineering culture and excellence on that domain.
[06:04:59 | 2:52:50 PM] And so we'll talk about that.
[06:05:01 | 2:52:53 PM] So let's talk about some AI.
[06:05:06 | 2:52:57 PM] We have a chart here.
[06:05:06 | 2:52:58 PM] You're going to see two lines.
[06:05:08 | 2:52:59 PM] This is a sample of 2,000 engineers' performance over the last year.
[06:05:14 | 2:53:06 PM] So the green line is going to be lead time.
[06:05:16 | 2:53:08 PM] So it's going to be when an engineer picks up a feature until a feature is merged and ready to be deployed.
[06:05:24 | 2:53:16 PM] The blue line is going to be coding time.
[06:05:26 | 2:53:17 PM] So the green line is in days.
[06:05:27 | 2:53:19 PM] The blue line is in hours.
[06:05:31 | 2:53:23 PM] Just to reset the timeline in case people forget, because AI moves really fast.
[06:05:36 | 2:53:27 PM] Claude Code came out around February 2025, right?
[06:05:40 | 2:53:31 PM] And that's the Claude Code Sonnet 3.
[06:05:42 | 2:53:33 PM] 7, the one that would delete your prod database, right?
[06:05:45 | 2:53:37 PM] Not the safe Claude and Codex that we have today.
[06:05:48 | 2:53:40 PM] So bear in mind when we talk about adoption.
[06:05:52 | 2:53:44 PM] So what you see on this chart is January 25, first introduced AI in the company, right?
[06:05:59 | 2:53:50 PM] Gemini.
[06:05:59 | 2:53:51 PM] First time people were able to use private data with an AI.
[06:06:04 | 2:53:56 PM] Around February, we started playing around with Code, and then January is when we first launched Code at scale.
[06:06:12 | 2:54:04 PM] What you see is Gemini had 10% improvement in lead time, 20% improvement in coding time, so that people no longer needed to look Stack Overflow and reading documentation.
[06:06:24 | 2:54:15 PM] But then Code, not so much impact at the time.
[06:06:28 | 2:54:19 PM] So when we launched it, we were highly skeptical about the cost of AI.
[06:06:32 | 2:54:24 PM] We were seeing engineers spend a thousand a month, ten thousand a month, with not so much ROI.
[06:06:38 | 2:54:29 PM] And so when we launched it, we launched it with strict budget limits.
[06:06:43 | 2:54:35 PM] And so we're looking at the next thing, right?
[06:06:44 | 2:54:36 PM] So how can we provide a limited token to our engineers so they can use AI guilt-free for a fraction of the cost?
[06:06:51 | 2:54:42 PM] And so we looked into open source.
[06:06:54 | 2:54:46 PM] So around April 26 is when we started self-hosting open source model, big fan of GLM for coding.
[06:07:01 | 2:54:53 PM] So around that time, what you see, April 26, GLM 5.
[06:07:06 | 2:54:58 PM] 1, we see 60% improvement in coding time, 70% improvement in lead time.
[06:07:13 | 2:55:05 PM] So dramatic impact.
[06:07:16 | 2:55:08 PM] What did we learn from this?
[06:07:17 | 2:55:09 PM] Well, there's more impact on the lead time than on the coding time.
[06:07:19 | 2:55:11 PM] So what we find is the bottleneck for engineering is not necessarily coding.
[06:07:25 | 2:55:17 PM] You can save a lot of time not having to dig through your inbox or messing with Jira and Confluence.
[06:07:31 | 2:55:22 PM] And so when you have a limited token.
[06:07:33 | 2:55:24 PM] You're free to do that.
[06:07:34 | 2:55:26 PM] You no longer have to save your tokens for the end of the quarter or the most difficult task.
[06:07:42 | 2:55:34 PM] So where do we stand?
[06:07:43 | 2:55:35 PM] Well, open source is now a priority.
[06:07:46 | 2:55:38 PM] Our revoluts, unit economics are favorable.
[06:07:49 | 2:55:41 PM] The billing is flat, we don't have any bill shock any of the month.
[06:07:53 | 2:55:45 PM] And the frontier is the exception.
[06:07:55 | 2:55:47 PM] So obviously, we keep using Codex, Claude Code.
[06:07:58 | 2:55:50 PM] The latest model are fantastic.
[06:08:00 | 2:55:51 PM] Gemini Argan, very good as well.
[06:08:03 | 2:55:55 PM] But we keep them as exception.
[06:08:08 | 2:55:59 PM] So how do we get there?
[06:08:11 | 2:56:02 PM] Some metrics that matter when you're self-hosting model.
[06:08:15 | 2:56:06 PM] So to serve 2,000 engineers, we roughly need 56 B200, and that's to host GLM-4.
[06:08:21 | 2:56:13 PM] 3.
[06:08:22 | 2:56:13 PM] GLM is a big model, right?
[06:08:24 | 2:56:16 PM] 800 billion parameters.
[06:08:27 | 2:56:19 PM] What you want to aim for is sub-three-second time to first token.
[06:08:33 | 2:56:25 PM] This is empirical evidence.
[06:08:35 | 2:56:26 PM] As soon as you exceed five seconds, my Slack inbox starts to blow up, and so we know that's the limit.
[06:08:40 | 2:56:32 PM] In terms of throughput, doesn't really matter as much, right?
[06:08:44 | 2:56:36 PM] So we serve, in terms of interactivity, 200 tokens per second.
[06:08:49 | 2:56:40 PM] People are fine, you don't need to go higher.
[06:08:52 | 2:56:43 PM] The way people work has changed.
[06:08:53 | 2:56:44 PM] We no longer look at the stream of thinking tokens.
[06:08:56 | 2:56:48 PM] People run tasks in parallel and check in when the task is done.
[06:09:00 | 2:56:52 PM] But if you want to have high throughput and you're an engineer at Revolut, you just connect after 5 p.
[06:09:04 | 2:56:56 PM] m.
[06:09:04 | 2:56:56 PM] when no one is on GPU, and you can get 800 TPS, and then, you know, it's a dream.
[06:09:10 | 2:57:01 PM] In terms of cost, in terms of impact, self-hosting GLM, our blended cost of token is 30 cents per million, and so our invoice is one-tenth of what we were spending on.
[06:09:27 | 2:57:18 PM] Anthropic and OpenAI.
[06:09:29 | 2:57:20 PM] So there's a lot of tuning that goes into running open source models.
[06:09:34 | 2:57:26 PM] If you just get GPUs and upload weights on a GPU and you start doing some inference, you're going to get terrible performance.
[06:09:43 | 2:57:35 PM] It's because your workload is going to be very dependent on the parameters that you set.
[06:09:50 | 2:57:42 PM] So if you look all the way to the left of that chart, the blue line is going to be demand, so that's requests per second.
[06:09:56 | 2:57:47 PM] That's going to be what's going to be the bottleneck for your latency.
[06:09:58 | 2:57:49 PM] For your latency for your GPUs.
[06:10:01 | 2:57:52 PM] And the red line is what we're optimizing for.
[06:10:02 | 2:57:54 PM] That's the time to first token.
[06:10:05 | 2:57:57 PM] So when we started back in April, you could see requests per second around three, which is high but not so high, and time to first token over 10 seconds, which is very slow.
[06:10:19 | 2:58:10 PM] A lot of the data that you see is the same number of GPU.
[06:10:22 | 2:58:13 PM] We didn't increase GPU count; we stayed at 56.
[06:10:25 | 2:58:17 PM] And by the end, you see in August, requests per second were about over seven and time to first token were around 1.
[06:10:32 | 2:58:23 PM] 6.
[06:10:32 | 2:58:24 PM] So we've had 88% improvement in performance for 76% increased demand.
[06:10:39 | 2:58:31 PM] So the learning from this is there's a lot of parameters that you can improve on, and you really need to rescale if you're looking to serve a model.
[06:10:49 | 2:58:41 PM] So let's talk parameters.
[06:10:52 | 2:58:43 PM] There's no secret recipe, but the things you should consider are the following.
[06:10:58 | 2:58:49 PM] First one, long context is a scam.
[06:11:01 | 2:58:53 PM] You really need to be mindful that even though you can serve 1 million token, 256, 256 is really what you need.
[06:11:10 | 2:59:01 PM] Quantization: if you're running Blackwell generation GPU, you don't want to run anything higher than FP4, and if FP4 is best, roughly going from FP4 to FP8 is a 40% saving in GPU footprint for zero loss in precision.
[06:11:29 | 2:59:20 PM] Other parameters to consider: tensor parallelism.
[06:11:31 | 2:59:22 PM] Even though GLM fits on TP4, you don't have enough KV cache, and so maybe a TP8 works better depending on how large your workload is.
[06:11:40 | 2:59:32 PM] And then on the more esoteric, check your cache hit.
[06:11:44 | 2:59:35 PM] Coding tasks need to be above 90% cache hit.
[06:11:48 | 2:59:40 PM] And you can look into optimize spec decoding, sequential prefill, PDDAG, all of these.
[06:11:57 | 2:59:49 PM] Cool.
[06:11:58 | 2:59:49 PM] So now let's talk about production setup.
[06:12:01 | 2:59:53 PM] GLM obviously is a text-only model, which is a limitation for some people.
[06:12:07 | 2:59:58 PM] The trade-off, I would say, we would make every time is get the smarter model and figure out how to do image recognition another way.
[06:12:14 | 3:00:05 PM] You can easily have a local router, OpenCodex is one, where you would route any image recognition to Gemini or Luna and keep GLM for the main task.
[06:12:26 | 3:00:17 PM] If you really need some vision model, GLM 5G Flash works really well.
[06:12:32 | 3:00:23 PM] We have our UI designer making great use of it.
[06:12:37 | 3:00:29 PM] Turnaround for UI product has gone a really, really long way.
[06:12:44 | 3:00:35 PM] And then the last one is going to be about the harness.
[06:12:48 | 3:00:40 PM] So all of these endpoints are going to be OpenAI-compatible API with response API, and so you can use them inside OpenCode, Claude, Codex, Codex app as well.
[06:13:00 | 3:00:51 PM] Works really well.
[06:13:00 | 3:00:52 PM] And so that's what we recommend.
[06:13:07 | 3:00:59 PM] And then last message, this one is for the CIO in the room.
[06:13:13 | 3:01:04 PM] There's been a lot of stigma in using Chinese open-source model.
[06:13:18 | 3:01:10 PM] So the simple consider is you're not using the inference dedicated endpoint that goes to China.
[06:13:24 | 3:01:15 PM] You're just getting the weights and putting them on a U.
[06:13:27 | 3:01:19 PM] S.
[06:13:28 | 3:01:19 PM] -based service.
[06:13:29 | 3:01:20 PM] So for data sharing side, this is totally fine.
[06:13:34 | 3:01:26 PM] Revolut in particular, because we're an EU-regulated bank, we fall under the most strict regime in terms of compliance.
[06:13:43 | 3:01:35 PM] And so what we find that works is all of these coding tasks are not considered autonomous agents.
[06:13:51 | 3:01:42 PM] They're always with a human in the loop.
[06:13:53 | 3:01:44 PM] And so how do you give reassurance that you have a human in the loop?
[06:13:57 | 3:01:49 PM] You start by creating a sandbox that guarantees that.
[06:14:01 | 3:01:52 PM] And the sandbox means now if you've used Codex Cloud Code, it has all of these features of approve for me.
[06:14:07 | 3:01:58 PM] You just have to set the rules for the operations that you don't want to allow.
[06:14:10 | 3:02:02 PM] So you can allow grep, but not Gradle, for instance, and that's going to give confidence to your regulator that this is not an autonomous agent that needs different supervision.
[06:14:23 | 3:02:14 PM] The sandbox also protects you from rogue use, right?
[06:14:25 | 3:02:17 PM] You may have bad actor inside your company and you want a shield for that.
[06:14:30 | 3:02:21 PM] You'd be surprised what you find in a large company.
[06:14:34 | 3:02:25 PM] And then the last one is prompt injection.
[06:14:36 | 3:02:27 PM] Not so much a thing now, given how smart models are, but always a thing.
[06:14:42 | 3:02:33 PM] In terms of data privacy, we spoke about it.
[06:14:44 | 3:02:35 PM] So as long as the data sits in one of the countries that are in the data equivalency framework, so US, EU, UK, Israel, you're fine.
[06:14:53 | 3:02:44 PM] You can get GDPR there.
[06:14:55 | 3:02:46 PM] All of your inference provider or GPU provider are going to have zero data retention by default.
[06:15:03 | 3:02:54 PM] And then the last thing you need is a very strong open telemetry so that if you ever have an incident, you need to be able to go deep and look at the logs.
[06:15:15 | 3:03:06 PM] Also gives you some analytics.
[06:15:21 | 3:03:12 PM] All right.
[06:15:21 | 3:03:13 PM] Thanks, everyone.
[06:15:22 | 3:03:13 PM] That was all for my talk.
[06:28:57 | 3:16:49 PM] Good afternoon, everyone present here.
[06:29:05 | 3:16:57 PM] It's been a great day and an absolute pleasure to be here.
[06:29:11 | 3:17:03 PM] The topic of my talk today is: everyone has AI, who has the advantage?
[06:29:21 | 3:17:13 PM] I'll be talking about what the orgs that are doing, that are leading in AI with their implementation and adoption, what are they doing differently?
[06:29:33 | 3:17:25 PM] And so before that, who am I and what's my POV?
[06:29:39 | 3:17:31 PM] So I'm Dr.
[06:29:41 | 3:17:32 PM] Sid Pednekar.
[06:29:42 | 3:17:33 PM] I am an AI technology and data exec in asset management.
[06:29:47 | 3:17:39 PM] I've spent most of my tenure in hedge funds and investment and academic research.
[06:29:54 | 3:17:46 PM] What I've done and focused on is lead strategy and build specialized teams to
[06:30:01 | 3:17:52 PM] Teams towards three main verticals: optimizing efficiency, driving P&L, and reducing costs.
[06:30:11 | 3:18:02 PM] So I'll be following the discussion along with two hypothetical companies, Company A and Company B, right in this slider below.
[06:30:22 | 3:18:14 PM] These are hypothetical, you know, with made-up workflows, but we'll be following their journey along the rest of this presentation.
[06:30:34 | 3:18:25 PM] So everyone has AI.
[06:30:36 | 3:18:27 PM] Who has the advantage?
[06:30:40 | 3:18:31 PM] Before we get started there, first let's see what the lay of the land is.
[06:30:44 | 3:18:35 PM] And recent studies have shown that only about 37% of enterprises that were surveyed are showing a positive contribution to their EBIT, and only about 6% of those would be qualified as high performers.
[06:31:03 | 3:18:55 PM] So that's about 5% contribution to their EBIT.
[06:31:07 | 3:18:58 PM] Other studies earlier in the year have shown that about 66% are saying they're having a productivity increase, but only about 40 and 20% are actually seeing cost reductions and revenue growth.
[06:31:22 | 3:19:13 PM] So as we know, access of AI is widespread, yet the impact remains uneven.
[06:31:31 | 3:19:23 PM] So the question I would ask, or how I would think about this, is really in terms of three verticals.
[06:31:43 | 3:19:35 PM] And the way I think about these three verticals should Apply to organizations and individuals alike, and it should apply to functions regardless of where you are in that organization.
[06:31:59 | 3:19:51 PM] So the three main vertical pillars that I think of are, number one, design the right problem.
[06:32:07 | 3:19:58 PM] Number two, build shared capabilities.
[06:32:10 | 3:20:02 PM] And number three, compound the advantage.
[06:32:14 | 3:20:06 PM] Now, before we dive into each of these pillars, there is an idea that I think goes through all these verticals, and I think the best leading firms are taking advantage of that and capitalizing on it.
[06:32:30 | 3:20:21 PM] As we know, throughout time, the only constant in this world has been change.
[06:32:36 | 3:20:27 PM] What's different in the AI and superintelligence era is that intelligence has become cheap.
[06:32:44 | 3:20:35 PM] Regardless of what your unit of intelligence is, whether it be software, analytics, recommendations, reports, AI is creating an abundance in all of it.
[06:32:55 | 3:20:47 PM] And as we know, more answers don't necessarily create more value.
[06:33:02 | 3:20:53 PM] So what is scarce?
[06:33:04 | 3:20:55 PM] What is the scarce resource in an abundant world?
[06:33:09 | 3:21:01 PM] What are companies taking advantage of, the leaders at least?
[06:33:14 | 3:21:05 PM] It's judgment.
[06:33:16 | 3:21:08 PM] What is judgment?
[06:33:19 | 3:21:10 PM] Judgment is choosing what matters and how to act when there's no single obvious answer.
[06:33:25 | 3:21:16 PM] It's the creativity that lets you explore what possibilities are worth exploring.
[06:33:29 | 3:21:21 PM] It's the taste that tells you what good looks like in your given context.
[06:33:34 | 3:21:26 PM] It's the decisions where you can weigh what trade-offs are worth making.
[06:33:41 | 3:21:33 PM] Judgment is ubiquitous.
[06:33:43 | 3:21:35 PM] It exists throughout your organization on a daily basis.
[06:33:48 | 3:21:40 PM] Your C-suite, the C-suite is asking questions, taking advantage of judgment all the time.
[06:33:53 | 3:21:45 PM] So are the software engineers, the AI leaders, the portfolio managers, and the data scientists.
[06:34:00 | 3:21:51 PM] So the question that they're focused on is, given judgment is a finite asset, a limited capacity, the main question becomes, where is our best judgment worth spending?
[06:34:16 | 3:22:07 PM] I'd like for you to hold on to that thought.
[06:34:19 | 3:22:11 PM] With that, we'll dive into our first pillar: design the right problem.
[06:34:23 | 3:22:15 PM] So questions, a question that the leading organizations are asking all the time is they're obsessed over what is the right problem to solve, right?
[06:34:37 | 3:22:28 PM] It's tempting to start with the tool.
[06:34:38 | 3:22:30 PM] Today we're surrounded with better models, harnesses.
[06:34:42 | 3:22:33 PM] We're surrounded with all these AI tools.
[06:34:45 | 3:22:36 PM] We're surrounded with copilots.
[06:34:47 | 3:22:38 PM] But that isn't the way about, is it?
[06:34:50 | 3:22:42 PM] At least that's not the way the leaders are approaching it.
[06:34:53 | 3:22:45 PM] Now let's go back to our hypothetical two companies.
[06:34:57 | 3:22:48 PM] Let's say they're from asset management.
[06:34:59 | 3:22:50 PM] Let's say we're tracking the workflow of two research analysts in these hypothetical organizations.
[06:35:06 | 3:22:58 PM] Well, let's say organization B starts with the tool, the copilot.
[06:35:13 | 3:23:04 PM] They're asking, where can we add AI to the analyst's work?
[06:35:17 | 3:23:08 PM] They're looking at the current existing process to say, earning transcript comes in, I discovered a summarization workflow.
[06:35:25 | 3:23:16 PM] Let me pass all of this in through my firehose.
[06:35:29 | 3:23:20 PM] Analysts get earnings summaries faster.
[06:35:32 | 3:23:24 PM] Win-win, right?
[06:35:34 | 3:23:26 PM] Well, not so much, at least not compared to the guys who are leading.
[06:35:39 | 3:23:30 PM] And such a workflow of being a faster horse introduces one key nuance.
[06:35:45 | 3:23:37 PM] That is, you are losing context as you have information, I guess, reduction as part of your summarization.
[06:35:53 | 3:23:44 PM] So what is a hypothetical organization A doing in this?
[06:35:57 | 3:23:49 PM] Well, they're obsessed in the right problem to ask.
[06:36:00 | 3:23:52 PM] They could be asking, why are our material signals reaching us too late?
[06:36:06 | 3:23:57 PM] Where do we focus the attention, the AI, the bandwidth, the capability on?
[06:36:11 | 3:24:02 PM] Where is our bottleneck?
[06:36:12 | 3:24:04 PM] Right?
[06:36:12 | 3:24:04 PM] And so it becomes this redesigning of the workflow, or at least the reevaluation on what to focus on.
[06:36:20 | 3:24:11 PM] That's what they're doing different.
[06:36:21 | 3:24:12 PM] Now, this consideration isn't particular to finance.
[06:36:24 | 3:24:16 PM] It's across the realm and function.
[06:36:27 | 3:24:18 PM] You know, you're asking the same question on what to focus on, whether it be research capacity, decision speed, quality of your data, latency, reliability.
[06:36:39 | 3:24:31 PM] It traverses all of that.
[06:36:42 | 3:24:33 PM] And studies show this.
[06:36:43 | 3:24:35 PM] They show leading studies, on average, spend their attention on fewer, higher quality decisions than the other cohort.
[06:36:54 | 3:24:46 PM] So leaders are being more selective in where they focus their attention and what they focus their attention.
[06:37:00 | 3:24:52 PM] So it's great.
[06:37:01 | 3:24:53 PM] The leading companies have an idea of what the right problems are.
[06:37:05 | 3:24:57 PM] Where do they go from there?
[06:37:09 | 3:25:00 PM] Well, they also concentrate their investments in the highest value workflows.
[06:37:16 | 3:25:07 PM] I get it, and I've been culpable of something similar where, you know, AI is almost creating too many opportunities.
[06:37:25 | 3:25:17 PM] And experimentation can be a good thing, but one needs to separate experimentation and the resulting innovation theater, or worse, the productivity theater, which actual value generation.
[06:37:39 | 3:25:31 PM] Going back to our two hypothetical companies, what does this mean?
[06:37:43 | 3:25:35 PM] Company B is looking at how do we launch the most number of AI pilots, and what that ends up looking like is a document summarization bot here, a copilot there, a data retrieval bot here.
[06:37:57 | 3:25:49 PM] It's scattered all over the place.
[06:38:00 | 3:25:51 PM] Whereas what Company A is focused on in their investments is potentially use cases like end-to-end workflows on the research pipeline.
[06:38:12 | 3:26:03 PM] They're focused on aligning engineering, analytics, AI capacity, and judgment towards a singular focus.
[06:38:21 | 3:26:12 PM] And research has shown that the leaders spend more than 80% of their investments on these high-value use cases, transforming key business functions and creating new offerings.
[06:38:37 | 3:26:29 PM] Perfect.
[06:38:39 | 3:26:30 PM] We know they're focusing on finding the right problem, and they're also spending deep investment in select workflows.
[06:38:47 | 3:26:38 PM] Well, they're also doing something different.
[06:38:51 | 3:26:42 PM] They're reimagining how work is done.
[06:38:54 | 3:26:46 PM] I think this is key, and it goes back to what we discussed previously, which is judgment.
[06:39:01 | 3:26:53 PM] They're redefining and reorganizing functions, roles, capacities around this key element of judgment.
[06:39:10 | 3:27:02 PM] What does that mean for our hypothetical company?
[06:39:13 | 3:27:04 PM] Well, Company B might be focused on, as we discussed, I'm getting my earnings transcript, I'm getting my research reports.
[06:39:20 | 3:27:11 PM] How do I summarize it?
[06:39:22 | 3:27:13 PM] Maybe I make that faster.
[06:39:23 | 3:27:15 PM] Maybe I update my financial models faster.
[06:39:26 | 3:27:17 PM] Maybe I send my recommendation to my PM faster.
[06:39:29 | 3:27:21 PM] Company A is focused on an entirely different ballgame.
[06:39:34 | 3:27:25 PM] Hypothetically, they could be asking the analyst to define the investment thesis, and they're watching and gathering evidence that could refute that thesis or support it.
[06:39:45 | 3:27:36 PM] They'd be monitoring continuously.
[06:39:47 | 3:27:38 PM] They'd be investigating exceptions, and they could be deep diving on, you know, select examples that could lead to actual generation of value.
[06:40:01 | 3:27:52 PM] So the winners just don't just automate.
[06:40:03 | 3:27:55 PM] Just automate their redesign.
[06:40:05 | 3:27:56 PM] And studies show that the cohort of high performers are 75% more likely, or in practice, they actually do redesign their workflow versus 25% of the cohort that doesn't.
[06:40:18 | 3:28:10 PM] So where does this leave us with our two hypothetical companies and designing the right problem?
[06:40:24 | 3:28:16 PM] Company B adds AI to existing workflows.
[06:40:27 | 3:28:18 PM] They're completing individual projects and they're moving to the next initiative, whereas Company A is rethinking how work is done.
[06:40:35 | 3:28:26 PM] They're redesigning processes around AI and they're obsessing over the right problem.
[06:40:40 | 3:28:32 PM] That's the difference in how organizations put AI to work.
[06:40:44 | 3:28:36 PM] Great.
[06:40:45 | 3:28:36 PM] So they've picked the right problem.
[06:40:48 | 3:28:39 PM] What happens next?
[06:40:50 | 3:28:41 PM] Well, we all know in order to actually enable that capacity, you need to build shared capabilities across the org.
[06:40:59 | 3:28:50 PM] And what's a trend that's seemingly emerging for some time now is that the lines between technology and business are converging.
[06:41:08 | 3:29:00 PM] And we're seeing this everywhere.
[06:41:10 | 3:29:01 PM] We're seeing engineers that are moving closer to business outcomes.
[06:41:13 | 3:29:04 PM] We're seeing business professionals that are building tools and automations.
[06:41:18 | 3:29:10 PM] And as you can see and imagine, you can have forward deployed engineers, you can have forward deployed product managers, but you could also have the inverse, which is forward deployed portfolio managers.
[06:41:30 | 3:29:21 PM] And it's really this combination of getting the right people in the room by breaking down organization silos that the leaders are really leaning on.
[06:41:43 | 3:29:34 PM] Studies have shown that more and more of the large enterprises are viewing their technology arm as a business growth function.
[06:41:52 | 3:29:43 PM] And that's creating an edge for these companies.
[06:41:56 | 3:29:48 PM] So the other sort of vertical inside building shared capabilities that is probably a personal favorite of mine, it's standardizing the core and personalizing the edges.
[06:42:10 | 3:30:01 PM] And this is something that isn't new to the technology world.
[06:42:13 | 3:30:05 PM] We've built infrastructure, we've built, you know, shared modules and system design.
[06:42:17 | 3:30:08 PM] But what's interesting here today is that it's taking a very different shape with the capabilities out there and with the org and the breaking down of silos.
[06:42:26 | 3:30:18 PM] And this could look very different depending on where you sit.
[06:42:31 | 3:30:23 PM] You could be building shared cores for a team that looks very different with analysts and clients.
[06:42:39 | 3:30:30 PM] You could be doing that with a bunch of analysts, or you can be doing that for software engineers or data scientists.
[06:42:47 | 3:30:38 PM] With the data scientist example in particular, that could look very interesting, where instead of having one-off workflows that is really common in the industry, you could build a shared core of the data sets, their semantic layers, the trade-offs of what worked, what didn't, what some data sets do good of, where the gaps, and so on and so forth, such that each new personnel becomes almost a plug-and-play module in this system where they can then stand on the shoulder of their predecessors.
[06:43:23 | 3:31:15 PM] So what should the next person not have to rebuild?
[06:43:28 | 3:31:20 PM] Now, what's also interesting is, you know, the enterprise wasn't really built for agents.
[06:43:34 | 3:31:26 PM] Agents, they work across workflows and applications.
[06:43:39 | 3:31:30 PM] They take context, they deliberate, they take actions.
[06:43:42 | 3:31:34 PM] Whereas really the enterprises are focused previously on single human or a collection of them interacting with a single application.
[06:43:53 | 3:31:45 PM] So the leaders are cognizant that something needs to change and that they need to modernize their infrastructure.
[06:44:00 | 3:31:52 PM] And they're very self-aware of where they are in their journey.
[06:44:06 | 3:31:57 PM] And so studies show that, you know, 71% of the orgs are modernizing their core infrastructure to support AI.
[06:44:13 | 3:32:04 PM] And, you know, 6 to 10%, or 23%, of them are investing 6 to 10% of their annual revenue in core system modernization to take advantage of this.
[06:44:26 | 3:32:17 PM] And a common complaint here, or a common challenge here, is, you know, data quality and the ability to reuse data.
[06:44:35 | 3:32:27 PM] So great, we, you know, we have the right people in the room.
[06:44:40 | 3:32:31 PM] We have, you know, we have the right knowledge there.
[06:44:43 | 3:32:35 PM] What do we do next?
[06:44:45 | 3:32:37 PM] And then comes the concept of, hey, how do we make this knowledge reusable and accessible?
[06:44:51 | 3:32:42 PM] And that's where we have, you know, depending on the adoption and where they are, you can have different types of team agents, where you can have expert agents being subject matter experts.
[06:45:01 | 3:32:53 PM] You can have workflow agents that work across streams like Slack bots that are creating and opening tickets, they're closing them and what have you.
[06:45:09 | 3:33:01 PM] And then you can have really chief of staff kind of agents that keep a tab on what the state of the organization is and what needs to be done.
[06:45:18 | 3:33:10 PM] So, you know, going back to our workflows, A, again, is looking at this very differently in terms of shared capabilities.
[06:45:25 | 3:33:16 PM] Now, the last pillar here that I want to draw your attention to is, well, when does this system really compound?
[06:45:34 | 3:33:26 PM] What happens when it's deployed?
[06:45:37 | 3:33:29 PM] Well, the leading companies, what they're doing is they're actually thinking about it slightly differently.
[06:45:44 | 3:33:35 PM] What are failures that can give us an edge that we can learn from?
[06:45:48 | 3:33:40 PM] If there's a success, how do we make it part of the system?
[06:45:52 | 3:33:44 PM] And the way they think about this is, you know, the individual learned but did the system.
[06:45:57 | 3:33:49 PM] Is there a way, perhaps, when they've encountered something where they need to make a correction, that that knowledge is fed back into the org, either through a new tool or context or what have you?
[06:46:09 | 3:34:00 PM] And what's key here is preserving the evidence along with those learnings.
[06:46:16 | 3:34:07 PM] So really the last vertical here is AI-first capacity.
[06:46:22 | 3:34:14 PM] Where does it go?
[06:46:24 | 3:34:15 PM] Being cognizant that you need to redesign your system and really focus it on key metrics that you're evaluating, you're monitoring, and you're creating a flywheel off.
[06:46:37 | 3:34:29 PM] So where does this leave us for companies A and B?
[06:46:41 | 3:34:32 PM] You know, company A has their entire work redesigned.
[06:46:45 | 3:34:37 PM] They're building capabilities at compound, and they have shared capabilities built.
[06:46:51 | 3:34:43 PM] So I want to leave you off with one final question.
[06:46:54 | 3:34:46 PM] Everyone has AI.
[06:46:55 | 3:34:47 PM] Who has the advantage?
[06:46:56 | 3:34:48 PM] Thank you.
[06:59:40 | 3:47:31 PM] To guide us back into the closing keynotes of today's program, please welcome once again to the stage our MC, Alex Lieberman, managing partner at 10X.
[06:59:41 | 3:47:33 PM] How's it going?
[06:59:42 | 3:47:33 PM] Who is the most energized in the room?
[06:59:42 | 3:47:33 PM] Whoever that was, most energized.
[06:59:42 | 3:47:34 PM] Well, welcome back for the closing keynote block here at AI Engineer New York 2026.
[06:59:43 | 3:47:34 PM] I'm Alex Lieberman, co-founder, co-managing partner at 10X, Applied AI partner for...
[07:10:05 | 3:57:57 PM] For Fortune 500 businesses.
[07:10:08 | 3:57:59 PM] And we are most of the way through the first session today, and hopefully it's been filled with incredible conversation, which I'm going to share a little bit about some of the conversations I've had offstage in a minute.
[07:10:22 | 3:58:13 PM] But hopefully the mix of the programming, the conversation you've had amongst everyone has been really fruitful today.
[07:10:29 | 3:58:20 PM] Now, before we hop into the final block of the day, let's just take a moment again to give a round of applause to our partners who make this entire event possible.
[07:10:39 | 3:58:31 PM] So let's start with our presenting sponsor, Arize.
[07:10:43 | 3:58:34 PM] Let's give a shout out to Arize.
[07:10:46 | 3:58:37 PM] Yeah, Arize.
[07:10:47 | 3:58:39 PM] Next up, we have our platinum sponsors, Oracle, Sonar, WorkOS, and Exa.
[07:10:53 | 3:58:44 PM] Let's give a shout out for them.
[07:10:55 | 3:58:47 PM] And then two more.
[07:10:56 | 3:58:48 PM] We have gold sponsors.
[07:10:58 | 3:58:49 PM] I love them all.
[07:10:58 | 3:58:50 PM] They're all my favorite children.
[07:11:00 | 3:58:51 PM] Can't read them all off right now, but thank you so much.
[07:11:04 | 3:58:55 PM] Our silver sponsors, and to all of our supporting partners who make this possible.
[07:11:10 | 3:59:01 PM] Thank everyone.
[07:11:11 | 3:59:03 PM] Yeah, I don't know if that was the first person who said they have the most energy, but that person has a lot of energy.
[07:11:17 | 3:59:08 PM] So before we hop into the next block, one thing that I just wanted to share, and I'm sure a lot of you are already feeling this already, is not only is the energy palpable across the room, in between all of the sessions, but what you realize when you come to AI Engineer is that the content is incredible.
[07:11:38 | 3:59:30 PM] The speakers that are curated are incredible.
[07:11:41 | 3:59:33 PM] The depth by which they talk about the work they're doing is incredible.
[07:11:45 | 3:59:36 PM] But this is also just surface area that acts as a starting point for conversation amongst everyone in the room.
[07:11:52 | 3:59:43 PM] And so for me, not only has it been incredible to stand in the back of the room at various points in the day and just listen to these incredible speakers who are truly living in Edge City, but then to use all of these conversations, all of these talks as surface area to have conversations with folks.
[07:12:10 | 4:00:02 PM] So a few conversations that come to mind that I've had throughout the day because of the content.
[07:12:16 | 4:00:07 PM] One was a conversation with Swix, one of the people behind this incredible event.
[07:12:22 | 4:00:14 PM] We were talking about Just the diffusion gap that exists in enterprise AI right now.
[07:12:28 | 4:00:20 PM] And just some fun stats for you all.
[07:12:30 | 4:00:21 PM] We talk to hundreds of big enterprises at 10x across financial services, healthcare, industrials, et cetera.
[07:12:38 | 4:00:29 PM] And the way I think about diffusion of AI across these organizations is almost in milestones of a race.
[07:12:45 | 4:00:37 PM] So the first big milestone at an enterprise is just adopting a general purpose LLM.
[07:12:52 | 4:00:43 PM] Out of curiosity, of the, let's call it 100 firms we talked to, what percentage of those firms do you think have adopted and rolled out an LLM to all of their employees?
[07:13:01 | 4:00:53 PM] Someone scream out a number.
[07:13:04 | 4:00:56 PM] Nine percent, I think I heard.
[07:13:07 | 4:00:59 PM] Seventeen percent.
[07:13:08 | 4:01:00 PM] So specific.
[07:13:10 | 4:01:01 PM] Ninety percent.
[07:13:11 | 4:01:03 PM] So 90% of the enterprises we work with have rolled out a general purpose LLM.
[07:13:17 | 4:01:08 PM] Under that is people actually getting trained in how to use the technology, how to actually use these surfaces in their work.
[07:13:23 | 4:01:14 PM] That's like 60%.
[07:13:25 | 4:01:16 PM] Next up is coding agents, agents that are actually used within engineering and product workflows.
[07:13:30 | 4:01:22 PM] That's around 50% of all the enterprises we've been in.
[07:13:33 | 4:01:25 PM] And then the final one, where we are truly still day one, is agents actually working in non-engineering workflows in an organization.
[07:13:43 | 4:01:34 PM] That is around 5% right now.
[07:13:45 | 4:01:37 PM] So going back to what I said earlier, this community really is edge city.
[07:13:50 | 4:01:41 PM] The topics that are being talked about, we are going to continue to see those play out over the next 12, 24, 36 months.
[07:13:58 | 4:01:50 PM] I've had a variety of conversations like this throughout the day: diffusion gap, open source versus fine-tuned models, how hard it is to hire great AI engineers at scale.
[07:14:09 | 4:02:01 PM] And so as we go about the rest of today, but also as you think about the conference in general, use the content as a starting point to have interesting conversations at the edge.
[07:14:20 | 4:02:11 PM] With that, I would love to introduce you to our next talk, which is with Frank Long, the head of AI at Kotu.
[07:14:28 | 4:02:19 PM] He's going to be talking about a hedge fund as a function.
[07:14:30 | 4:02:22 PM] Let's welcome Frank.
[07:14:48 | 4:02:39 PM] Exciting to be here.
[07:14:49 | 4:02:40 PM] My name is Frank.
[07:14:50 | 4:02:41 PM] I work at Coatue, which is a technology investment firm across public and private markets.
[07:14:54 | 4:02:46 PM] So in our business, what you really need to do is be able to take high conviction bets on big themes and watch those play out.
[07:15:03 | 4:02:55 PM] I think, honestly, a career is the same way.
[07:15:06 | 4:02:57 PM] And last year when I joined Coatue, the bet that I wanted to make was, I think that agents will have an even bigger impact in investing than they did at coding.
[07:15:15 | 4:03:06 PM] I know that's a big statement.
[07:15:16 | 4:03:08 PM] We're all here because of the transformative impact that AI has had in coding, but I really believe it strongly.
[07:15:23 | 4:03:14 PM] And today I want to talk a little bit about the framework that we use to actually realize that impact.
[07:15:29 | 4:03:20 PM] So at a high level, you can think about a hedge fund as a function that takes in two parameters, context external and context internal, and spits out one tuple: selection, size, timing.
[07:15:43 | 4:03:35 PM] What stock, how much, when, right?
[07:15:48 | 4:03:39 PM] And I think this is a good framework to actually ground our work, which is we're trying to solve this compression problem of how do you take all the information in the world and spit out this one simple tuple.
[07:16:01 | 4:03:52 PM] And the product that we provide is essentially a time series of this tuple that constructs a portfolio.
[07:16:08 | 4:03:59 PM] So let's start from the top, which is the inputs.
[07:16:11 | 4:04:02 PM] Very simple philosophy.
[07:16:13 | 4:04:04 PM] We use our screens, we look at stuff, we do work.
[07:16:17 | 4:04:08 PM] Every single thing that a human can see in pixels on the screen, an agent in your building should be able to see via API.
[07:16:23 | 4:04:15 PM] The analogy I use is imagine you brought the smartest people ever, the greatest investors alive, and you brought them into your company, but you gave them a computer without logins to 75% of your services.
[07:16:36 | 4:04:28 PM] It's almost immaterial how smart this system is if it doesn't have the tools to actually action that.
[07:16:42 | 4:04:34 PM] So the two parts: external context, right?
[07:16:45 | 4:04:37 PM] No surprises here.
[07:16:46 | 4:04:38 PM] Think the news, prices, filings.
[07:16:49 | 4:04:41 PM] All of that should be easily accessible and not via dragging and dropping, copy and pasting, like directly via API.
[07:17:00 | 4:04:51 PM] Internal context is just as important, right?
[07:17:04 | 4:04:55 PM] So this is your own firm situation.
[07:17:06 | 4:04:57 PM] So that might be our current positions, potential liquidity and risk requirements we have around certain names, and past case studies or, you know, history with a certain sector or stock or management team.
[07:17:20 | 4:05:11 PM] That stuff's all super important.
[07:17:22 | 4:05:13 PM] So this is the foundation, and I think, no credit to me, Kotu has been an amazing leader on this for over a decade.
[07:17:29 | 4:05:20 PM] It's both technological and cultural.
[07:17:31 | 4:05:23 PM] We have an amazing data science team, amazing, amazing processes, amazing, amazing systems that bring all this in.
[07:17:37 | 4:05:29 PM] And just as importantly, we have a culture that is super, super rigorous and built from the ground up to capture all this insight.
[07:17:45 | 4:05:36 PM] For decades, we filed every single note about every single trade, about every single decision we made or didn't make, about what went well and what didn't go well, and that's poised us to expose us to AI.
[07:17:57 | 4:05:49 PM] So if you think about it, I probably can't just take all of those things, jam them into a context window, and get my magic three numbers and go home, right?
[07:18:08 | 4:05:59 PM] It can't be that easy.
[07:18:09 | 4:06:01 PM] You probably have to break down this function a bit further, right?
[07:18:14 | 4:06:06 PM] So maybe the first step is I take in that external and internal context and I gather it, right?
[07:18:21 | 4:06:13 PM] I want to gather it.
[07:18:22 | 4:06:14 PM] I want to filter out what's relevant and not relevant.
[07:18:25 | 4:06:16 PM] Okay, well, I pulled some news articles about the NBA.
[07:18:28 | 4:06:20 PM] That probably isn't material to stocks, but oh, well, this is actually related to some local permitting that might actually impact data centers, like.
[07:18:37 | 4:06:28 PM] There's a lot of nuance in this gather step.
[07:18:41 | 4:06:32 PM] Then you'll see probably the next step is I need to analyze that information and form a view, right?
[07:18:46 | 4:06:37 PM] I actually need to think about what that means for the markets, public and private.
[07:18:53 | 4:06:45 PM] And then I need to take that view and turn it into a decision.
[07:18:57 | 4:06:48 PM] A decision object has these three parameters, right?
[07:19:01 | 4:06:52 PM] These three sort of subpieces.
[07:19:03 | 4:06:55 PM] So you can see every single step has an input and an output, and the input for the subsequent step is the output that the previous function generated.
[07:19:14 | 4:07:06 PM] I think as an engineer, this is a way for me to conceptualize the problem in a way that makes a lot of sense.
[07:19:21 | 4:07:12 PM] But even this, it really can't be as simple as writing three functions, right?
[07:19:27 | 4:07:18 PM] So let's just, to really appreciate the scope and understand the full complexity of the problem, let's look into the first step, a tiny subpiece of a tiny subpiece of just gathering information, and let's do a case study on interpreting the news, right?
[07:19:45 | 4:07:37 PM] So it's probably no secret to you guys that, you know, news from Asia and Korean media outlets has been super important this year because semis, AI have been a huge, huge theme in the market.
[07:19:59 | 4:07:51 PM] Huge theme.
[07:19:59 | 4:07:51 PM] And I think this is an area where AI is poised to have a lot of impact, is reading Korean language news better than our completely non-Korean-speaking staff, right?
[07:19:59 | 4:07:51 PM] Huge theme.
[07:20:13 | 4:08:04 PM] I think I have a good thesis that this might be a good use case.
[07:20:15 | 4:08:07 PM] So you can imagine the first step is I have articles.
[07:20:21 | 4:08:13 PM] I need to collect the articles, right?
[07:20:23 | 4:08:15 PM] So this could be an MCP.
[07:20:25 | 4:08:17 PM] This could be a CLI.
[07:20:27 | 4:08:19 PM] License the data feeds, clean the data feeds.
[07:20:29 | 4:08:21 PM] There's actually a lot of ways to do this, and a lot of dimensions of freedom for how you can even just write this simple piece.
[07:20:36 | 4:08:28 PM] How do I chunk it when I pass it to the LLM?
[07:20:39 | 4:08:31 PM] Do I want to pull the images as images?
[07:20:42 | 4:08:34 PM] Do I want to pull the images and then turn the images into text?
[07:20:46 | 4:08:38 PM] There's actually a lot of knobs here, and I almost think about those knobs as like hyperparameters in a traditional machine learning system, right?
[07:20:54 | 4:08:46 PM] I think about each of these knobs as something for me to tune and optimize against.
[07:20:59 | 4:08:51 PM] Obviously, filtration.
[07:21:02 | 4:08:53 PM] We talked about it.
[07:21:03 | 4:08:54 PM] There are probably Korean NBA fans, right?
[07:21:07 | 4:08:58 PM] There's probably a bunch of stuff that's not necessarily material to the names and themes and stocks in our portfolio that really, really matter, right?
[07:21:17 | 4:09:09 PM] So I want to make sure that I filter those out.
[07:21:22 | 4:09:14 PM] There's this like translate slash extract slash should I summarize?
[07:21:26 | 4:09:17 PM] Should I extract this into some sort of structured form?
[07:21:30 | 4:09:21 PM] Again, so, so many ways to do this, so many ways to experiment how to expose information to the model.
[07:21:35 | 4:09:27 PM] And one of the reasons this is hard is it keeps changing.
[07:21:40 | 4:09:31 PM] And obviously checking.
[07:21:41 | 4:09:33 PM] Checking like our own internal notes, our own internal views, potential conversations we've had, meeting recordings against these things.
[07:21:49 | 4:09:40 PM] We actually need to cross-reference those things.
[07:21:52 | 4:09:44 PM] Actually, the idea of pulling information from disparate sources and cross-referencing them, that's super powerful.
[07:21:59 | 4:09:50 PM] So you'll see on the right here, I have code, LLM, LLM, code, person.
[07:22:04 | 4:09:56 PM] There's many, many ways to run these functions.
[07:22:06 | 4:09:58 PM] I think about, oh yeah, and finally update, potentially we update our views.
[07:22:14 | 4:10:05 PM] So there's many ways to run these functions.
[07:22:16 | 4:10:08 PM] I think of each line as having a runner, and the most obvious one is code.
[07:22:23 | 4:10:15 PM] Code is very good.
[07:22:24 | 4:10:16 PM] It's fast, it's cheap, it's reliable.
[07:22:27 | 4:10:19 PM] So for something like, if the price to earnings ratio is less than 15, I should just use deterministic code for that.
[07:22:36 | 4:10:28 PM] Runner number two is statistics, classical machine learning, and you can imagine fitting a line to a regression for a specific pattern.
[07:22:46 | 4:10:37 PM] This is very powerful because you can model much more complex relationships than just pure deterministic code, right?
[07:22:53 | 4:10:45 PM] And for even more complex relationships, the reason we're all here, LLMs, AI agents, that's another type of runner, right?
[07:23:00 | 4:10:52 PM] So for something like summarization, that's the state of the art, right?
[07:23:05 | 4:10:56 PM] It's probably totally impossible to build a bunch of if statements that can summarize better than a modern LLM.
[07:23:13 | 4:11:05 PM] And of course, people.
[07:23:15 | 4:11:07 PM] People are important runners in the system, right?
[07:23:18 | 4:11:09 PM] So imagine a function meeting the management team of a company.
[07:23:22 | 4:11:14 PM] I probably don't want to send, I mean, I like the new Unitary robots, but I probably don't want to send an LLM or an AI agent in to do that.
[07:23:29 | 4:11:20 PM] I probably don't want to send an if statement into that meeting.
[07:23:31 | 4:11:23 PM] I think there's many cases where because of judgment and the ability to navigate the real world and all of these things, a person is the best runner for a given piece of the function.
[07:23:43 | 4:11:34 PM] And I think this is like a super, super important point.
[07:23:46 | 4:11:37 PM] There is no glory in automating things for the sake of automating things.
[07:23:50 | 4:11:42 PM] The goal is not to take as many things and make them LLM as possible for us.
[07:23:54 | 4:11:46 PM] The goal is, for any given piece of this function, what can I do to maximize absolute quality?
[07:24:04 | 4:11:56 PM] And if you actually think about the function, it probably looks something like this.
[07:24:08 | 4:12:00 PM] It's probably not just a linear statement of a bunch of different things.
[07:24:12 | 4:12:03 PM] There's probably all kinds of branching logic and all kinds of ways to actually fork this.
[07:24:16 | 4:12:08 PM] So maybe I want to collect the information and then translate it.
[07:24:20 | 4:12:11 PM] And my main goal is to extract quotes and check those against sources to make sure that these are actually things that people said, and that's my approach.
[07:24:27 | 4:12:19 PM] But that might be totally wrong.
[07:24:29 | 4:12:20 PM] Maybe actually what I want to do is I want to dedupe, and then I want to filter, and then I want to pull external figures.
[07:24:34 | 4:12:26 PM] Or maybe I want to do something totally different.
[07:24:37 | 4:12:28 PM] I actually want to—I'm passing in a note first, and I actually just want to find other confirmatory data points.
[07:24:42 | 4:12:33 PM] Or maybe I'm training a red team.
[07:24:44 | 4:12:36 PM] There's a million different ways to configure this.
[07:24:46 | 4:12:38 PM] So yet again, more hyperparameters within the control flow, right?
[07:24:53 | 4:12:45 PM] So, so many ways to think about just this very simple problem: appending, filtering, summarizing, aggregating the news for LLMs.
[07:25:02 | 4:12:54 PM] And each of these boxes probably has an optimal runner, right?
[07:25:10 | 4:13:01 PM] So the optimal runner might be deterministic code for collection, right?
[07:25:15 | 4:13:07 PM] I'm pulling last 24 hours for a given source.
[07:25:20 | 4:13:11 PM] That's deterministic code.
[07:25:22 | 4:13:13 PM] Filtration, decision models maybe.
[07:25:25 | 4:13:17 PM] LLMs.
[07:25:26 | 4:13:17 PM] Statistical methods.
[07:25:28 | 4:13:19 PM] A combination, right?
[07:25:30 | 4:13:22 PM] So this probably understates the complexity.
[07:25:32 | 4:13:24 PM] The reality is most things are multi-runner.
[07:25:35 | 4:13:26 PM] Most things have deterministic code plus LLM plus statistical method, or a human with LLM in conjunction.
[07:25:42 | 4:13:33 PM] The reality is it's probably combinatorics between my four buckets, and there's even more buckets than that, because within the LLM category, I can tune the model.
[07:25:53 | 4:13:44 PM] I can choose big model, small model, medium model.
[07:25:56 | 4:13:47 PM] I can tune thinking effort: X high, high, medium.
[07:25:59 | 4:13:51 PM] I can tune harness.
[07:26:01 | 4:13:52 PM] I can choose the harness.
[07:26:02 | 4:13:53 PM] I can choose which skills load with the harness.
[07:26:03 | 4:13:55 PM] I can choose which hooks load with the skills.
[07:26:06 | 4:13:57 PM] So yet again, more hyperparameters within my search space.
[07:26:09 | 4:14:00 PM] I have an absolutely enormous amount of hyperparameters within my search space.
[07:26:13 | 4:14:04 PM] And this is just for this one tiny problem, right, of just filtering the news.
[07:26:17 | 4:14:08 PM] So the way to think about breaking down these problems is, what can I actually compartmentalize in a way that we can understand and evaluate?
[07:26:27 | 4:14:18 PM] Because that's what I'm hill climbing against, right?
[07:26:29 | 4:14:21 PM] Otherwise, I'm just tuning these things.
[07:26:30 | 4:14:22 PM] I'm, okay, well, that should actually be a machine learning system instead of an LLM.
[07:26:35 | 4:14:26 PM] That should be a little model that we train.
[07:26:36 | 4:14:28 PM] Oh no, that actually shouldn't be a model at all.
[07:26:38 | 4:14:30 PM] That should be an if statement.
[07:26:40 | 4:14:32 PM] Or, oh man, LLMs are really, really bad at translating that to portfolio impact.
[07:26:44 | 4:14:36 PM] It should really be a human on that step, but they're using a deterministic system to help them search and pull the information.
[07:26:51 | 4:14:42 PM] It could be all different things, right?
[07:26:53 | 4:14:45 PM] And if you don't have a North Star to hill climb against, you're just kind of, you're just fidgeting around.
[07:27:00 | 4:14:51 PM] And I think I cannot convey enough that this is just one tiny thing we do.
[07:27:05 | 4:14:57 PM] Imagine every single data source that we pull in, there's probably more than just three transformations to get them to the intermediate output.
[07:27:12 | 4:15:04 PM] So the actual graph of Co2 and funds like Co2, it actually probably looks—oh, not like this.
[07:27:20 | 4:15:12 PM] This is my screensaver.
[07:27:23 | 4:15:15 PM] The actual graph probably looks something like this, right?
[07:27:27 | 4:15:18 PM] It's probably massively complex.
[07:27:28 | 4:15:20 PM] In each of those nodes, we just talked about at least 10 hyperparameters with at least 20 different valid values for them.
[07:27:37 | 4:15:29 PM] So the search space is basically infinite.
[07:27:40 | 4:15:31 PM] And figuring out how to actually lay this out in a way that you can comprehend, both from a technical perspective, but also absorb culturally, organizationally, that is the great challenge of applying AI and investing.
[07:27:54 | 4:15:46 PM] And beyond investing.
[07:27:55 | 4:15:47 PM] What we're really talking about is creating a state machine that can take information from the world and understand it well enough to make coherent decisions.
[07:28:06 | 4:15:57 PM] There's use cases for this far and above wider than just investment firms, in policy, in nonprofits, in drug discovery, in corporate strategy.
[07:28:17 | 4:16:09 PM] I think one of the most exciting things for me about being in forums like this is talking to other people in different spaces with different problems that kind of congeal on the same problem space.
[07:28:28 | 4:16:19 PM] I'd love to keep talking about this.
[07:28:29 | 4:16:20 PM] I'll hang out in the hallway afterwards.
[07:28:31 | 4:16:22 PM] Here are my socials, and thank you everyone for your time.
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
[07:47:51 | 4:35:43 PM] Ladies and gentlemen, for our final talk of the day, please welcome to the stage the CEO of Noose Research, Dylan Rolnick.
[07:48:21 | 4:36:12 PM] Hey, everyone.
[07:48:33 | 4:36:24 PM] I'm Dylan Rolnick.
[07:48:34 | 4:36:25 PM] I'm the CEO of Noose Research, and today we're going to talk about building on foundations and platforms that you can actually own.
[07:48:43 | 4:36:35 PM] Oh, there we go.
[07:48:47 | 4:36:39 PM] All right.
[07:48:49 | 4:36:41 PM] How do you make back a cent-to-billion-dollar infrastructure and research bet?
[07:48:59 | 4:36:50 PM] Labs individually have spent hundreds of billions of dollars training and building ever more sophisticated intelligent systems, and the industry as a whole has spent trillions, perhaps.
[07:49:17 | 4:37:09 PM] The problem is, though, that the models have begun to commoditize.
[07:49:23 | 4:37:15 PM] You guys in this room, who are hopefully practitioners of AI, have known this intuitively.
[07:49:29 | 4:37:20 PM] You switch among models readily.
[07:49:31 | 4:37:22 PM] You switch between Astra, Fable, Opus, Kimi, whatever it may be.
[07:49:36 | 4:37:27 PM] Without too much regard for who's on the back end or what it may be, you want to try the new model.
[07:49:42 | 4:37:34 PM] We've seen this in data too.
[07:49:44 | 4:37:35 PM] There was some charts going around Twitter this week showing the average cost of a token going down while the total spent on tokens surges, and the infrastructure costs associated with serving those tokens has stayed flat, meaning
[07:50:01 | 4:37:52 PM] Where there used to be margin in a very, very performant model, it's now starting to narrow as we see competition and, you know, a baseline level of intelligence be available to people.
[07:50:14 | 4:38:06 PM] Okay, so if the models are starting to commoditize and you've spent hundreds of billions, trillions of dollars on them, you need to make that back, and you need to find a different way to do it.
[07:50:28 | 4:38:19 PM] And in my opinion, there are two pretty obvious ways to do it.
[07:50:33 | 4:38:24 PM] One, you find a different layer of the stack to compete at.
[07:50:36 | 4:38:27 PM] You go down to the infrastructure or you go up to the user.
[07:50:40 | 4:38:32 PM] Or two, you build God, and you build God faster than anyone else, and you monetize God.
[07:50:48 | 4:38:40 PM] If you're in front of the user, you have an opportunity for stickiness.
[07:50:52 | 4:38:43 PM] Stickiness means margin.
[07:50:54 | 4:38:45 PM] This is why the fight has largely shifted to the agent layer lately.
[07:50:57 | 4:38:49 PM] We started talking, I heard somebody previously talk about 5% of, you know, a workforce engaging in agents.
[07:51:04 | 4:38:55 PM] This is becoming more and more the zeitgeist of where the AI battle is taking place.
[07:51:10 | 4:39:01 PM] Consumers, though, are fickle and they're terrible customers.
[07:51:15 | 4:39:07 PM] Businesses, on the other hand, spend tons of money on tokens, and they have economically productive use cases for those tokens.
[07:51:24 | 4:39:15 PM] So if you're going to be competing at the user layer and you're going to be bringing this fight somewhere else, you're going to be bringing it to businesses.
[07:51:33 | 4:39:24 PM] The best thing to do is to get ingrained in a business because when you're in a business, it's hard to take you out, right?
[07:51:38 | 4:39:30 PM] And if you think about your business two, three years into the future, how much of your workforce, as measured by its output, is agentic, 70% conservatively, probably more.
[07:51:55 | 4:39:46 PM] And if 70% of your workforce is organized by somebody else who may or may not have adverse incentives to you, they can be organized into a strike.
[07:52:04 | 4:39:55 PM] And so what you would do if you had to make back a trillion-dollar investment was you would embed, you would use your asymmetric leverage, and you would change the rules of the game.
[07:52:16 | 4:40:07 PM] Or, like I said, you would build God.
[07:52:21 | 4:40:13 PM] If you succeed at building God, what you would do is you would point God at the most lucrative problems in the world.
[07:52:31 | 4:40:23 PM] The best shot at earning it back is not to sell it for an ever-decreasing margin to others to solve these hard and lucrative problems.
[07:52:38 | 4:40:30 PM] The best shot is to solve them yourselves.
[07:52:40 | 4:40:32 PM] Labs think that markets are solvable problems, and that's exactly how they view the financial industry, as a problem to be solved, and a tractable problem at that, perhaps not even a very hard one.
[07:53:08 | 4:40:59 PM] Right now, though, they know, at least the smart ones know, that they don't have enough context, know-how, or experience in the financial industry to be able to do that themselves.
[07:53:17 | 4:41:09 PM] So they will partner.
[07:53:19 | 4:41:10 PM] They hire investment banking analysts.
[07:53:20 | 4:41:12 PM] They partner with some of the biggest firms on the globe, and they start to build their foundation here.
[07:53:30 | 4:41:22 PM] My belief is that they will eventually go to the source because, like I said, that's where the money is, and we're trying to make back a trillion dollars.
[07:53:38 | 4:41:30 PM] And so you might say, this is nothing new.
[07:53:42 | 4:41:34 PM] We have always been trying to trap people into these games and change the margin.
[07:53:46 | 4:41:37 PM] And once we have you and you're stuck, we are able to raise the prices.
[07:53:50 | 4:41:41 PM] But the difference is that the stakes are much higher.
[07:53:52 | 4:41:44 PM] We're talking about meaningful deca percentages of the Earth's economy.
[07:53:59 | 4:41:51 PM] And you in this room need AI.
[07:54:06 | 4:41:57 PM] Everybody has seen what they can do, what these models can do, what agentic systems can do, and there's no going back.
[07:54:13 | 4:42:04 PM] People in this room who are making decisions, vice presidents and executives and engineers about what they're building on, are going to have to make decisions now about where they grow roots around these tools and processes that will affect the future of these businesses.
[07:54:32 | 4:42:24 PM] And whatever you pick, you'll start to harden.
[07:54:36 | 4:42:27 PM] You'll gain know-how.
[07:54:37 | 4:42:28 PM] It'll sop up the intelligence of the organization itself.
[07:54:40 | 4:42:32 PM] You will start to build processes and systems around it.
[07:54:43 | 4:42:34 PM] I implore you, do not build on quicksand foundations.
[07:54:48 | 4:42:39 PM] Build on open foundations.
[07:54:51 | 4:42:42 PM] Build on Hermes Agent.
[07:54:55 | 4:42:46 PM] So I just spent a fair amount of time convincing you, hopefully, that the highest expected value move in AI right now is to either trap you and jack up the prices or replace you directly.
[07:55:09 | 4:43:00 PM] So why am I standing here?
[07:55:13 | 4:43:05 PM] We view the world very differently.
[07:55:16 | 4:43:07 PM] And the first thing I hope you guys will learn about me and about Noose Research is that we built this company primarily for moral and philosophical reasons.
[07:55:26 | 4:43:18 PM] And a lot of times in business, morality and incentives don't always align.
[07:55:30 | 4:43:22 PM] And when that happens, it's probably easiest to change your morality.
[07:55:35 | 4:43:26 PM] But we think the world is changing and we think it's different.
[07:55:37 | 4:43:29 PM] And for that reason, we think that the best course of action is one in which we are both aligned.
[07:55:46 | 4:43:38 PM] When we built the company originally, we built it to combat a seemingly inexorable trend towards centralization and centralized control of perhaps the world's most important technology and most important invention.
[07:55:58 | 4:43:50 PM] Nus research was built by and staffed by nerds, nerds who love science fiction.
[07:56:04 | 4:43:55 PM] And we've all seen what happens when a centralized entity gets control of godlike intelligence and uses that for exploitation.
[07:56:12 | 4:44:04 PM] Skynet was, after all, a closed source company.
[07:56:18 | 4:44:09 PM] The next thing that you need to know is that there's no longer really a strong moat in proprietary software.
[07:56:25 | 4:44:16 PM] The marginal cost to reproduce a piece of software has plummeted.
[07:56:30 | 4:44:21 PM] A few months ago, xAI released Grok bots, and we saw that and we thought, wow, that's an intuitive user interface.
[07:56:37 | 4:44:28 PM] That's really nice.
[07:56:39 | 4:44:30 PM] So we pointed Hermes agent at it and we reproduced it in a weekend and released it as a feature within Hermes agent, open source, of course.
[07:56:48 | 4:44:40 PM] And the game has changed.
[07:56:50 | 4:44:42 PM] It used to be that software was difficult to produce and it took coordinated teams of engineers long hours to pilfer open source and take libraries and combine them together into proprietary pieces of software and then sell that software as SaaS.
[07:57:06 | 4:44:57 PM] But now the opposite is true.
[07:57:08 | 4:45:00 PM] Anything can be reverse engineered, and there are many, many motivated open source builders pointing their agents at these different.
[07:57:16 | 4:45:07 PM] Softwares.
[07:57:18 | 4:45:09 PM] If the closed competitors do manage to make interesting features, open source will have it not long afterwards.
[07:57:24 | 4:45:16 PM] The moats of yesterday were in proprietary IP.
[07:57:27 | 4:45:19 PM] The moats of tomorrow are in network effects, reputation, and reliability.
[07:57:34 | 4:45:25 PM] What's funny is that in a lot of ways, the labs have always seemed to underestimate their own tools, or perhaps they are underestimating the users of those tools and their genius and their motivation.
[07:57:46 | 4:45:38 PM] This happened and is happening on the model side, and we'll talk about why that's important.
[07:57:52 | 4:45:43 PM] But it turns out that models can fairly easily teach another model to be, you know, nearly as smart as the original model.
[07:58:01 | 4:45:53 PM] And the advantage in a model is very rarely in the architecture or some novel system that was created in a proprietary way for that model.
[07:58:10 | 4:46:01 PM] In fact, it's usually in the quality of the data and the scale.
[07:58:16 | 4:46:07 PM] And, sorry.
[07:58:21 | 4:46:13 PM] The model companies started to realize that the, you know, scale was catching up and that you could create these things with supplementary quality data by teaching one model from another.
[07:58:51 | 4:46:43 PM] So they labeled the teaching process distillation, and they labeled illicit distillation theft.
[07:58:58 | 4:46:50 PM] You cannot call that copyright infringement because copyright infringement would imply that you somehow took every living human being's written or creative work and then trained on top of it.
[07:59:09 | 4:47:01 PM] They also labeled the process of.
[07:59:13 | 4:47:05 PM] They also trained the models to not assist in the process of training other models, and they labeled that safety.
[07:59:27 | 4:47:19 PM] The next thing that you need to know about agents and about the new world is that agents are like operating systems, and they're like frameworks, and they're a lot more like those than they are like chatbots.
[07:59:39 | 4:47:31 PM] And so if you continue to think about your agent as merely a personal assistant, you will forever live on the surface of what it means to engage in agentic systems.
[07:59:49 | 4:47:40 PM] And so what do I mean by that?
[07:59:52 | 4:47:44 PM] If you guys were here a little bit earlier, there was a presentation about a financial firm and
[08:00:06 | 4:47:58 PM] firm and how they think about AI and these different inputs that go into ultimately what becomes an investment decision.
[08:00:11 | 4:48:02 PM] Agents are really at their heart a system that combines determinism and non-determinism.
[08:00:18 | 4:48:09 PM] If you remember from that talk, there are data sources, there are routine code, there are people's opinions, and there's judgment.
[08:00:25 | 4:48:16 PM] And all these things come together to create what is the new application.
[08:00:25 | 4:48:17 PM] The new application is no longer necessary that it is deterministic and solid and cold hard code.
[08:00:30 | 4:48:21 PM] It can inject intelligence, reasoning, judgment, all of these things together to combine to create the new application.
[08:00:39 | 4:48:30 PM] And so, as you at your company think about building these new applications, you should be building these systems on foundations that you own.
[08:00:52 | 4:48:43 PM] You should be able to swap in and out the models that you want.
[08:00:54 | 4:48:45 PM] You should be creating ever more sophisticated towers of functionality on top of these core primitives of determinism, non-determinism, code, data sources, judgment, reasoning, intellect.
[08:01:12 | 4:49:03 PM] But you should not be spending your entire lives being intelligence companies.
[08:01:19 | 4:49:10 PM] What has made you successful this far?
[08:01:21 | 4:49:12 PM] Most of you are most likely not agent companies.
[08:01:23 | 4:49:14 PM] Most of you are not likely AI companies.
[08:01:26 | 4:49:17 PM] You should be focused on the things that you do well.
[08:01:29 | 4:49:20 PM] And when the state of the art changes and it evolves and what it means to be an agentic system starts to shift, you should inherit that, not rebuild it and maintain it.
[08:01:39 | 4:49:30 PM] Remember, these are tools that should make you better.
[08:01:41 | 4:49:32 PM] They are not drop-ins to replace you.
[08:01:43 | 4:49:34 PM] Do you know how much energy it takes to create a human?
[08:01:49 | 4:49:40 PM] And the beauty of the Hermes agent proposition is that you can run it however you want, wherever you want.
[08:01:55 | 4:49:47 PM] Modify it as you see fit.
[08:01:57 | 4:49:48 PM] If you're not having fun anymore, you can take your ball and you can go home.
[08:02:01 | 4:49:52 PM] The moat has changed.
[08:02:03 | 4:49:54 PM] The moat is no longer entrapping you.
[08:02:05 | 4:49:56 PM] The moat is in reputation.
[08:02:08 | 4:49:59 PM] And that's what Hermes Agent offers you.
[08:02:11 | 4:50:02 PM] And so, what do I want out of all of this?
[08:02:15 | 4:50:06 PM] Well, I want to build a standard.
[08:02:18 | 4:50:09 PM] Hermes Agent today is the most used and downloaded open source agent in the world.
[08:02:23 | 4:50:14 PM] It is orders of magnitude more downloaded than some of its closed competitors.
[08:02:28 | 4:50:19 PM] And I want everybody to be able to build on these open foundations.
[08:02:33 | 4:50:24 PM] Because as long as one of us, us, is willing to open source these tools and these agentic systems, water will continue to flow downhill.
[08:02:42 | 4:50:33 PM] And I want to be downhill so that I can work with you to provide support, safety, scalability to go along with the world's best open agent.
[08:02:50 | 4:50:41 PM] I've seen where this goes, and we've seen where the moats will lie: network effects, reliability, and reputation.
[08:02:59 | 4:50:50 PM] People are going to continue to solve hard problems with agentic systems.
[08:03:04 | 4:50:55 PM] People are going to solve lucrative problems with agentic systems.
[08:03:08 | 4:50:59 PM] Somebody is going to earn back the trillion-dollar investments that we've made.
[08:03:12 | 4:51:03 PM] Make sure that it's you.
[08:03:14 | 4:51:05 PM] Make sure that you are in control of your own destiny.
[08:03:17 | 4:51:08 PM] You can have your cake and eat it too.
[08:03:19 | 4:51:10 PM] You can have state-of-the-art features and reliability without sacrificing your autonomy.
[08:03:23 | 4:51:14 PM] Build on something you own.
[08:03:25 | 4:51:16 PM] Build with us.
[08:03:26 | 4:51:17 PM] Thank you.
[08:03:28 | 4:51:19 PM] And now, for a few closing thoughts and remarks, please welcome back to the stage our MC and the managing partner at 10X, Alex Lieberman.
[08:03:38 | 4:51:29 PM] Okay, let's close this thing out.
[08:03:42 | 4:51:33 PM] Look at the range we just had in the last 30 minutes.
[08:03:45 | 4:51:36 PM] We had Pim talking about world models going from pixels to actions.
[08:03:49 | 4:51:40 PM] We had Dylan talking about building agents on owned versus rented land.
[08:03:54 | 4:51:45 PM] And then we had Frank talking about how they think about leveraging applied AI as it relates to making decisions around investments.
[08:04:00 | 4:51:51 PM] First of all, let's just give a round of applause to all the speakers.
[08:04:01 | 4:51:53 PM] Tevernu made the event possible and all the sponsors today.
[08:04:02 | 4:51:53 PM] And then two final housekeeping items before we close out the day.
[08:04:31 | 4:52:22 PM] First, very important one, go speak to humans.
[08:04:35 | 4:52:26 PM] That is housekeeping item one.
[08:04:37 | 4:52:28 PM] There's been incredible content covered today.
[08:04:40 | 4:52:31 PM] Again, that is surface area for you to be able to connect with others and live in edge city by having intellectually stimulating conversations.
[08:04:48 | 4:52:39 PM] Don't let the opportunity pass you by.
[08:04:50 | 4:52:41 PM] And then second, this is just one day of an amazing event.
[08:04:55 | 4:52:46 PM] So tomorrow things kick off again right before 9 a.
[08:04:58 | 4:52:50 PM] m.
[08:04:59 | 4:52:50 PM] So make sure you get here bright and early.
[08:05:01 | 4:52:52 PM] Thank you all for coming.
[08:05:02 | 4:52:53 PM] Thanks for having me, and see you tomorrow.
