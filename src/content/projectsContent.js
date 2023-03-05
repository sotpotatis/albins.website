/* projectsContent.js
Contains rich text content information about my projects.
Project IDs are linked to the IDs defined in the project texts (see projectsTexts.js) */
import { openURL } from '../libraries/util.js';

const projectsContent = {
	skyspy: {
		title: 'SkySpy',
		icons: ['python', 'javascript', 'django', 'react', 'tailwind', 'kicad'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `My weather station project SkySpy is my graduation project from high school ("gymnasium" in the Swedish school system). It features a full weather station system platform, including
                code for a backend, a frontend, and code for sensor nodes. The scope of the project also included manufacturing custom PCBs and cases.
                It is one of my biggest projects so far and I will update this section more when the project has been completed and graded!`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'Sensor node'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `The sensor node includes a Raspberry Pi Zero connected to a custom PCB which includes a voltage divider as well as an analog-to-digital IC, which allows analog sensors
                    with a logic level of 5V to be read. Different sensors are attached by stacking boxes with sensors inside and connecting these boxes (which also includes a custom PCB) to the sensor node
                    via a universal 13-pin connector. Each box also has a custom built PCB. PCBs were designed using KiCad.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'Backend'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I built a backend using Django that receives sensor data and stores it in a PostgreSQL database. I wanted to give GraphQL a try, so the exposed data reporting
                    and data-retrieving API uses it.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'Frontend'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `To visualize data and make it human-readable, I created a frontend UI using React and Tailwind CSS. The UI has three subpages that allows you to overview data,
                     graph it, and find trends.`
				}
			}
		]
	},
	lunchmenu: {
		title: 'Lunch Menu APIs',
		icons: ['python', 'flask', 'tailwind'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `In both of the schools I have attended so far, I have hosted services for finding out the daily lunch menu. These services have included
                automatically retrieving lunch menus from online sources and presenting them across a variety of different platforms.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'EateryCacher (Stockholm Science & Innovation School)'
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/eatery_cacher_website.png',
					alt: 'Screenshot showing the EateryCacher website.',
					caption: 'Screenshot of API documentation.'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `In Stockholm Science & Innovation School, the lunch menu is served by a restaurant chain named Eatery. There was a great service another student
                provided which used OCR, but when they changed their menu format, it stopped working and I started providing my own API which downloads the menu content as HTML
                strings from the chain (Eatery's) own API which is then parsed and sorted into different days. The API has been requested over 10k times and is open source.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Aspurangen Robot (Aspuddens Skola)'
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/aspurangen_robot_screenshots.png',
					alt: 'Screenshot showing the Aspurangen Robot website and a demonstration of the Facebook Messenger bot.',
					caption: 'Screenshot of website and Messenger chatbot.'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `My first 10 years of school was spent in Aspuddens Skola. The menu there was quite unavailable - it was sometimes not put up in front of the school restaurant, for example.
                I relied on a combination of photographing and transcribing the physical menu and copying the menu from the school learning platform, "Skolplattformen". The menu was then retrieved from
                a Google Sheets where I put the menus. The menu was then made available via a website, via several social media chatbots and of course via an API. The website also contained statistics such as
                if the dish was served before (and if so, how often).`
				}
			}
		]
	},
	dishwatcher: {
		title: 'DishWatcher',
		icons: ['python', 'micropython', 'flask', 'tailwind'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'Problem'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `In my school, classes take turns in taking care of the common pentries. This involves loading and unloading the dishwasher.
                    Often, dishwashers are either full or empty with no one taking care of it because people don't know when the dishwasher is full or
                    when it is done.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'Solution'
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Sensor'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `The solution was a sensor called "DishWatcher", which is capable of tracking the current status of a dishwasher by using a motion sensor
                    to sense when the lid has been opened and by using a photodiode to sense whether the dishwasher is running or not. The sensor was built using a
                    PyCom microcontroller programmed with MicroPython together with a custom PCB.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Web server'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I set up a Flask web server which exposed an API and a frontend where
                    you could visualize find the data. The API both provided processed/parsed and raw sensor data from the motion and photodiode sensors,
                   opening up a lot of possibilities.`
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/dishwatcher_website.png',
					alt: 'Screenshot showing the DishWatcher home page.',
					caption: 'Screenshot of website home page.'
				}
			}
		]
	},
	fitbit_apps: {
		title: 'Fitbit Apps',
		icons: ['javascript'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `After getting a Fitbit device for Christmas, I started tinkering around with their SDK and I am still doing that to this date.
                    This section will therefore most likely be filled up with more cool apps.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'SSIS Fitbit app'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `An app that shows the lunch menu and the schedule for Stockholm Science and Innovation School, right on your wrist!
                    This app takes use of an API I created for retrieving the lunch menu as well as the school's own API for retrieving the schedule.`
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							icon: 'ic:baseline-download',
							text: 'Download',
							onClick: () => {
								openURL('https://gallery.fitbit.com/details/8c504a85-a012-43f9-b302-378a9396a3e1');
							}
						},
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							onClick: () => {
								openURL('https://github.com/sotpotatis/ssis-fit');
							}
						}
					]
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Fitbit app boilerplate'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I learned a lot from my first Fitbit app, the SSIS Fitbit app, and when writing it, I came up with several helper
                    functions for handling screen switches, message splitting, etc. I therefore forked the app and created a boilerplate for future projects
                    using these implementations, which is available on my GitHub.`
				}
			}
		]
	},
	lastfmbpm: {
		title: 'Last.FM BPM statistics',
		icons: ['javascript', 'tailwind'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I use a service called Last.FM for tracking my music and getting statistics based on what I have listened too.
                    There are lots of cool third-party tools for Last.FM, but I found none that could analyze and graph the BPM of stuff
                    that you played. I therefore created a project that uses the Spotify API, which provides BPM statistics, from a set
                    time period of played ("scrobbled" in Last.FM terms) music.`
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/lastfm_bpm_website.png',
					alt: 'Screenshot showing the Last.FM BPM website.',
					caption: 'Screenshot of website.'
				}
			},
			{
				type: 'button',
				attributes: {
					text: 'Open website',
					onClick: () => {
						openURL('https://lfmbpm.sweetpotato.online');
					}
				}
			}
		]
	},
	estetik: {
		title: 'Creative portfolio (Estetik)',
		icons: ['javascript', 'svelte', 'tailwind', 'express'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I have always had a photography interest but expanded it to analog film in 2022. Therefore, I created a website to showcase my creative
                    work. It has presets for music and text, but those sections are currently empty 😜. The project is divided into three parts.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'API'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I wanted to learn Express.js, so I created an API capable of uploading as well as retrieving image and other content. The API
                    acts as a media server which also serves the image content. Media is categorized and page content is served in a "blocks"-type style, allowing
                    you to get creative freedom just in the media you originally created the content in.`
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/estetik.png',
					alt: 'Screenshot showing the Estetik website.',
					caption: 'Screenshot of website.'
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Website'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I created a website using Svelte which requests the API and shows the photography, texts, music, or whatever one has set up the API to serve.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Automation scripts'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `The project also includes a Python API client and a Discord bot for managing images.`
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'Open website',
							onClick: () => {
								openURL('https://animated-stardust-94cb77.netlify.app/');
							}
						}
					]
				}
			}
		]
	},
	discord_bots: {
		title: 'Discord Bots',
		icons: ['python'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `Throughout the years, various ideas of fun things to create messaging bots for have popped up. My repertoire therefore includes
                    lots of Discord bots!`
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/20alse_homework_management_bot.png',
					alt: 'Screenshot showing an example response from the 20alse homework bot when asking to add information about a new homework.',
					caption: 'Example when adding a new homework.'
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'SSIS Discord Bot'
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/ssis_bot.png',
					alt: 'Screenshot showing an example response from the SSIS bot related to club subscription.',
					caption: 'A club subscription system is included the SSIS bot.'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I was asked to create a bot for my school's Discord server and accepted the offer. The bot can post messages about the daily menu,
                    handles subscriptions to notification roles for school club information, shows information about who has responsibility for the school pentries,
                    and responds to "Good morning" messages.`
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/ssisrelateddiscordbot');
							}
						}
					]
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'TE20A Bot'
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/te20a_bot.png',
					alt: 'Screenshot showing an example response from the TE20A bot.',
					caption: 'Example menu command response from the bot.'
				}
			},

			{
				type: 'paragraph',
				attributes: {
					text: `The Discord bot mentioned above was made for my whole school. The TE20A bot is made for my class. It can also post lunch menu information just like the first bot,
                    but it also sends schedule information and information about homework. The bot also includes lots of fun and random commands, because you also have to have some fun, right?`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'PolicemanBot'
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/policeman_bot.png',
					alt: 'Screenshot showing an example where PolicemanBot is protecting a channel.',
					caption: 'Example of a channel that is password-protected by the bot.'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `An open-source bot I created for locking down Discord channels with a password. PolicemanBot handles authorization and stores the correct
                    password in an encrypted format so it is safe and sound.`
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/DiscordPasswordBot');
							}
						}
					]
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: '20alse homework management bot'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `TE20A Bot, which you can read about above, can send homework information. This information is retrieved from a JSON file where I add homework
                    and exams that are due. To make the process a little easier, I created a Discord bot which has an interactive flow which asks for homework details and then
                    uploads the file via SFTP.`
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/ssis_schedule_bot.png',
					alt: 'Screenshot showing an example response from the SSIS schedule bot.',
					caption: 'Example schedule command response from the bot.'
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'SSIS Schedule Bot'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `An unfinished Discord bot which can send schedule information for the Stockholm Science and Innovation School. It has notifications you can subscribe too (so you get
                    a message when a lesson starts). It also supported getting distance education links during Covid-19. Thankfully, those days are over!`
				}
			}
		]
	},
	customipsum: {
		title: 'Custom Ipsum',
		icons: ['javascript', 'tailwind', 'react'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `Inspired by alternate, sometimes humorous, Lorem Ipsum-like generators such as the Swedish Löksås Ipsum and funny
                    English ones such as Bitcoin Ipsum and Buzzword Ipsum, I wanted to create my own generator which to date contains three different
                    word sets and some options like how many paragraphs you want to generate.`
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/customipsum.png',
					alt: 'Screenshot showing the Custom Ipsum website',
					caption: 'Screenshot of the main website'
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/customipsum');
							}
						},
						{
							text: 'Website',
							color: 'blue',
							onClick: () => {
								openURL('https://ipsum.albins.website');
							}
						}
					]
				}
			}
		]
	},
	personal_website: {
		title: 'Personal website',
		icons: ['javascript', 'tailwind', 'svelte'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `This website is also a coding project! It is programmed using Svelte as a framework and does tons of stuff under-the-hood.
                    For example, the text that you are now reading is loaded from a JavaScript file and then rendered dynamically. The website is designed
                    using Tailwind. It is completely open source if you want to explore the code.`
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/albins.website');
							}
						}
					]
				}
			}
		]
	},
	tisseltassel: {
		title: 'Tisseltassel',
		icons: ['javascript', 'netlify_functions'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `If I'm currently playing any music, you can see what I am playing by clicking a note icon which will show up next to the image of me
                    on the top of this website. To get my last played music (and if I am playing any) is done by using the Last.FM API. However, a problem is that I
                    didn't want to expose an API key (of course). I therefore created a project using Netlify functions that acts like an API gateway. I've chosen to
                    call it Tisseltassel.`
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/tisseltassel');
							}
						}
					]
				}
			}
		]
	},
	notion_stuff: {
		title: 'Note-taking tool automation',
		icons: ['python', 'flask'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `In late 2022, I tried switching from Obsidian to Notion as my digital note-taking tool. I realized I found several advantages with Notion,
                    such as its powerful API, and therefore decided to switch to it. This switch involved me writing several automations so that Notion became more powerful
                    to me. After all, that's what you want to achieve with code. Make it powerful to you!`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'NotesTionSync'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I love taking notes on paper, but I always scan them digitally to have a copy in the cloud. My cloud of choice has been Google Drive. To completely
                    connect my digital notes and my analog ones, I made a script that sorts my digital scans based on tags in the title as well as links them to the Notion database
                    where my digital notes are as well. Massive productivity!`
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/notes_to_notion.png',
					alt: 'Screenshot showing how my analog notes appear when synced with Notion.',
					caption: 'My analog notes, all synced up!'
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/notestionsync');
							}
						}
					]
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Notion to iCal'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `The next step was to get my to-do list integrated into Notion as well. Getting it to work inside Notion was no problem, but I wanted the list to be
                    available outside Notion. More specifically; in my calendar. I couldn't find reliable free tools to do it and I wanted some control myself, so I ended
                    up writing a script that creates and hosts iCal files that contains my items.`
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/notion_ical_sync.png',
					alt: 'Screenshot showing a calendar event synced with my Notion.',
					caption: 'My calendar with an event from the iCal sync!'
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/notion-to-ical');
							}
						}
					]
				}
			}
		]
	},
	ssis_lunch_menu_react_native: {
		title: 'SSIS Lunch Menu React Native',
		icons: ['javascript', 'react'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I found myself comfortable in how to use React, so I wanted to learn React Native. The result is an app with build targets for iOS, Android and web
                    that shows the lunch menu in my school (Stockholm Science and Innovation School)`
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/ssis_lunch_menu_app');
							}
						}
					]
				}
			}
		]
	},
	discord_rpcs: {
		title: 'Discord RPCs',
		icons: ['python'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `Just like Discord bots, I have created several Discord RPCs. RPC stands for Rich PresenCe and shows up in your Discord status
                    so you can show what you're playing or doing.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Volumio Discord RPC'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I sometimes use Volumio (a music server) for playing music from my library, so I created a Discord Rich Presence for it that shows what
                    is currently playing on my Volumio server.`
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/VolumioRPC');
							}
						}
					]
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/last_fm_discord_rpc.png',
					alt: 'Screenshot showing the Last.FM Discord RPC showing up in my Discord status.',
					caption: 'The Last.FM Discord RPC in the Discord app.'
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Last.FM Discord RPC'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I use a service called Last.FM for tracking what music I am currently playing, so I created a Discord RPC that shows any currently- or recently
                    played tracks. It includes buttons as well as dynamic images which is cool futuristic Discord API stuff. I use this presence daily on several computers.`
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/Last.FMDiscordRPC');
							}
						}
					]
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'SSIS Discord RPC'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `A rich presence showing what current lesson (if any) that you are attending by using the schedule API for my school, Stockholm Science and Innovation School.
                    An unreleased upgrade of this project included a tray icon where you could customize settings for the app.`
				}
			}
		]
	},
	pentryansvar: {
		title: 'Pentryansvar API',
		icons: ['python', 'fastapi'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `In my school, different classes are responsible for cleaning the common pentries and taking care of chores such as
                    emptying the dishwasher. I created an API that uses data from the school's schedule API which is then parsed to distinguish
                    details such as which persons in a class are responsible since the school didn't provide that in a consistent human-readable
                    format. The API server uses FastAPI.`
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/SSISPentryAnsvarServer');
							}
						}
					]
				}
			}
		]
	},
	placeholdy: {
		title: 'Placeholdy',
		icons: ['python', 'flask'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I wanted to create my own tool for generating placeholder images, so I did. My version, "Placeholdy", can generate neutral placeholder images
                    with customizable sizes and colors. I'm using Flask as the server, the Pillow library for image generation and I also tried using Pydantic for input validation.
                    It proved to work great, so I'm happy I tried it!`
				}
			},
			{
				type: 'image',
				attributes: {
					source: 'https://placeholdy.fly.dev/placeholder?width=1024&height=256',
					alt: 'How the placeholder images that the tool generates looks like',
					caption: 'An example of a generated placeholder image.'
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Documentation'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `For the documentation page, I also tried something new, and used the Pico CSS framework for styling. It was also quite cool!`
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/placeholdy');
							}
						},
						{
							text: 'Website',
							color: 'blue',
							onClick: () => {
								openURL('https://placeholdy.fly.dev');
							}
						}
					]
				}
			}
		]
	},
	fishy: {
		title: 'Fishy',
		icons: ['csharp', 'monogame'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `We learned C# ín school for the course Programming 1, and the final assignment was to create a game using the game engine MonoGame. While Fishy has its problems and bugs,
                    such as the hitboxes being weird, it not responding correctly to scaling etc., it is a A-grade game for the course. And it has got a charming fisherman greeting you!`
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/fishy_title_screen.png',
					alt: 'Screenshot showing the title screen of my game Fishy.',
					caption: 'Screenshot of title screen.'
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/fishy_instructions.png',
					alt: 'Screenshot showing the instructions screen of my game Fishy.',
					caption: 'Screenshot of instructions.'
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/fishy_gameplay.png',
					alt: 'Screenshot showing the gameplay of my game Fishy.',
					caption: 'Screenshot of gameplay.'
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/FishGame');
							}
						},
						{
							text: 'Download',
							icon: 'ic:baseline-download',
							color: 'blue',
							onClick: () => {
								openURL(
									'https://github.com/sotpotatis/FishGame/releases/download/v1.0.0/FishGame.exe'
								);
							}
						}
					]
				}
			}
		]
	},
	homeassistant: {
		title: 'Home Assistant',
		icons: ['home_assistant', 'node_red', 'esphome'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I have a big interest for smart home, IoT and home automation technologies. My room is fully automated and contains a big number of IoT devices from various different vendors and of various different technologies -
                    433Mhz, Z-wave, Zigbee, Tuya Smart, and others. I run a Home Assistant instance to connect these technologies together and to run complex automations such as waking me up earlier if there are deviations at the nearest bus stop
                    and use data from multiple humidity sensors connected to a humidifier to ensure that my indoor climate is perfect.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Experience'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I am experienced with the basics of multiple smart home techniques as well as setting up, configuring and maintaining a Home Assistant system. I am experienced with Home Assistant automation both in the 
                    built-in editor and in Node:Red. I am also experienced with using and installing third-party addons such as HACS.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'ESPHome'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `Multiple of my sensors are microcontrollers that run the software ESPHome. I use ESPHome to do multiple things. I have used it in the past to measure CO2 concentration, but I am now using these sensors for my personal
                     weather station project which you also can read about on this website. Currently, I am using it for
                    measuring the moisture level in the soil of my plants and to track nearby Bluetooth devices.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Motorized curtain'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `One of the coolest smart home devices I own must be the automatic curtain from the Swedish website M.nu. It can automatically roll up and down my curtains in the morning
                    and in the evening via 433Mhz!`
				}
			}
		]
	},
	pcb_manufacturing: {
		title: 'PCB manufacturing',
		icons: ['kicad'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `Over the years, I have designed multiple PCBs and had them manufactured. I have also gotten to try PCB manufacturing.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Experience'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I can do PCB designing in KiCad. I also know the basics of how PCB manufacturing is done and I have tried operating a milling machine.`
				}
			}
		]
	},
	electronics: {
		title: 'Electronics',
		icons: ['ground', 'ic', 'micropython', 'raspberry_pi', 'arduino', 'esp32'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I have a big interest for electronics and microcomputers that do stuff. In my room, I have boxes and boxes filled with various electronic components,
                    electronic tools, lab cables, sensors, you name it.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Experience'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I am experienced with basic electronics principles, assembling circuits, and working with sensors and other components that use technologies such as I2C and UART. I have experience writing
                    drivers for such devices in languages like Python and Micropython. I know soldering.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Project examples'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I mention several uses of electronics on this page! For example, see my weather station project and my dishwasher tracking project.`
				}
			}
		]
	},
	'3d_modelling': {
		title: '3D modelling',
		icons: ['fusion_360'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I love my 3D printer which I got as a birthday gift. It truly is amazing and I use it a lot.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Experience'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I am familiar with 3D modelling in Fusion 360 and operating 3D printers.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Project examples'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `See my weather station project and my dishwasher tracking project for examples of 3D modelling.`
				}
			}
		]
	},
	computer_building: {
		title: 'Computer building',
		icons: ['screwdriver', 'amd'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `After staring to study technology, I learnt how computers worked and how to build one. So, I decided to build a cheap server computer that I use for virtualizing
                    multiple operating systems.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Collie'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `When picking out parts for the computer, the part picking website named it "Collie" automatically. I decided that it was a great name for my computer.
                    Collie uses cheap hardware but is a really bang-for-the-buck server in my opinion. I think it is amazing for what hardware it has.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h5',
					text: 'Specs'
				}
			},
			{
				type: 'list',
				attributes: {
					entries: [
						'AMD Athlon 3000G',
						'8GB RAM',
						'Silverstone SUGO SG13 case',
						'ASRock Fatal1ty B450 motherboard',
						'Running Proxmox as operating system'
					]
				}
			}
		]
	},
	lightshow_automation: {
		title: 'Lightshow automation',
		icons: [],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `A yearly tradition is a Christmas lightshow which is programmed by me.`
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Experience'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `I am experienced programming light shows using Vixen and installing, setting up and maintaining the lightshow player Falcon Pi Player.
                    Previous years, I have also used a software called LightshowPi. Both programs have been running on a Raspberry Pi.`
				}
			}
		]
	},
	latex_formula_generator: {
		title: 'Formula generator',
		icons: ['javascript', 'tailwind'],
		contentBlocks: [
			{
				type: 'heading',
				attributes: {
					size: 'h3',
					text: 'About'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `In 2022, I was introduced to LaTeX for mathematical notes. One place where I have used it is to write down formulas for my physics class.
                    However, I found it tedious to write variable "explanations" next to the formula in LaTeX that said what each variable in the formula meant.
                    So, I wrote an online tool that generates these explanations automatically.`
				}
			},
			{
				type: 'image',
				attributes: {
					source: '/project_images/formula_generator.png',
					alt: 'Screenshot showing the formula generator website.',
					caption: 'Screenshot of the website.'
				}
			},
			{
				type: 'heading',
				attributes: {
					size: 'h4',
					text: 'Parcel'
				}
			},
			{
				type: 'paragraph',
				attributes: {
					text: `Except for a school project, this was one of the first projects where I tried using a bundler.
                    I used Parcel as a bundler to serve the JavaScript, HTML and CSSa files as well as to minify them.`
				}
			},
			{
				type: 'buttons',
				attributes: {
					buttons: [
						{
							text: 'GitHub',
							icon: 'radix-icons:github-logo',
							color: 'black',
							onClick: () => {
								openURL('https://github.com/sotpotatis/formulagenerator ');
							}
						},
						{
							text: 'Open website',
							color: 'blue',
							onClick: () => {
								openURL('https://formulas.albins.website');
							}
						}
					]
				}
			}
		]
	}
};
export default projectsContent;
