import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-green-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Snowflakes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => <div key={i} className="absolute text-white/60 animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 20 + 10}px`,
        animationDelay: `${Math.random() * 2}s`
      }}>
            ❄
          </div>)}
      </div>

      {/* Decorative lights */}
      <div className="absolute top-0 left-0 right-0 flex justify-around py-4">
        {[...Array(12)].map((_, i) => <div key={i} className="w-3 h-3 rounded-full animate-pulse" style={{
        backgroundColor: i % 3 === 0 ? '#ff0000' : i % 3 === 1 ? '#00ff00' : '#ffd700',
        animationDelay: `${i * 0.2}s`
      }} />)}
      </div>

      <Card className="max-w-2xl w-full bg-green-950/80 backdrop-blur-sm border-2 border-red-500/50 shadow-2xl shadow-red-500/20 relative z-10">
        <CardContent className="p-8 md:p-12 text-center space-y-8">
          {/* Christmas decorations */}
          
          
          {/* Question */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
            Do you live in the US?
          </h1>

          <p className="text-green-200 text-lg">🎁 Special Holiday Offer! 🎁</p>

          {/* Yes/No Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="h-14 px-12 text-lg font-semibold bg-red-600 text-white hover:bg-red-500 transition-all duration-300 hover:scale-105 border-2 border-red-400 shadow-lg shadow-red-500/30">
              <a href="/landing">
                🎅 Yes
              </a>
            </Button>

            <Button asChild size="lg" className="h-14 px-12 text-lg font-semibold bg-green-600 text-white hover:bg-green-500 transition-all duration-300 hover:scale-105 border-2 border-green-400 shadow-lg shadow-green-500/30">
              <a href="/landing">
                🎄 No
              </a>
            </Button>
          </div>

          {/* Bottom decoration */}
          
        </CardContent>
      </Card>
    </div>;
};
export default Index;