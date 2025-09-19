import { Card, CardContent } from "@/components/ui/card"
import { Quote, Heart, Hammer, Star } from "lucide-react"

export function FounderStory() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src="/mohan.jpg"
              alt="Mohanlal Suthar in his workshop"
              className="w-full h-[1350px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-100 left-4 right-4 bg-black/80 text-white p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Mohanlal Suthar in his Workshop</h4>
              <p className="text-sm text-white/90">
                Master craftsman Mohanlal Suthar working with traditional hand tools in his well-equipped workshop,
                where ancient woodworking techniques meet modern precision. His workspace is filled with carefully
                selected wood, traditional chisels, and modern machinery, creating the perfect environment for crafting
                exceptional furniture pieces.
              </p>
            </div>
            <div className="absolute -top-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <Quote className="h-8 w-8" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                The Journey of Mohanlal Suthar
              </h2>
              <p className="text-lg text-primary font-medium mb-6">Founder & Senior Carpenter</p>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <div className="space-y-3">
                <p className="text-lg leading-relaxed">
                  Born on March 13, 1979, in the culturally rich region of Rajasthan, Mohanlal Suthar discovered his
                  calling with wood at the remarkably young age of 14. What began as an apprenticeship under master
                  craftsmen has evolved into a lifelong passion that spans over three decades. His journey from a
                  curious teenager to a master craftsman is a testament to dedication, skill, and an unwavering
                  commitment to excellence.
                </p>
                <p className="text-base text-muted-foreground/80 italic border-l-2 border-primary/30 pl-4">
                  13 मार्च 1979 को राजस्थान के सांस्कृतिक रूप से समृद्ध क्षेत्र में जन्मे मोहनलाल सुथार ने मात्र 14 वर्ष की आयु में लकड़ी के साथ
                  अपना जुड़ाव खोजा। मास्टर कारीगरों के तहत शुरू हुई शिक्षुता आज तीन दशकों से अधिक का जीवनभर का जुनून बन गया है।
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-lg leading-relaxed">
                  Mohanlal's expertise encompasses both traditional Rajasthani woodworking techniques and contemporary
                  furniture design. He is not just a craftsman but also a visionary designer who creates original
                  furniture pieces and collaborates seamlessly with architects to bring their most ambitious designs to
                  life. His workshop has become a hub of creativity where ancient techniques meet modern innovation.
                </p>
                <p className="text-base text-muted-foreground/80 italic border-l-2 border-primary/30 pl-4">
                  मोहनलाल की विशेषज्ञता पारंपरिक राजस्थानी लकड़ी के काम और समकालीन फर्नीचर डिज़ाइन दोनों में है। वे न केवल एक कारीगर हैं
                  बल्कि एक दूरदर्शी डिज़ाइनर भी हैं जो मौलिक फर्नीचर बनाते हैं और आर्किटेक्ट्स के साथ मिलकर काम करते हैं।
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-lg leading-relaxed">
                  As the founder and senior carpenter of Krishna Furniture, Mohanlal leads a dedicated team of 12-20
                  skilled artisans and craftsmen. His workshop specializes in premium wooden furniture, traditional
                  carved pieces, modern ceiling installations (including PVC, POP, gypsum, and wooden ceilings), and
                  precision aluminum work. Each project reflects his commitment to quality, attention to detail, and
                  deep respect for the craft.
                </p>
                <p className="text-base text-muted-foreground/80 italic border-l-2 border-primary/30 pl-4">
                  कृष्णा फर्नीचर के संस्थापक और वरिष्ठ बढ़ई के रूप में, मोहनलाल 12-20 कुशल कारीगरों की एक समर्पित टीम का नेतृत्व करते हैं।
                  उनकी कार्यशाला प्रीमियम लकड़ी के फर्नीचर, पारंपरिक नक्काशी, आधुनिक छत कार्य और एल्यूमीनियम कार्य में विशेषज्ञ है।
                </p>
              </div>
            </div>

            <Card className="bg-muted/50 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <Quote className="h-6 w-6 text-primary mb-3" />
                <div className="space-y-4">
                  <p className="text-foreground italic text-lg">
                    "Every piece of furniture we create carries a story – the story of the tree it came from, the hands
                    that shaped it, and the home it will grace. This is not just business for me; it's my life's passion
                    and my way of preserving our rich cultural heritage while embracing modern needs."
                  </p>
                  <p className="text-muted-foreground/80 italic text-base border-l-2 border-primary/30 pl-4">
                    "हमारे द्वारा बनाया गया हर फर्नीचर एक कहानी कहता है - उस पेड़ की कहानी जिससे यह आया, उन हाथों की जो इसे आकार
                    देते हैं, और उस घर की जिसकी यह शोभा बढ़ाएगा। यह मेरे लिए केवल व्यवसाय नहीं है; यह मेरा जीवन का जुनून है।"
                  </p>
                </div>
                <p className="text-muted-foreground font-medium mt-4">- Mohanlal Suthar, Founder</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Traditional & Modern</h3>
              <p className="text-muted-foreground">
                Combining traditional craftsmanship with modern design techniques, creating unique pieces that blend
                heritage with contemporary style.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Hammer className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Master Craftsmanship</h3>
              <p className="text-muted-foreground">
                30+ years of experience with a skilled team of 10-20 employees, delivering exceptional furniture and
                architectural woodwork.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
              <p className="text-muted-foreground">
                Self-designed furniture and collaboration with architects to create bespoke pieces that perfectly match
                your vision and space.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
