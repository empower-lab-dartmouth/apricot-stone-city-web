import make from '../../core/util/make'

const walkToDestination = make.module({
    id: 'walk-to-destination',
    submodules: [],
    convoSegments: [
        {
            id: 'walk',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol was an adventurous and independent woman who loved exploring new places on foot. On a sunny day, she decided to embark on a walking journey to her general destination, eager to immerse herself in the sights and sounds of the city. As she strolled through the bustling streets, Carol\'s senses absorbed the vibrant colors, the enticing aromas, and the rhythmic sounds of the city. However, as fate would have it, dark clouds began to gather overhead, and raindrops started to fall from the sky. Carol found herself caught in an unexpected downpour, drenching her clothes and dampening her spirits. Realizing that walking in the rain would be uncomfortable and inconvenient, she decided to seek shelter and hailed a passing taxi. As Carol delved deeper into her metaphorical exploration, she unraveled five fundamental ideas about machine learning algorithms adjusting internal representations: Idea 1: Adaptation to changing circumstances - Just as Carol adjusts her mode of transportation from walking to taking a taxi due to the rain, machine learning algorithms adapt their internal representations based on the evolving data and patterns they encounter. Idea 2: Optimization of performance - Carol\'s decision to take a taxi is driven by the desire for convenience and comfort. Similarly, machine learning algorithms optimize their performance by adjusting their internal representations to minimize errors or differences between predicted and actual outcomes. Idea 3: Perceiving patterns and data - Carol\'s awareness of the rain and the need for an alternative transportation method represents the algorithms\' ability to perceive and analyze patterns and data in order to make informed decisions. Idea 4: Continuous evaluation and adjustment - As Carol assesses the rain\'s intensity and decides to hail a taxi, machine learning algorithms continuously evaluate the accuracy of their predictions or classifications and adjust their internal representations accordingly. Idea 5: Learning and improvement over time - Carol\'s adaptation to the rain through the taxi ride symbolizes the concept of machine learning algorithms learning from the data they encounter and updating their internal representations. By doing so, they enhance their predictive or classification capabilities, similar to how Carol\'s experience with the rain influences her future decision-making in similar situations.',
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
                    text: "Adaptation to changing circumstances",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['adaptation'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Optimization of performance",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['optimization'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Perceiving patterns and data",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['patterns'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Continuous evaluation and adjustment",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['evaluation'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Learning and improvement over time",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['learning'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Arrive at Destination",
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
            id: 'adaptation',
            convo: [
                {
                    type: 'text',
                    text: `Carol was an adventurous and curious woman who enjoyed exploring the world around her. On a beautiful sunny day, she decided to set out on foot to her general destination, relishing the opportunity to soak in the sights and sounds of the city. With a spring in her step and a sense of adventure in her heart, Carol embarked on her walking journey. As Carol meandered through the lively streets, observing the architecture, interacting with locals, and discovering hidden gems, she felt a sudden shift in the weather. Dark clouds rolled in, and raindrops began to fall gently at first, then more persistently. The unexpected rain shower caught Carol off guard, forcing her to seek shelter and reconsider her plans. In this scenario, Carol\'s decision to adapt her mode of transportation from walking to taking a taxi serves as a metaphor for the AI concept of adaptation to changing circumstances. Just as Carol swiftly adjusted her plans in response to the rain, machine learning algorithms also possess the ability to adapt their internal representations to dynamically respond to variations in the data environment. Machine learning algorithms continuously monitor and evaluate the changing conditions and patterns in the data they encounter. When faced with new circumstances or unforeseen events, they are capable of adjusting their internal representations to optimize their performance and make accurate predictions or classifications. In Carol\'s case, the rain served as the changing circumstance that prompted her to adapt her journey. Similarly, machine learning algorithms analyze incoming data, identify patterns, and recognize when the existing internal representations may not be sufficient to capture the evolving information accurately. They then adjust their internal representations, such as updating weights, fine-tuning parameters, or modifying model architecture, to adapt to the new circumstances and improve their predictive capabilities. Just as Carol\'s adaptation to the rain by taking a taxi allowed her to continue her journey comfortably, machine learning algorithms\' ability to adapt their internal representations ensures they can effectively handle variations in the data and provide reliable predictions or classifications. By embracing the concept of adaptation to changing circumstances, machine learning algorithms showcase their flexibility and resilience in navigating complex real-world scenarios.`,
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
            id: 'optimization',
            convo: [
                {
                    type: 'text',
                    text: 'As Carol strolled through the bustling streets, taking in the sights, sounds, and scents of the urban landscape, the weather suddenly took an unexpected turn. Dark clouds gathered overhead, and raindrops began to fall, dampening the sidewalks and dampening Carol\'s spirits. Undeterred by the rain, Carol pressed on for a while, seeking cover under awnings and trees. However, as the rain intensified, she realized that continuing her journey on foot would not only be inconvenient but also compromise her overall experience. In this narrative, Carol\'s decision to optimize her performance by taking a taxi in response to the rain serves as a metaphor for the AI concept of optimization of performance in machine learning algorithms. Just as Carol recognized the need to modify her approach to maximize her efficiency and comfort, machine learning algorithms constantly strive to enhance their performance by adjusting their internal representations. Machine learning algorithms are designed to optimize their performance by minimizing errors or discrepancies between their predictions or classifications and the ground truth. They achieve this by iteratively adjusting their internal representations, such as fine-tuning model parameters, optimizing hyperparameters, or updating the network weights, to find the best configuration that yields the most accurate and reliable outcomes. Similar to Carol\'s decision to take a taxi, which allowed her to reach her destination faster and more comfortably, machine learning algorithms undergo a process of optimization to improve their predictive capabilities. By adjusting their internal representations, they aim to reduce errors, enhance accuracy, and increase the overall efficiency and effectiveness of their predictions or classifications. Optimization of performance in machine learning algorithms involves a continuous cycle of evaluation, adjustment, and refinement. As Carol made the choice to optimize her performance by hailing a taxi, machine learning algorithms continuously evaluate their performance metrics, identify areas for improvement, and adjust their internal representations accordingly to maximize their predictive power and achieve higher performance levels. Through the metaphor of Carol\'s decision to optimize her performance by taking a taxi in response to the rain, the concept of optimization of performance in machine learning algorithms comes to life, emphasizing the importance of fine-tuning and adjusting internal representations to achieve the best possible outcomes in real-world scenarios.',
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
            id: 'patterns',
            convo: [
                {
                    type: 'text',
                    text: `As Carol strolled through the bustling streets, she admired the diverse architecture, vibrant colors, and the rhythmic buzz of the city\'s activities. She found joy in deciphering the patterns that emerged from the intricate interplay of people, buildings, and nature around her. However, just as Carol was engrossed in her surroundings, she felt the first droplets of rain start to fall. She looked up at the darkening sky and realized that continuing her walk in the rain would dampen her spirits and hinder her enjoyment of the experience. Seeking shelter under a nearby awning, Carol observed the rain\'s impact on the cityscape. The droplets formed patterns as they trickled down windows, formed puddles on the ground, and altered the rhythm of the bustling streets. Intrigued by these new patterns, Carol pondered the concept of perceiving patterns and data. In the world of AI, the concept of perceiving patterns and data refers to the ability of machine learning algorithms to discern meaningful patterns and extract valuable insights from the data they encounter. Just as Carol observed and interpreted the rain\'s patterns to make informed decisions about her next steps, machine learning algorithms rely on perceiving patterns in data to learn and make predictions or classifications. These algorithms are trained to recognize patterns and uncover hidden relationships within the data. They analyze vast amounts of information, searching for recurring patterns, correlations, and trends. By adjusting their internal representations based on these observed patterns, they improve their ability to make accurate predictions or classifications. Similarly, Carol adapted her plans by hailing a taxi, using her perception of the rain\'s patterns and its impact on her surroundings. The decision to take a taxi was informed by her understanding of the changing circumstances and the ability to perceive the patterns in the rain\'s behavior. In the metaphorical context, the concept of perceiving patterns and data in machine learning algorithms represents their capacity to identify and interpret significant patterns in the data they encounter. By adjusting their internal representations based on these patterns, the algorithms optimize their learning process, enhancing their predictive capabilities and enabling them to navigate complex real-world scenarios effectively. Carol\'s observation of the rain\'s patterns and her decision to take a taxi showcase the essence of perceiving patterns and data in the realm of AI, highlighting the importance of recognizing and leveraging meaningful patterns to make informed decisions and achieve optimal outcomes.`,
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
            id: 'evaluation',
            convo: [
                {
                    type: 'text',
                    text: `As Carol embarked on her journey, the weather took an unexpected turn, and raindrops began to descend from the heavens. The rhythmic pitter-patter of raindrops on her umbrella created a soothing symphony, yet Carol realized that continuing her walk would lead to a soggy outcome. Quick on her feet, Carol swiftly hailed a passing taxi and hopped inside, seeking refuge from the downpour. As the taxi\'s tires splashed through the rain-soaked streets, Carol pondered the metaphorical concept of continuous evaluation and adjustment in the realm of artificial intelligence. Just as Carol seamlessly adjusted her plans from walking to taking a taxi in response to changing circumstances, machine learning algorithms employ the principle of continuous evaluation and adjustment to optimize their internal representations and enhance their performance. In the world of AI, continuous evaluation and adjustment refers to the iterative process of refining and fine-tuning the internal representations of machine learning algorithms based on new data and feedback. These algorithms dynamically adapt to changing circumstances and evolving patterns, allowing them to continuously learn and improve their predictions or classifications. Much like Carol\'s decision to take a taxi as soon as the rain started, machine learning algorithms continuously evaluate their predictions or classifications and adjust their internal representations to minimize errors and enhance accuracy. They learn from the feedback provided by comparing their outputs to the expected outcomes, making incremental adjustments to improve their performance over time. Carol\'s swift transition from walking to taking a taxi showcases the essence of continuous evaluation and adjustment in the world of AI. Just as Carol swiftly adapted her plans to accommodate the rain, machine learning algorithms adapt their internal representations to better align with the observed data, allowing them to make more precise and reliable predictions or classifications. As Carol arrived at her destination, the rain began to subside, leaving behind a renewed sense of clarity and freshness. Similarly, through continuous evaluation and adjustment, machine learning algorithms refine their internal representations, ensuring that they remain attuned to the nuances of the data and capable of adapting to ever-changing circumstances. Carol\'s journey through the rain-soaked streets and her seamless transition to a taxi ride beautifully mirrors the concept of continuous evaluation and adjustment in the world of AI. It highlights the importance of flexibility, adaptability, and ongoing refinement as machine learning algorithms learn and improve their internal representations to make accurate and impactful predictions or classifications.`,
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
            id: 'learning',
            convo: [
                {
                    type: 'text',
                    text: `As Carol set off on her journey, a gentle drizzle began to descend from the sky, gradually transforming into a heavy downpour. Undeterred by the rain, Carol bravely continued walking, her determination guiding her steps. However, as the rain intensified, her clothes grew damp, and the once enjoyable walk turned into a soggy struggle. Realizing that reaching her destination in such conditions would be challenging, Carol spotted a nearby taxi. Without hesitation, she flagged it down and hopped inside, seeking shelter from the rain and a quicker way to her desired location. Little did Carol know that her journey mirrored a metaphorical concept in the world of artificial intelligence: the process of learning and improvement over time. Just as Carol adapted her plans from walking to taking a taxi in response to the rain, various types of machine learning algorithms exhibit a remarkable ability to learn and improve their performance over time. This process involves the continuous adjustment of their internal representations based on new data and experiences, allowing them to enhance their decision-making capabilities. In the realm of AI, learning and improvement over time refers to the iterative process by which machine learning algorithms refine their internal representations and adjust their decision boundaries. These algorithms assimilate new information, analyze patterns, and make adjustments to optimize their predictions or classifications. Carol\'s decision to take a taxi reflects the essence of learning and improvement over time in the AI world. Just as Carol recognized the need to adapt to the changing circumstances, machine learning algorithms analyze and process new data, identifying patterns and refining their internal representations to make more accurate and informed decisions. Over time, machine learning algorithms become increasingly adept at recognizing complex patterns and making better predictions or classifications. They learn from their mistakes and successes, continuously adjusting their internal representations to align with the observed data. This iterative process empowers them to improve their performance and deliver more reliable outcomes. As Carol arrived at her destination in the cozy comfort of the taxi, the rain began to subside, leaving behind a sense of accomplishment. Similarly, through learning and improvement over time, machine learning algorithms evolve and mature, acquiring a deeper understanding of the data and enhancing their decision-making capabilities. Carol\'s journey through the rain-soaked streets serves as a powerful metaphor for the concept of learning and improvement over time in the AI landscape. It highlights the importance of adaptability, continuous refinement, and the capacity to evolve. Just as Carol\'s decision to take a taxi helped her reach her destination more efficiently, machine learning algorithms, through their ability to adjust their internal representations, strive for increased accuracy and effectiveness in making predictions or classifications. In the world of AI, learning and improvement over time is a vital concept that fuels the progress of machine learning algorithms, enabling them to continuously evolve and enhance their internal representations. Much like Carol\'s journey, the path to success in machine learning is paved with a commitment to learning, growth, and the pursuit of excellence.`,
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
                    text: `Carol found a taxi! Now test your knowledge before following Carol to explore her general destination`,
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
                // {
                //     text: 'Question 2',
                //     logic: [
                //         {
                //             do: [
                //                 {
                //                     type: 'goto',
                //                     path: ['q2'],
                //                 },
                //             ],
                //         },
                //     ],
                // },
                // {
                //     text: 'Question 3',
                //     logic: [
                //         {
                //             do: [
                //                 {
                //                     type: 'goto',
                //                     path: ['q3'],
                //                 },
                //             ],
                //         },
                //     ],
                // },
                // {
                //     text: 'Question 4',
                //     logic: [
                //         {
                //             do: [
                //                 {
                //                     type: 'goto',
                //                     path: ['q4'],
                //                 },
                //             ],
                //         },
                //     ],
                // },
                // {
                //     text: 'Question 5',
                //     logic: [
                //         {
                //             do: [
                //                 {
                //                     type: 'goto',
                //                     path: ['q5'],
                //                 },
                //             ],
                //         },
                //     ],
                // },
            ],
        },
        {
            id: 'q1',
            convo: [
                {
                    type: 'text',
                    text: `In the story, when it started to rain, what did Carol do?`,
                },
            ],
            choices: [
                {
                    text: 'She took a taxi.',
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
                    text: 'She continued walking.',
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
                    text: 'She ran for cover.',
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
                    text: 'She stopped and waited for the rain to stop.',
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
                    The concept of adaptation to changing circumstances in AI refers to:`,
                },
            ],
            choices: [
                {
                    text: 'Adjusting internal representations based on new data.',
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
                    text: 'Optimizing performance by fine-tuning algorithms.',
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
                    text: 'Evaluating and adjusting models continuously.',
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
                    text: 'Perceiving patterns and making informed decisions.',
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
                    text: `That’s correct! Next question: Which concept in AI involves refining internal representations to enhance decision-making capabilities?`,
                },
            ],
            choices: [
                {
                    text: 'Optimization of performance.',
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
                    text: 'Continuous evaluation and adjustment.',
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
                    text: 'Perceiving patterns and data.',
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
                    text: 'Learning and improvement over time.',
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
                    text: `That’s correct! Next question: In the story, what does the representative's questioning process represent?`,
                },
            ],
            choices: [
                {
                    text: 'Adaptation to changing circumstances.',
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
                    text: 'Perceiving patterns and data.',
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
                    text: 'Optimization of performance.',
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
                    text: 'Adaptation to changing circumstances.',
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
                    text: `That’s correct! Next question: The concept of optimization of performance in AI refers to:`,
                },
            ],
            choices: [
                {
                    text: 'Fine-tuning algorithms to improve outcomes.',
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
                    text: 'Recognizing patterns and making accurate predictions.',
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
                    text: 'Learning from mistakes and improving over time.',
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
                    text: 'Adjusting internal representations based on new data.',
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
                    text: 'Carol arrives at destination.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'Lost-pasport',
                                        'miss-pasport',
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

export default walkToDestination
