<script>
  import QuotedText from "$lib/components/QuotedText.svelte";
  import SubHeading from "$lib/components/SubHeading.svelte";
  import Section from "$lib/components/Section.svelte";
  import { enhance } from "$app/forms"; // SvelteKit's progressive enhancement helper

  /**
   * This `form` prop is automatically populated by SvelteKit
   * with the data returned from your server action.
   * @type {import('./$types').ActionData}
   */
  export let form;
</script>

<main class="antialiased">
  <div class="dark:bg-black bg-starlight text-black dark:text-gray-400">
    <div
      class="min-h-screen flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8"
    >
      <header
        class="text-center w-full sticky top-0 bg-starlight/50 dark:bg-black/15 backdrop-blur-sm p-4 z-10"
      >
        <h1 class="text-3xl font-bold tracking-tight">
          Astute Insights: Navigating a Curated Reality
        </h1>
      </header>

      <div class="max-w-3xl w-full p-4 sm:p-6 lg:p-8">
        <Section>
          <p>
            Almost every scroll, every click, every piece of information you
            consume is shaped by algorithms designed to serve an agenda,
            optimized for profit and keeping you engaged. While this isn't
            always wrong, the problem begins when it happens at your expense.
            This isn't just about selling you products; it's about <em
              >quietly molding</em
            > what's important to you and shaping how you think about the world and
            yourself.
          </p>

          <SubHeading>The Stories You Are Sold</SubHeading>

          <p>
            You've likely seen a version of this story: a 25-year-old on a
            laptop by the beach, talking about the freedom of "passive income".
            They craft a compelling narrative by minimizing the immense effort
            required to build such an income, while exaggerating the challenges
            of a stable 9-to-5 job. Suddenly, your stability starts to feel like
            a cage. The solution they offer? An online course promising the
            "secret" to financial freedom.
          </p>

          <p>
            Every industry has its version of this. Beauty and fitness brands
            pushing an ideal of "perfection" through flawless skin and sculpted
            bodies. Influencers showcasing a highlight reel of dream vacations
            and perfect homes, setting an unspoken benchmark for happiness.
            Self-help gurus selling proprietary 'blueprints' for winning,
            creating a clever loop where any failure is proof that your mindset
            wasn't strong enough, conveniently positioning their next product as
            the upgrade you need.
          </p>

          <QuotedText>
            Notice how they don't just sell products; they <strong
              >sell definitions</strong
            >. They define what beauty means, what wealth looks like, and what
            happiness should feel like.
          </QuotedText>

          <p>
            More importantly, they build a narrative where their way becomes the
            most logical path to achieving it. They profit from the gap they
            create between where you are and where they imply you should be,
            leaving you in a loop of consumption, chasing a finish line <strong
              >which they can move at any time</strong
            >.
          </p>

          <p>
            This is how we get caught in the cycle. We chase a moving target
            from a place of genuine hope, unaware that the chase itself is what
            drives their revenue. The outcome is a persistent feeling of you
            being 'not enough'—a state that naturally fuels consumption.
          </p>

          <QuotedText>
            The path through this noise isn't found in another product or an
            expert, but within our own <strong>capacity for astuteness</strong>.
          </QuotedText>
        </Section>

        <Section>
          <SubHeading>Curiosity as a Compass</SubHeading>

          <p>
            Astuteness is the discipline of looking at a single narrative and
            searching for the other truths that coexist with it—the different
            angles, the hidden complexities, the parts left unsaid.
          </p>

          <QuotedText>
            This practice begins not with answers, but with <strong
              >curiosity</strong
            >: the simple choice to pause and ask, "What else is true here?"
          </QuotedText>

          <p>
            By embracing this multi-faceted view of reality, you gain the
            clarity needed to act effectively and authentically.
          </p>

          <p>
            This is the curiosity to ask the vulnerable, honest questions that
            cut through the noise. This curiosity leads to <strong
              >clarity</strong
            >: a clear view of the bigger picture, the agenda behind the
            message, and most importantly, what you truly want. From that
            clarity, you build the
            <strong>capability</strong> to act on the parts of your life you genuinely
            control, with intention.
          </p>

          <p>
            With astuteness, the <em>narrative shifts</em>. It's not about
            rejecting everything; it's about approaching new information with an
            open yet questioning mind. You don't blindly accept; you
            <strong>evaluate</strong>. It's about understanding
            <em>why</em> a narrative exists, rather than declaring you have the one
            true narrative for everything.
          </p>

          <QuotedText>
            My favourite aspect of this mindset is that it's <strong
              >dynamic and transferable</strong
            >. Once you learn to see things astutely, you can apply it anywhere.
          </QuotedText>
        </Section>

        <Section>
          <SubHeading>Questions That Change Everything</SubHeading>
          <p>
            When a beauty brand defines "perfection", you don't just accept it;
            you examine it. You ask: "What truly keeps skin healthy, beyond what
            comes in a bottle? And if I do choose a product, what ingredients
            align with that understanding, not just the marketing claims?"
          </p>

          <p>
            When a guru defines "success", you ask: "Am I chasing this to
            impress others? If I fail, will I still be valued by those who
            matter, and by myself? What would a 'successful' life look like if
            it were entirely on my terms?"
          </p>

          <p>
            When you see the 25-year-old selling "passive income", you start
            asking about the unseen effort, the hidden risks, and what they gain
            by selling that specific dream. In asking, you begin to see the
            business model behind the lifestyle.
          </p>

          <QuotedText>
            This is where you stop chasing <em>their</em> ideals and start
            creating <strong>your own</strong>, while having the freedom to
            redefine them when your own clarity evolves.
          </QuotedText>

          <p>
            In your career, instead of concluding, "My work isn't valued", you
            start to ask: "Is the problem the quality of my work, or the
            visibility of my contributions?" Suddenly, the approach isn't just
            to work harder, but to communicate your impact more effectively.
          </p>

          <p>
            In a relationship, instead of reacting to distance with, "They don't
            care anymore", you ask a gentler question: "Are they pulling away
            from me, or are they retreating into themselves because they're
            overwhelmed?" The focus shifts from demanding attention to offering
            support.
          </p>

          <p>
            With your health, you stop blaming yourself with, "I failed another
            diet; I lack discipline". Instead, you ask: "Did I fail the plan, or
            did this unsustainable plan fail to fit my actual life?" The goal is
            no longer about forcing willpower, but about finding habits that
            genuinely work for you.
          </p>

          <p>
            And on a personal level, you move beyond self-criticism—"I'm so
            unproductive"—by asking: "Is this a failure of my discipline, or a
            symptom of my burnout?" The problem isn't a lack of hustle, but a
            lack of boundaries. The solution isn't more force; it's more rest.
          </p>
        </Section>

        <Section>
          <SubHeading>Let's Build This Together</SubHeading>
          <p>
            Understanding the 'what' and 'why' of astuteness is the first step.
            The next is the 'how': How do we reliably develop this skill? How
            can we practice it effectively? And most importantly, how do we
            ensure the answers we find are truly our own?
          </p>

          <p>
            I don't claim to be an expert with all the answers. I'm a passionate
            student of this mindset, and I believe the best way to avoid my own
            biases is to create a practical framework by developing it openly,
            with you.
          </p>

          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <!-- Left Column: Email Signup -->
            <div>
              <h3 class="text-xl font-semibold">Help Shape What Comes Next</h3>
              <p class="mt-2 text-base">
                The ideas in this document are the starting point. The next step
                is to build them into a practical framework, which will
                eventually become a book. This process works best when it's not
                done in isolation. By joining, you become a collaborator,
                getting access to early concepts and offering the different
                angles and perspectives this project needs to thrive.
              </p>

              <div class="mt-6">
                <p class="font-medium text-base">
                  Join a small circle to test ideas and follow the book's
                  progress.
                </p>
                <form
                  method="POST"
                  use:enhance
                  class="mt-2 flex flex-col sm:flex-row gap-2"
                >
                  <label for="email-address" class="sr-only"
                    >Email address</label
                  >
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="w-full px-4 py-2 rounded-md border-gray-600 bg-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-500"
                    placeholder="Enter your email"
                    value={form?.email ?? ""}
                  />
                  <button
                    type="submit"
                    class="px-6 py-2 rounded-md bg-gray-800 dark:bg-gray-700 text-starlight hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors whitespace-nowrap"
                  >
                    I'd like to contribute
                  </button>
                </form>

                <!-- Display success or error messages from the server -->
                {#if form?.success}
                  <p class="mt-2 text-green-500">{form.message}</p>
                {:else if form?.error}
                  <p class="mt-2 text-red-500">{form.error}</p>
                {/if}

                <p class="mt-3 text-xs text-gray-500">
                  <strong>Note:</strong> Your email will only be used to share honest
                  ideas and will never be given to anyone else. No spam, no hype,
                  no manipulative funnels—just the shared search for clarity.
                </p>
              </div>
            </div>

            <!-- Right Column: Instagram Promotion -->
            <div>
              <h2 class="text-xl font-semibold">Join the Daily Conversation</h2>
              <p class="mt-2 text-base">
                For more immediate ideas and to join the daily conversation, the
                community lives and breathes on Instagram. It's where we can
                practice applying these questions together and sharpen our
                thinking in real-time.
              </p>
              <a
                href="https://www.instagram.com/astute.insights"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block mt-4 px-6 py-2 rounded-md border border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                Visit @astute.insights
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  </div>
</main>

<style>
  p {
    margin-bottom: 1rem;
  }
</style>
