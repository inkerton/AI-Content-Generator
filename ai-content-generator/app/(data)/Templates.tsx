export default [
    {
        name:'Blog Title',
        desc:'An ai tool that generate blog title depending on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on given niche topic and outline and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true,
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog Content',
        desc:'An ai tool that generate blog content depending on your blog title',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Generate Blog content based on topic and ideas',
        slug:'generate-blog-content',
        form:[
            {
                label:'Enter your blog topic',
                field:'input',
                name:'niche',
                required:true,
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog Topic Ideas',
        desc:'An ai tool that generate blog topic ideas depending on your blog niche',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Generate Blog topic ideas based on niches in rich text editor format',
        slug:'blog-topic-idea',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true,
            }
        ]
    },
    {
        name:'Youtube SEO Title',
        desc:'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category:'Youtube',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Generatean SEO rich youtube title based on the topic keywords and outline provided',
        slug:'youtube-seo-title',
        form:[
            {
                label:'Enter your youtube video topic keyowords',
                field:'input',
                name:'topic',
                required:true,
            },
            {
                label:'Enter youtube description Outline here',
                field:'textarea',
                name:'outline',
                required:true,
            }
        ]
    },
    {
        name:'Youtube Description',
        desc:'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category:'Youtube description',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Generate youtube video description based on topic and outline',
        slug:'youtube-description',
        form:[
            {
                label:'Enter your blog topic/title',
                field:'input',
                name:'topic',
                required:true,
            },
            {
                label:'Enter Youtube Outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Youtube Tags',
        desc:'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category:'Youtube Tags',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Generate 30 youtube tags with the topic and outline description',
        slug:'youtube-tags',
        form:[
            {
                label:'Enter your Youtube title',
                field:'input',
                name:'topic',
                required:true,
            },
            {
                label:'Enter Youtube Outline here (optional)',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Rewrite Article (Plagiarism Free)',
        desc:'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        category:'Rewrite Article',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Generate an article based on the topic provided and then enhance the words better in a more professional way',
        slug:'rewrite-article',
        form:[
            {
                label:' Provide your Article/Blogpost or any other content to rewrite.',
                field:'textarea',
                name:'article',
            }
        ]
    },
    {
        name:'Text Improver',
        desc:'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        category:'Text Improver',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'rewrite the text to remove any grammatical error and also improve the quality of text by using better words',
        slug:'text-improver',
        form:[
            {
                label:'Enter text that you want to re-write or improve',
                field:'textarea',
                name:'text',
                required:true,
            }
        ]
    },
    {
        name:'Add Emojis to Text',
        desc:'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category:'Emojis',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'add emojis to the provided text',
        slug:'add-emoji-to-text',
        form:[
            {
                label:'Enter your text to add emojis',
                field:'textarea',
                name:'text',
                required:true,
            }
        ]
    },
    {
        name:'Instagram Post Generator',
        desc:'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category:'Instagram',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Generate content for an instagram post based on given keywords',
        slug:'instagram-post-generator',
        form:[
            {
                label:'Enter Keywords for your post',
                field:'input',
                name:'text',
                required:true,
            }
        ]
    },
    {
        name:'Instagram Hash Tag Generator',
        desc:'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category:'Instagram',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Generate 30 trendy instagram hash tags based on the given keywords',
        slug:'instagram-hash-tag-generator',
        form:[
            {
                label:'Enter Keywords for your instagram hastag',
                field:'input',
                name:'text',
                required:true,
            }
        ]
    },
    {
        name:'Instagram Post/Reel Idea',
        desc:'An AI tool that generate New and trending instagram idea depends on your niche',
        category:'Instagram',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'generate ideas for instagram post and reel based on the given keywords',
        slug:'instagram-post-reel-idea-generator',
        form:[
            {
                label:'Enter Keywords / Niche for your instagram idea',
                field:'input',
                name:'text',
                required:true,
            }
        ]
    },
    {
        name:'English Grammer Check',
        desc:'AI Model to Correct your english grammer by providing the text',
        category:'English',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'check the text for any grammatical mistakes and rewrite the corrected text',
        slug:'english-grammer-checker',
        form:[
            {
                label:'Enter text to correct the grammer',
                field:'input',
                name:'text',
                required:true,
            }
        ]
    },
    {
        name:'Write Code',
        desc:'AI Model to generate programming code in any language',
        category:'Code',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'write code for the following program',
        slug:'write-code',
        form:[
            {
                label:'Enter description of code you want along with Programming Lang',
                field:'textarea',
                name:'text',
                required:true,
            }
        ]
    },
    {
        name:'Explain Code',
        desc:'AI Model to explain programming code in any language',
        category:'Code',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Explain the provided code snippet',
        slug:'explain-code',
        form:[
            {
                label:'Enter code which you want to understand',
                field:'textarea',
                name:'text',
                required:true,
            }
        ]
    },
    {
        name:'Code Bug Detector',
        desc:'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        category:'Code',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Debug the provided code snippet',
        slug:'code-bug-detector',
        form:[
            {
                label:'Enter code which you want to test bug',
                field:'textarea',
                name:'text',
                required:true,
            }
        ]
    },
    {
        name:'Tagline Generator',
        desc:'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        category:'tagline generator',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Generate tagline ideas for product name based on the product details',
        slug:'tagline-generator',
        form:[
            {
                label:'Product/Brand Name',
                field:'input',
                name:'name',
                required:true,
            },
            {
                label:'What you are selling / Marketting',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Product Description',
        desc:'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        category:'product description',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Generate product description based on product name and details',
        slug:'product-description',
        form:[
            {
                label:'Product Name',
                field:'input',
                name:'name',
                required:true,
            },
            {
                label:'Product Details',
                field:'textarea',
                name:'outline',
            }
        ]
    },
]