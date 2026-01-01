export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-4 pb-24 pt-16 font-sans text-zinc-900">
      <div className="mx-auto max-w-5xl space-y-16">
        <header className="space-y-6 rounded-3xl bg-white/80 p-10 shadow-xl shadow-sky-100 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            45-Minute Art Lesson Plan
          </p>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Charley Harper&apos;s Feathered Collages
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            Explore Charley Harper&apos;s &ldquo;minimal realism&rdquo; and guide
            elementary artists as they abstract birds into bold, geometric
            collages. Students will investigate Harper&apos;s visual language,
            experiment with cutting and layering paper, then create an original
            bird composition that celebrates shape, rhythm, and color.
          </p>
          <dl className="grid gap-4 text-sm text-slate-500 sm:grid-cols-3">
            <div>
              <dt className="font-medium text-slate-700">Grade Band</dt>
              <dd>Upper Elementary (Grades 3-5)</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-700">Time</dt>
              <dd>45 minutes</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-700">Focus Skill</dt>
              <dd>Collage &amp; abstraction inspired by Charley Harper</dd>
            </div>
          </dl>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <article className="space-y-6 rounded-3xl border border-sky-100 bg-white/90 p-10 shadow-lg shadow-sky-100">
            <h2 className="text-2xl font-semibold text-slate-900">
              Creative Hook (0-8 minutes)
            </h2>
            <p className="text-slate-600">
              Display Harper&apos;s artwork “Cardinal Close-Up” alongside a
              realistic bird photo. Ask, “What did Harper keep? What did he
              leave out?” Invite students to mimic bird motions with their arms,
              then freeze into angular poses. Connect their shapes to Harper&apos;s
              geometric birds and announce a mission: translate their favorite
              bird into collage &ldquo;Harper style.&rdquo;
            </p>
            <ul className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
              <li className="rounded-2xl bg-sky-50/80 p-4">
                <p className="font-medium text-sky-700">Visual Thinking</p>
                <p>
                  Use talk moves like “I notice...” and “I wonder...” to draw out
                  observations on shape, color, and pattern.
                </p>
              </li>
              <li className="rounded-2xl bg-emerald-50/80 p-4">
                <p className="font-medium text-emerald-700">Movement Cue</p>
                <p>
                  “Build a bird with your body.” Encourage angular limbs to
                  foreshadow collage shapes.
                </p>
              </li>
            </ul>
          </article>
          <aside className="space-y-4 rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-lg shadow-emerald-100">
            <h3 className="text-lg font-semibold text-slate-900">
              Materials &amp; Setup
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Charley Harper bird prints or slides</li>
              <li>Assorted construction paper &amp; scrapbook textures</li>
              <li>Pre-cut geometric templates and tracers</li>
              <li>Scissors, glue sticks, scrap bins</li>
              <li>12&times;18&Prime; backing paper (neutral tone)</li>
              <li>Colored pencils &amp; thin markers for details</li>
            </ul>
            <p className="text-xs text-slate-500">
              Stage materials by stations: inspiration wall, shape buffet,
              assembly tables, and drying display.
            </p>
          </aside>
        </section>

        <section className="space-y-8 rounded-3xl border border-slate-100 bg-white/90 p-10 shadow-lg shadow-slate-100">
          <h2 className="text-2xl font-semibold text-slate-900">
            Lesson Flow &amp; Timing
          </h2>
          <ol className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Hook & Objectives",
                time: "0-5 min",
                focus:
                  "Spot the differences between Harper's birds and photos; set goal to design a Harper-inspired bird.",
              },
              {
                title: "Harper Spotlight",
                time: "5-10 min",
                focus:
                  "Share quick story of Charley Harper's 'minimal realism.' Highlight shape simplification, repetition, and color harmony.",
              },
              {
                title: "Technique Lab",
                time: "10-20 min",
                focus:
                  "Students rotate through mini-stations: tracing basic shapes, creating beak/wing templates, experimenting with layered backgrounds.",
              },
              {
                title: "Studio Work",
                time: "20-40 min",
                focus:
                  "Independently compose bird collage on backing paper. Teacher conferences on balance, contrast, and craftsmanship.",
              },
              {
                title: "Gallery Reflection",
                time: "40-45 min",
                focus:
                  "Pair-share using sentence frames, then quick sticky-note exit ticket about one Harper technique they mastered.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                  {item.time}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.focus}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <article className="space-y-6 rounded-3xl border border-sky-100 bg-white/90 p-10 shadow-lg shadow-sky-100">
            <h2 className="text-2xl font-semibold text-slate-900">
              Experimentation Stations
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Shape Simplifier",
                  description:
                    "Offer transparency sheets printed with Harper birds. Students overlay on real bird photos to trace the essential shapes.",
                },
                {
                  title: "Color Harmonizer",
                  description:
                    "Invite students to swatch analogous or complementary palettes using paper scraps; glue into mini-swatch cards.",
                },
                {
                  title: "Texture Toolbox",
                  description:
                    "Introduce patterned paper for feathers and habitat elements. Challenge students to find a balance of pattern vs. solid.",
                },
              ].map((station) => (
                <div
                  key={station.title}
                  className="rounded-2xl border border-sky-100 bg-sky-50/70 p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {station.title}
                  </h3>
                  <p className="text-sm text-slate-600">{station.description}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="space-y-6 rounded-3xl border border-emerald-100 bg-white/90 p-10 shadow-lg shadow-emerald-100">
            <h2 className="text-2xl font-semibold text-slate-900">
              Guided Artwork Sequence
            </h2>
            <ol className="space-y-4 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-emerald-700">
                  1. Plan the bird:
                </span>{" "}
                Sketch a simple outline of the bird silhouette; identify head,
                wing, tail, and habitat shapes.
              </li>
              <li>
                <span className="font-semibold text-emerald-700">
                  2. Build the base:
                </span>{" "}
                Lay down large geometric shapes for body and background; glue
                lightly so adjustments remain possible.
              </li>
              <li>
                <span className="font-semibold text-emerald-700">
                  3. Layer features:
                </span>{" "}
                Add contrasting shapes for wings, beaks, and eyes. Encourage
                symmetry checks and pattern repetition.
              </li>
              <li>
                <span className="font-semibold text-emerald-700">
                  4. Add rhythm:
                </span>{" "}
                Use repeated strips, dots, or cut feathers to mimic motion or
                sound in the composition.
              </li>
              <li>
                <span className="font-semibold text-emerald-700">
                  5. Detail &amp; sign:
                </span>{" "}
                Finish with thin marker lines or color pencil accents. Mount the
                work on a contrasting border and sign Harper-style.
              </li>
            </ol>
          </article>
        </section>

        <section className="space-y-8 rounded-3xl border border-indigo-100 bg-white/90 p-10 shadow-lg shadow-indigo-100">
          <h2 className="text-2xl font-semibold text-slate-900">
            Reflection &amp; Assessment
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6 text-sm text-slate-600">
              <h3 className="text-base font-semibold text-slate-900">
                Gallery Walk Prompts
              </h3>
              <ul className="space-y-2">
                <li>
                  “Point to one place where you simplified a complex bird detail.
                  Why did you choose that shape?”
                </li>
                <li>
                  “Which color choices help your bird stand out or blend in?”
                </li>
                <li>
                  “What Harper element (shape, pattern, rhythm) do you admire in
                  a peer&apos;s work?”
                </li>
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl border border-indigo-100 bg-white p-6 text-sm text-slate-600 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Exit Ticket (Sticky Note)
              </h3>
              <p>
                “Today I used <em>_____</em> to make my bird feel like a Charley
                Harper artwork. Next time I would try <em>_____</em>.”
              </p>
              <p className="text-xs text-slate-500">
                Collect on the door. Sort responses into buckets (shape mastery,
                color planning, craftsmanship) to guide next lesson.
              </p>
            </div>
          </div>
          <div className="grid gap-6 text-sm text-slate-600 lg:grid-cols-3">
            <div className="rounded-2xl border border-indigo-100 bg-white/70 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">
                Formative Checks
              </p>
              <ul className="mt-3 space-y-2">
                <li>Quick sketchbook thumbnails before collage</li>
                <li>Teacher conferencing checklist for shape &amp; balance</li>
                <li>Peer “two stars and a wish” feedback mid-process</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-white/70 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">
                Differentiation
              </p>
              <ul className="mt-3 space-y-2">
                <li>Provide pre-cut shapes for fine motor support</li>
                <li>Challenge advanced artists with multi-bird habitats</li>
                <li>Offer bilingual vocab cards (shape, contrast, rhythm)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-white/70 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">
                Extension Ideas
              </p>
              <ul className="mt-3 space-y-2">
                <li>Research local birds and create fact labels</li>
                <li>Animate collages with stop-motion tablets</li>
                <li>Curate a class “Harper Aviary” virtual gallery</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
