// ref: https://tailwindui.com/components/marketing/sections/faq-sections#component-8699d80b13ef524eb573e54b4d4b89d1
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Container } from './Container'

const faqs = [
  {
    question: 'Is this a private bar?',
    answer:
      '131 Bar is a Historic Altbau in Berlin Mitte. I have booked the bar for us. People on the guest list can enter. The bar will serve us as long as we party.',
  },
  {
    question: 'Who are the DJs?',
    answer:
      'Although the goal is to see each other, I also want to party with you. This is where the DJs come in. They are friends or friends of friends. If you want to DJ, hit me up.',
  },
  {
    question: 'Can I bring a +1 at the bar?',
    answer:
      'Yes you can, as long as at least 1 person in the party is on the guest list.',
  },
  {
    question: 'I am an old OneFootballer, can I come to the Friday Beer?',
    answer:
      "Unfortunately not. But don't worry, there's no 5th floor anymore. We see each other at the bar directly.",
  },
  {
    question: 'How many people are attending?',
    answer:
      "Hard to tell. The initial guest list was made of 126 OneFootballers. It then grew to additional friends and ex-OneFootballers. We'll see who turns up.",
  },
]

export function FAQ() {
  return (
    <section id="faq" aria-label="FAQ" className="py-20 sm:py-32">
      <Container>
        <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
          <h2 className="max-w-2xl mx-auto text-4xl font-medium tracking-tighter text-center text-blue-900 font-display sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="flex items-center ml-6 h-7">
                          {open ? (
                            <MinusSmallIcon
                              className="w-6 h-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="w-6 h-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
