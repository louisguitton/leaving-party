// ref: https://tailwindui.com/components/marketing/sections/faq-sections#component-8699d80b13ef524eb573e54b4d4b89d1
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Container } from './Container'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
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
                            <PlusSmallIcon
                              className="w-6 h-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <MinusSmallIcon
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
