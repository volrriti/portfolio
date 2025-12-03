"use client";

import Eyes from "@/components/eyes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Tabs from "@/components/ui/tabs";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[50vw] h-screen flex justify-center items-center">
          <div className="bg-[#000000] w-[35vw] h-[65vh] flex items-center justify-center relative">
            <Eyes />
          </div>
        </div>
        <div className="w-[50vw] h-screen bg-[#0c0a09] flex justify-center items-center p-[20px]">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>About</AccordionTrigger>
              <AccordionContent>
                <em className="not-italic font-normal">Aayam Khand</em> is
                a&nbsp;
                <s className="text-neutral-400">
                  computer engineering student, exploring creative development
                  and design
                </s>
                &nbsp;fucking human being.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Interests</AccordionTrigger>
              <AccordionContent>
                He's drawn to problem solving. And he deeply enjoys the
                interconnection between creativity and logic. He's also
                interested in natural sciences, mathematics, philosphy, human
                behavior, music and creative arts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Vision</AccordionTrigger>
              <AccordionContent>
                To live a happy life built on intentionality, purpose and
                growth. He wants to keep learning, creating and improving on the
                things that matter to him. He aims to have a meaningful life,
                help people around him and stay grounded.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Current Focus</AccordionTrigger>
              <AccordionContent>
                Currently{" "}
                <s className="text-neutral-400">
                  developing web projects using Next.js, improving on his
                  physics and math foundations, building soft skills, and
                  working on his creative ventures
                </s>
                &nbsp;doing whatever he wants.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Values</AccordionTrigger>
              <AccordionContent>
                He deeply values authenticity, curiosity and discipline. He
                believes in doing his best and helping those around him.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* <Tabs /> */}
        </div>
      </div>
    </>
  );
}
