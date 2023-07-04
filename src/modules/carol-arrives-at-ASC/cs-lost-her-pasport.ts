import make from '../../core/util/make'

const lostPasport = make.module({
    id: 'Lost-pasport',
    submodules: [],
    convoSegments: [
        {
            id: 'miss-pasport',
            convo: [
                {
                    type: 'text',
                    text:
                        'Once upon a time, there was a woman named Carol who found herself in a bustling city. Carol, a seasoned traveler, had just arrived at her general destination and stepped out of the taxi. Little did she know that her journey was about to take an unexpected turn. As Carol closed the taxi door, she reached into her pocket to grab her phone, only to realize it wasn\'t working. Panic set in as she realized she had no way to contact anyone or navigate through the unfamiliar streets. With a heavy heart, she started walking, hoping to find some help or a familiar landmark. As Carol delved deeper into her metaphorical exploration, she unraveled five fundamental ideas about neural network architectures: Idea 1: Feed-forward network - The feed-forward network represents Carol\'s desire to move forward and find a solution to her predicament. Just like the network processes input and produces an output, Carol seeks a practical solution to her lost passport and phone issues. Idea 2: 2D convolutional network -The 2D convolutional network relates to Carol\'s need to make sense of the complex situation she finds herself in. Similar to how the network analyzes spatial patterns in images, Carol wants to extract meaningful information from her surroundings to navigate her way through the unfamiliar streets. Idea 3: Recurrent network - The recurrent network aligns with Carol\'s realization that her journey is not just a series of isolated events but a sequence of interconnected experiences. Just as the network processes sequential and time-dependent data, Carol wants to understand the sequence of events that led to her current predicament. Idea 4: Generative adversarial network (GAN) - The GAN represents Carol\'s yearning for a creative solution to her problems. Like the generator in a GAN creates realistic samples and the discriminator distinguishes real from fake, Carol seeks an innovative approach to address her loss and find a way forward. Idea 5: Selection of appropriate architecture - The story highlights the importance of selecting the appropriate neural network architecture to tackle specific challenges. Carol recognizes that choosing the right architecture can greatly impact her chances of finding a solution and overcoming her current predicament.',
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'choosetopic',
            convo: [
                {
                    type: 'text',
                    text:
                        "Choose a topic to explore",
                },
            ],
            choices: [
                {
                    text: "Feed-forward network",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['availability'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "2D convolutional network",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['desiredoutput'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Recurrent network",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['nature'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Generative adversarial network (GAN)",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['trade-offs'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Selection of appropriate architecture",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['requirements'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Go to Cascade",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['gohome'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'availability',
            convo: [
                {
                    type: 'text',
                    text: `Once upon a time, there was a woman named Carol who embarked on an adventurous journey to a distant land. As she stepped out of the taxi at her general destination, a wave of excitement and anticipation washed over her. However, her excitement quickly turned into worry when she realized her phone was not working. In that moment, a feeling of unease settled in her chest. Lost in a foreign city, Carol\'s anxiety heightened when she reached for her passport and discovered it was nowhere to be found. Panic crept into her thoughts as she pondered how to navigate this unexpected setback. Determined to find a solution, she remembered the metaphor of a feed-forward network, a concept she had come across in her study of artificial intelligence. Just like a feed-forward network processes information in a unidirectional manner, Carol understood that she needed to tackle her challenges step by step. She realized that the feed-forward network could serve as her guide, helping her break down her complex problem into manageable pieces. Carol decided to approach her predicament with a systematic mindset, addressing each obstacle in a sequential manner. She started by searching for nearby landmarks to orient herself and find a place with internet access. Carol\'s objective was clear—to restore communication and retrieve her lost passport. Like the input signals in a feed-forward network, she gathered information from various sources, including asking locals for directions and seeking assistance from nearby establishments. With each step forward, Carol made progress, using her resourcefulness and problem-solving skills to overcome hurdles. Just as the feed-forward network optimizes its performance through learning and adjustment, Carol adapted her approach based on the information she gathered. She employed trial and error, eliminating potential solutions that didn\'t yield the desired outcome. As the story unfolds, Carol\'s journey continues, and she encounters additional challenges that require the application of other neural network architectures, each with its own unique metaphorical significance. But for now, the feed-forward network serves as her guiding light, helping her navigate the intricacies of her situation and paving the way for her eventual triumph.`,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'desiredoutput',
            convo: [
                {
                    type: 'text',
                    text: 'Just as Carol prepared to immerse herself in the vibrant atmosphere, she realized that her phone had mysteriously stopped working. Panic washed over her, realizing she had lost her primary means of communication and navigation. Feeling a sense of vulnerability, she frantically searched her belongings, hoping to find a solution. In that moment of distress, a metaphorical concept came to Carol\'s mind—the 2D convolutional network. Like the intricate layers of a neural network, Carol understood that her problem required a different approach—one that could extract meaningful information from complex and interconnected data. Drawing inspiration from the 2D convolutional network, Carol began to view her surroundings with a fresh perspective. She examined the cityscape as if it were a series of two-dimensional images, each holding potential clues and patterns that could guide her. Just as the convolutional network scans and analyzes images for distinctive features, Carol meticulously observed her environment, searching for landmarks, signs, and recognizable patterns. With her newfound perspective, Carol noticed a nearby police station. Recognizing it as a potential source of assistance, she approached them, explaining her situation and the loss of her passport. The police officers, empathetic to her predicament, offered their support and connected her with the necessary resources to resolve her situation. In this metaphorical journey, the 2D convolutional network represented Carol\'s ability to perceive and extract relevant features from her surroundings, just as the network identifies distinctive patterns within images. By leveraging this concept, Carol successfully adapted her problem-solving approach, demonstrating the power of observation, pattern recognition, and analysis in the face of adversity. As the story continues, Carol encounters further challenges, each requiring a different neural network architecture as a metaphorical guide. But for now, the 2D convolutional network has paved the way for her to regain her sense of security and embark on her adventure once again, equipped with a newfound appreciation for the underlying principles of artificial intelligence.',
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'nature',
            convo: [
                {
                    type: 'text',
                    text: `As Carol stepped out of the taxi at her general destination, a sense of excitement filled the air. She had planned to document her adventure and share it with her loved ones back home through her phone. However, to her dismay, she realized that her phone had stopped working. Panic washed over her as she realized she had lost her primary means of communication and connection. In that moment of distress, a metaphorical concept came to Carol\'s mind—the recurrent network. Like the intricate connections within a neural network, Carol understood that her problem required a different approach, one that could capture the sequential nature of her experiences and make sense of the unfolding events. Drawing inspiration from the recurrent network, Carol began to view her journey as a series of interconnected moments, each building upon the previous one. Just as the recurrent network learns from the past and carries forward information, Carol reflected on her experiences and interactions leading up to this point, searching for any hints or clues that could help her overcome her current predicament. With the realization that she had lost her passport, Carol felt a surge of worry. Without proper identification, her travel plans were in jeopardy. However, tapping into the metaphorical power of the recurrent network, Carol engaged in a process of mental time travel. She retraced her steps, revisiting the places she had been, the people she had encountered, and the conversations she had engaged in. Through this recursive thought process, Carol was able to recall a moment when she last remembered having her passport—a coffee shop where she had stopped to rest. With a renewed sense of determination, she retraced her path and returned to the coffee shop, hoping that someone had found her passport and turned it in. As she entered the coffee shop, Carol\'s heart raced with anticipation. To her great relief, the barista recognized her and handed her passport back. Overwhelmed with gratitude, Carol realized that her ability to recall and analyze sequential information had played a crucial role in finding her lost passport. In this metaphorical journey, the recurrent network symbolized Carol\'s capacity to learn from the past, draw connections between events, and make informed decisions based on the sequential nature of her experiences. By leveraging this concept, Carol successfully navigated the twists and turns of her adventure, demonstrating the power of memory, context, and temporal understanding in the face of unexpected challenges. As Carol continued her journey, she knew that each neural network architecture she encountered would offer new insights and metaphors, allowing her to overcome obstacles and grow along the way. And with the spirit of a recurrent network guiding her, she embarked on her adventure with renewed optimism, ready to embrace the unknown and forge her path ahead.`,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'trade-offs',
            convo: [
                {
                    type: 'text',
                    text: `As Carol stepped out of the taxi at her general destination, a wave of excitement washed over her. She had planned to capture the essence of the city through the lens of her phone, eager to immortalize its vibrant streets and captivating landscapes. However, to her dismay, she discovered that her phone had mysteriously stopped working. It seemed that her ability to capture and share her experiences had come to an abrupt halt. In that moment of frustration, Carol\'s mind became a canvas, painting a metaphorical representation of the AI concept known as a generative adversarial network (GAN). Just as a GAN consists of two opposing components, a generator and a discriminator, Carol realized that her problem required a creative solution, one that involved generating something new and unexpected. Drawing inspiration from the GAN, Carol embraced the challenge and set out on a quest to create her own unique interpretation of the city. She embarked on a journey of observation, keenly observing the people, the architecture, and the natural elements that surrounded her. In her mind, she constructed a vivid mental image of the city, pixel by pixel, capturing its essence and intricacies. Like the generator in a GAN, Carol used her imagination to generate new perspectives and artistic representations of the city. With each stroke of her mental brush, she added layers of detail and depth, creating a world that reflected her unique vision. The city came to life through her mind\'s eye, becoming a masterpiece of her own creation. However, just as a GAN requires feedback and evaluation from the discriminator, Carol understood that her artwork needed an external perspective to refine and validate its authenticity. She sought out the guidance of local artists and fellow enthusiasts, sharing her vision and seeking their insights. Their constructive criticism and appreciation acted as the metaphorical discriminator, helping Carol refine her artistic expression and bring her creation closer to perfection. Through the metaphor of the generative adversarial network, Carol transformed her frustration into artistic exploration. She discovered the power of her imagination and the ability to generate something meaningful and unique, even in the face of technical limitations. In the absence of her phone\'s camera, she had unlocked a hidden talent and a new way of perceiving the world around her. As Carol continued her journey, she carried the spirit of the generative adversarial network with her, always seeking to generate and refine her artistic creations. With each step, she became more confident in her ability to see the beauty in the unexpected and transform it into something extraordinary. And though her phone remained silent, Carol\'s artistic spirit flourished, proving that sometimes, the greatest creations arise from the depths of our own imagination.`,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'requirements',
            convo: [
                {
                    type: 'text',
                    text: `One sunny day, Carol decided to embark on a thrilling expedition to a remote destination. As she stepped out of the taxi at her general destination, her excitement was palpable. With her phone in hand, she intended to document every captivating sight and create a visual story that would transport her and others back to that enchanting place. However, to her dismay, Carol discovered that her phone had stopped working. Panic washed over her as she realized that not only could she not capture the beauty around her, but she also couldn\'t use the phone to resolve a sudden crisis. In that moment of distress, Carol\'s mind became a whirlwind of thoughts, and she stumbled upon a metaphor that explained the AI concept of selecting the appropriate neural network architecture. The selection of the appropriate architecture for a neural network is like choosing the perfect tool for a specific task. Just as Carol needed to find a solution to her predicament, she needed to identify the right tool from her metaphorical toolbox to address her phone\'s malfunction and passport loss. In her metaphorical toolbox, Carol had several neural network architectures at her disposal. The first one was the feed-forward network, which she compared to a reliable and straightforward tool, similar to a trusty screwdriver. This architecture was ideal for tasks that required mapping inputs to outputs without any feedback loop or memory. The second tool in Carol\'s toolbox was the 2D convolutional network, which she likened to a versatile and precise instrument, much like a Swiss army knife. Just as the convolutional network excels at processing images and extracting features, Carol needed a tool that could help her analyze the situation and identify visual clues that might lead her to her lost passport. The third tool was the recurrent network, which Carol compared to a flexible and adaptive multitool. This architecture, with its ability to retain information from previous steps, resembled the problem-solving approach she needed to employ. With the recurrent network, Carol could analyze the sequence of events leading up to the loss of her passport and try to reconstruct her steps. Lastly, Carol considered the generative adversarial network (GAN), which she equated to an innovative and transformative invention. The GAN, with its generator and discriminator components working in harmony, represented the ingenuity she needed to devise a plan to recover her passport. She saw herself as the generator, generating strategies and ideas, while the discriminator aspect helped her evaluate and refine her approaches. In her quest to overcome the obstacles before her, Carol realized that she needed to carefully consider which tool from her metaphorical toolbox, or neural network architecture, was most appropriate for the situation. She pondered the characteristics of each architecture, weighing their strengths and weaknesses against the specific challenges she faced. With determination in her heart, Carol set off on a journey to find a solution. As she explored alternative means of communication and devised a plan to retrieve her lost passport, she understood the importance of selecting the appropriate neural network architecture, just as she had learned to select the right tool for the right job. And with each step forward, Carol grew wiser, realizing that the proper choice of architecture could make all the difference in successfully addressing complex problems and overcoming unexpected obstacles.`,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'gohome',
            convo: [
                {
                    type: 'text',
                    text: `Carol is going to the Cascade! Now test your knowledge before following Carol to explore`,
                },
            ],
            choices: [
                {
                    text: 'Question 1',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Question 2',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Question 3',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Question 4',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Question 5',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q1',
            convo: [
                {
                    type: 'text',
                    text: `Which neural network architecture is compared to a reliable and straightforward tool like a screwdriver?`,
                },
            ],
            choices: [
                {
                    text: 'Feed-forward network',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: '2D convolutional network',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Recurrent network',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Generative adversarial network (GAN)',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1incorrect'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q1incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'q2',
            convo: [
                {
                    type: 'text',
                    text: `That's correct! Next question:
                    Which neural network architecture is suitable for tasks that involve mapping inputs to outputs without feedback or memory?`,
                },
            ],
            choices: [
                {
                    text: 'Feed-forward network',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: '2D convolutional network',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Recurrent network',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Generative adversarial network (GAN)',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2incorrect'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q2incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'q3',
            convo: [
                {
                    type: 'text',
                    text: `Which neural network architecture is compared to a versatile and precise instrument like a Swiss army knife?`,
                },
            ],
            choices: [
                {
                    text: 'Feed-forward network',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Generative adversarial network (GAN)',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Recurrent network',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: '2D convolutional network',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q3incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        
        {
            id: 'q4',
            convo: [
                {
                    type: 'text',
                    text: `That’s correct! Next question: Which neural network architecture excels at processing images and extracting features?`,
                },
            ],
            choices: [
                {
                    text: 'Generative adversarial network (GAN)',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Recurrent network',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Feed-forward network',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: '2D convolutional network',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q4incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'q5',
            convo: [
                {
                    type: 'text',
                    text: `That’s correct! Next question: Which neural network architecture is likened to a flexible and adaptive multitool?`,
                },
            ],
            choices: [
                {
                    text: 'Recurrent network',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['completed'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Generative adversarial network (GAN)',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: '2D convolutional network',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Feed-forward network',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5incorrect'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q5incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'completed',
            convo: [
                {
                    type: 'text',
                    text: `Great job! Let’s continue the journey`,
                },
            ],
            choices: [
                {
                    text: 'Go to Cascade',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'carol-arrives-at-cascade',
                                        'intro',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                
            ],
        },

    ],
})

export default lostPasport
