import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { TUTORIAL_STEPS } from '@/lib/constants';
import { HelpCircle } from 'lucide-react';

export function Tutorial() {
  const [isOpen, setIsOpen] = useState(() => {
    const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
    return !hasSeenTutorial;
  });
  const [currentStep, setCurrentStep] = useState(0);

  const handleClose = () => {
    localStorage.setItem('hasSeenTutorial', 'true');
    setIsOpen(false);
  };

  const nextStep = () => {
    if (currentStep < TUTORIAL_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleClose();
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="sm"
        className="absolute top-4 left-4 bg-[#1D2A3A] border-white/20 text-white hover:bg-white/10 gap-2"
      >
        <HelpCircle className="w-4 h-4" />
        How to Play
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-[#1D2A3A] border-2 border-white/20">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-2xl font-bold text-white">
              {TUTORIAL_STEPS[currentStep].title}
            </DialogTitle>
            <DialogDescription className="text-lg leading-relaxed whitespace-pre-line text-white">
              {TUTORIAL_STEPS[currentStep].description}
            </DialogDescription>
          </DialogHeader>
          <Button 
            onClick={nextStep}
            className="w-full bg-[#24D982] hover:bg-[#20C875] text-white font-bold py-3 text-lg"
          >
            {currentStep < TUTORIAL_STEPS.length - 1 ? 'Next' : 'Start Playing'}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}