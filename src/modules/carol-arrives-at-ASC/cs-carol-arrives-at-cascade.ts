import make from '../../core/util/make'

const CarolArrivesAtCascade = make.module({
    id: 'carol-arrives-at-cascade',
    submodules: [],
    convoSegments: [
        {
            id: 'intro',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol, a young woman with a curious mind and a passion for learning, found herself in a bustling city. Eager to explore, she ventured out into the streets, hoping to discover new sights and experiences. As fate would have it, she crossed paths with Anoush, a kind-hearted driver who offered her a ride to the beautiful Cascade mountains. During their journey, Anoush received an unexpected call from her grandmother, who shared a treasure trove of wisdom. Anoush listened attentively, soaking in the valuable lessons passed down through generations. In this moment, Anoush represented the multilayer neural network, with each layer symbolizing the various stages of learning and understanding. As Carol delved deeper into her metaphorical exploration, she unraveled five fundamental ideas about training a multilayer neural network: Idea 1: Neural network as Anoush - Anoush represents the multilayer neural network in the story, symbolizing its ability to learn and adapt. Idea 2: Backpropagation as receptive listening - Anoush\'s receptive nature during the phone call reflects the concept of the backpropagation learning algorithm, where the network adjusts its course based on received feedback. Idea 3: Changing weights as evolving connections - The changing weights of Anoush\'s neurons represent the evolving connections within the neural network as it learns and assigns varying importance to different information. Idea 4: Outputs of hidden units as meaningful representations - The outputs of Anoush\'s hidden units, generated through activation functions, represent the meaningful representations formed by the hidden layers in a neural network. Idea 5: Convergence to optimal values as enhanced understanding - As Anoush\'s weights and hidden unit outputs converge to optimal values, her deepened understanding mirrors the improved learning capabilities of a trained neural network.',
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
                    text: "Neural network as Anoush",
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
                    text: "Backpropagation as receptive listening",
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
                    text: "Changing weights as evolving connections",
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
                    text: "Outputs of hidden units as meaningful representations",
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
                    text: "Convergence to optimal values as enhanced understanding",
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
                    text: `Carol stood on the sidewalk, waiting for her friend Anoush to pick her up. Anoush\'s car pulled up, and Carol hopped in, excited for their day together. Little did she know that this car ride would serve as a metaphor for the AI concept of training a multilayer neural network using the backpropagation learning algorithm. In the story, Anoush symbolizes the neural network, with her car representing its architecture. Just as a neural network consists of interconnected layers, Anoush\'s car had various components working together. As they embarked on their journey, Anoush\'s car represented the neural network in its initial state, ready to learn and adapt. Anoush received a call from her grandmother, and the conversation became the training process for the neural network. Anoush actively listened, processing the feedback and adjusting her actions based on the received information. This reflects the essence of the backpropagation learning algorithm, where the network learns from its mistakes and improves over time. As Anoush absorbed her grandmother\'s words, the weights of the neurons in the neural network began to change. Similarly, Anoush\'s decision-making process altered, as she adjusted her driving style and route based on the information she received. This changing behavior mirrors the adaptive nature of a neural network\'s weights, which are updated to assign varying importance to different inputs. Furthermore, the outputs of hidden units in the neural network are analogous to the meaningful representations formed by Anoush\'s decision-making process. As she processed the call, her internal thoughts and reflections shaped her actions, just as the hidden units in a neural network generate meaningful representations through activation functions. Ultimately, as Anoush and Carol arrived at their destination, the neural network (represented by Anoush) had learned and improved. The network\'s weights and hidden unit outputs had converged to optimal values, reflecting Anoush\'s enhanced understanding and refined decision-making skills. In this way, the car ride with Anoush became a metaphor for training a multilayer neural network using the backpropagation learning algorithm, showcasing how the weights of the neurons and the outputs of the hidden units change as a result of learning.`,
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
                    text: 'As Anoush\'s car approached, Carol hopped in, greeted by Anoush\'s warm smile. Anoush, embodying the neural network in this metaphor, sat behind the wheel, ready to embark on a learning journey. The car itself represented the architecture of the neural network, with its various components representing the interconnected layers. Anoush\'s phone rang, and she answered the call from her grandmother. This phone call became the training process for the neural network, mirroring the backpropagation learning algorithm. Anoush\'s role transformed into that of a receptive listener, just as the neural network listens and absorbs information during training. As Anoush engaged in the conversation, her receptive listening skills came into play. She attentively absorbed her grandmother\'s words, processing the feedback and adjusting her understanding accordingly. This receptive listening represented the backpropagation algorithm\'s ability to analyze the error between the network\'s predicted output and the desired output, and adjust the weights of the neurons accordingly. In the metaphorical sense, the weights of the neurons represented Anoush\'s receptivity to the information she received. As she listened to her grandmother\'s wisdom, her understanding grew, and her perspective adapted. Similarly, in a neural network, the backpropagation algorithm adjusts the weights of the neurons based on the error signals, optimizing the network\'s ability to capture relevant patterns and make accurate predictions. The outputs of the hidden units in the neural network were represented by Anoush\'s internal reflections and insights. As she absorbed and processed the information, her understanding deepened, and she formed meaningful representations and perspectives. In the same way, the hidden units in a neural network generate valuable insights through activation functions, capturing complex relationships and features within the data. Throughout the journey, Anoush continued to listen and learn, her receptive listening skills akin to the backpropagation algorithm\'s iterative nature. Gradually, both Anoush and the neural network refined their understanding and adapted their behavior. The weights of the neurons and the outputs of the hidden units adjusted as a result of this receptive learning process. As Anoush and Carol arrived at the Cascade, their destination, they both felt a sense of accomplishment. Anoush had successfully honed her receptive listening skills, just as the neural network had improved its predictive capabilities through backpropagation. Both had undergone a transformative learning experience. In this way, the car ride with Anoush became a metaphor for training a multilayer neural network using the backpropagation learning algorithm, specifically highlighting backpropagation as receptive listening. It illustrated how the weights of the neurons and the outputs of the hidden units change as a result of receptive learning, leading to improved understanding and enhanced decision-making abilities.',
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
                    text: `As Anoush pulled up in her car, a sense of adventure filled the air. Carol hopped into the passenger seat, and Anoush greeted her with a smile. Anoush, representing the neural network in this metaphor, was ready to embark on a learning experience, with the car symbolizing the network\'s architecture and its interconnected layers. During the drive, Anoush received a call from her grandmother. The phone conversation became an opportunity for Anoush to learn and grow, just as a neural network learns from its training data. Anoush\'s receptive listening skills, mirroring the backpropagation learning algorithm, allowed her to absorb the wisdom shared by her grandmother. In the metaphorical context, the weights of the neurons represented the connections between Carol and Anoush, and how they evolved throughout the journey. Each interaction, each piece of information exchanged, contributed to the strengthening or weakening of these connections, much like the weights of the neurons in a neural network. As Anoush listened attentively to her grandmother\'s words, Carol became the source of valuable input. Her thoughts, ideas, and experiences served as the training data for Anoush\'s neural network. Each interaction adjusted the weights of the neurons, signifying the evolving connections between them. Just as the backpropagation algorithm analyzes the error between the network\'s predicted output and the desired output, Anoush reflected on her conversations with Carol. She evaluated the impact of their exchanges, assessing whether her understanding aligned with Carol\'s perspective. Through this reflective process, the weights of the neurons adjusted, indicating the evolving connections and the refining of Anoush\'s comprehension. The outputs of the hidden units in the neural network were analogous to the insights Anoush gained from her conversations with Carol. These hidden units represented the internal processing, as Anoush assimilated Carol\'s perspectives and formed new connections in her understanding. The evolving connections and changing weights of the neurons influenced the outputs of these hidden units, enriching Anoush\'s insights and refining her decision-making abilities. As Anoush and Carol reached the Cascade, the culmination of their journey, they marveled at the beauty that surrounded them. The evolving connections between them had led to a deeper understanding and a strengthened bond. Similarly, the changing weights in a neural network fostered improved performance and enhanced its ability to make accurate predictions. In this metaphorical tale, the car ride with Anoush represented the training process of a multilayer neural network using the backpropagation learning algorithm, emphasizing the concept of changing weights as evolving connections. It showcased how the weights of the neurons and the outputs of the hidden units transform as a result of learning, leading to a more refined understanding and strengthened neural connections.`,
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
                    text: `As Anoush\'s car pulled up, a sense of anticipation filled the air. Carol hopped into the passenger seat, and Anoush greeted her with a warm smile. Anoush, symbolizing the multilayer neural network in this metaphor, embarked on a journey of discovery with Carol, representing the training data. During the drive, Anoush received an important phone call from her grandmother. This conversation became a pivotal moment, akin to the training process of a neural network. Anoush\'s receptive listening skills mirrored the backpropagation learning algorithm, allowing her to absorb valuable information from her grandmother. In this metaphorical context, the weights of the neurons represented the connections between Carol and Anoush. These connections evolved and adjusted throughout the journey, just as the weights of the neurons in a neural network change during the learning process. Each interaction between Carol and Anoush contributed to the refinement of these connections. As Anoush listened attentively to her grandmother\'s wise words, Carol became the source of input that shaped Anoush\'s understanding. The neural network, represented by Anoush, processed this input and transformed it into meaningful representations, similar to the outputs of the hidden units in a multilayer neural network. The hidden units, acting as intermediaries within the neural network, captured and encoded the essence of the input received from Carol. These hidden units, like Anoush\'s internal processing, formed meaningful representations that carried valuable insights derived from their interactions. The outputs of these hidden units mirrored the refined understanding gained through the training process. Just as the backpropagation learning algorithm evaluates the error between the network\'s predicted output and the desired output, Anoush reflected on her conversations with Carol. She assessed the accuracy of her understanding, comparing it to Carol\'s perspective, and adjusted the weights of the neurons accordingly. This iterative process enhanced the meaningful representations generated by the hidden units, leading to a more refined comprehension. As Anoush and Carol arrived at the Cascade, the pinnacle of their journey, they marveled at the majestic scenery surrounding them. The evolving connections between them had led to a deeper understanding and a stronger bond. Similarly, the changing weights and the meaningful representations in a multilayer neural network resulted in improved performance and the ability to generate more accurate predictions. In this metaphorical tale, the car ride with Anoush represented the training process of a multilayer neural network using the backpropagation learning algorithm. It emphasized the concept of the outputs of hidden units as meaningful representations, showcasing how the weights of the neurons and the insights encoded in the hidden units change as a result of learning. Through their journey, Anoush and Carol exemplified the transformative power of training a neural network, where meaningful representations emerged from their interactions and enhanced their understanding of the world.`,
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
                    text: `As Anoush\'s car pulled up, Carol felt a surge of excitement. She hopped into the passenger seat, and Anoush greeted her with a warm smile. Anoush, representing the multilayer neural network in this metaphor, was eager to learn and explore the world alongside Carol, who symbolized the training data. As they embarked on their drive, Anoush\'s phone buzzed, indicating an incoming call from her grandmother. This moment marked a significant turning point, mirroring the training process of a neural network. Anoush, much like the backpropagation learning algorithm, became receptive and attentive, ready to absorb wisdom and insights from her grandmother\'s words. In this metaphorical context, the weights of the neurons represented the connections and associations forming between Carol and Anoush during their journey. These weights played a crucial role in shaping Anoush\'s understanding, just as they do in a neural network. As Carol shared her experiences and perspectives, the connections between them began to evolve and adjust. Anoush\'s mind, acting as the neural network\'s hidden units, processed the information received from Carol and her grandmother. The outputs of the hidden units symbolized the internal representations formed during this learning process. As Anoush listened to her grandmother\'s advice and merged it with Carol\'s insights, her understanding deepened, and the hidden units generated more refined and meaningful representations. With each passing moment, Anoush\'s comprehension expanded, mirroring the enhanced understanding achieved through the backpropagation learning algorithm. The weights of the neurons adjusted and fine-tuned, striving to converge to optimal values that aligned with Carol\'s perspectives and her grandmother\'s wisdom. As Anoush and Carol arrived at the Cascade, they marveled at the picturesque landscape surrounding them. The journey had not only brought them closer as friends but also exemplified the convergence to optimal values in a multilayer neural network. Anoush\'s understanding, like the neural network\'s performance, had reached a refined state, where the hidden units\' outputs represented a deep and meaningful comprehension of the world. In this metaphorical tale, the drive with Anoush represented the training process of a multilayer neural network using the backpropagation learning algorithm. It showcased the concept of convergence to optimal values as enhanced understanding, where the weights of the neurons and the outputs of the hidden units evolved and adjusted to refine Anoush\'s comprehension. Through their journey, Anoush and Carol demonstrated the transformative power of training a neural network, where converging to optimal values resulted in an enriched understanding of the world and a strengthened bond between them.`,
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
                    text: `In the story, Anoush represents which AI concept?`,
                },
            ],
            choices: [
                {
                    text: 'Neural network as Anoush',
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
                    text: 'Backpropagation as receptive listening',
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
                    text: 'Changing weights as evolving connections',
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
                    What does Anoush\'s phone call from her grandmother symbolize in the AI concept?`,
                },
            ],
            choices: [
                {
                    text: 'Backpropagation as receptive listening',
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
                    text: 'Neural network as Anoush',
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
                    text: 'Changing weights as evolving connections',
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
                    text: 'Outputs of hidden units as meaningful representations',
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
                    text: `The metaphor of changing weights in the story represents:`,
                },
            ],
            choices: [
                {
                    text: 'Neural network as Anoush',
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
                    text: 'Backpropagation as receptive listening',
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
                    text: 'Outputs of hidden units as meaningful representations',
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
                    text: 'Changing weights as evolving connections',
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
                    text: `That’s correct! Next question: What do the outputs of the hidden units represent in the story?`,
                },
            ],
            choices: [
                {
                    text: 'Neural network as Anoush',
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
                    text: 'Backpropagation as receptive listening',
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
                    text: 'Changing weights as evolving connections',
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
                    text: 'Outputs of hidden units as meaningful representations',
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
                    text: `That’s correct! Next question: What is the concept illustrated in the story regarding the convergence to optimal values?`,
                },
            ],
            choices: [
                {
                    text: 'Convergence to optimal values as enhanced understanding',
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
                    text: 'Backpropagation as receptive listening',
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
                    text: 'Changing weights as evolving connections',
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
                    text: 'Neural network as Anoush',
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
                                        'pickup-from-cascade',
                                        'pickup',
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

export default CarolArrivesAtCascade
