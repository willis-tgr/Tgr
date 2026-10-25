import "./tiger.css";
import WillistWordmark from "@/components/WillistWordmark";

const CONTACT_EMAIL = "contact@willis-tgr.com";

export default function Home() {
  return (
    <>
      <Sky />
      <Header />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <Products />
        <Connected />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Sky() {
  return (
    <div className="sky" aria-hidden>
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="stars" />
      <div className="grain" />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-night/40 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" aria-label="Tgr 홈">
          {/* eslint-disable-next-line @next/next/no-img-element -- 정적 내보내기라 이미지 최적화를 쓰지 않음 */}
          <img src="/brand/tgr-wordmark.webp" alt="Tgr" className="h-8 w-auto" />
        </a>
        <nav className="flex items-center gap-1 text-sm font-medium text-mist">
          <a href="#products" className="rounded-full px-3 py-1.5 transition hover:bg-white/5 hover:text-ivory">
            서비스
          </a>
          <a href="#contact" className="rounded-full px-3 py-1.5 transition hover:bg-white/5 hover:text-ivory">
            연락하기
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-6 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-6">
      <div>
        <p className="rise font-serif text-lg tracking-wide text-ember-soft/80 italic">— a studio for the becoming</p>
        {/* eslint-disable-next-line @next/next/no-img-element -- 정적 내보내기라 이미지 최적화를 쓰지 않음 */}
        <img
          src="/brand/tgr-wordmark.webp"
          alt="Tgr"
          className="rise mt-6 w-[15rem] drop-shadow-[0_0_40px_rgba(242,154,58,0.35)] [animation-delay:120ms] sm:w-[20rem]"
        />
        <h1 className="rise mt-10 max-w-xl text-[2.25rem] leading-[1.2] font-light tracking-tight text-balance [animation-delay:240ms] sm:text-5xl">
          결과보다 과정을
          <br />
          <span className="text-dream font-semibold">나누는 서비스</span>를 만듭니다
        </h1>
        <p className="rise mt-6 max-w-lg text-lg leading-relaxed text-mist [animation-delay:360ms]">
          Tgr은 목표를 향해 가는 과정을 기록하는 SNS <b className="font-semibold text-ivory">Willist</b>와, 지금 하고 있는 일을
          여럿이 함께 방송하는 <b className="font-semibold text-ivory">Ing</b>를 만듭니다.
        </p>
        <div className="rise mt-10 flex flex-wrap gap-3 [animation-delay:480ms]">
          <a
            href="#willist"
            className="rounded-full bg-gradient-to-r from-ember-soft to-ember px-6 py-3 text-sm font-semibold text-night shadow-[0_0_40px_-6px_rgba(242,154,58,0.7)] transition hover:brightness-110"
          >
            Willist 보기
          </a>
          <a href="#ing" className="glass rounded-full px-6 py-3 text-sm font-semibold transition hover:bg-white/10">
            Ing 보기
          </a>
        </div>
      </div>

      <TigerScene />

      <a
        href="#manifesto"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-[0.3em] text-mist/70 uppercase transition hover:text-ivory lg:flex"
      >
        scroll
        <span className="h-10 w-px bg-gradient-to-b from-mist/70 to-transparent" aria-hidden />
      </a>
    </section>
  );
}

function TigerScene() {
  return (
    <div className="rise relative mx-auto aspect-square w-full max-w-[30rem] [animation-delay:300ms] lg:max-w-[34rem]">
      <div className="moon absolute inset-[10%] rounded-full" aria-hidden />
      <div className="orbit absolute inset-[3%] rounded-full border border-white/10" aria-hidden>
        <span className="orbit-dot" />
      </div>
      <div className="orbit orbit-reverse absolute -inset-[5%] rounded-full border border-dashed border-white/[0.07]" aria-hidden>
        <span className="orbit-dot !size-1.5 !bg-[#c9b6ff] !shadow-[0_0_12px_3px_rgba(201,182,255,0.6)]" />
      </div>
      <span className="sparkle top-[12%] left-[18%]" aria-hidden />
      <span className="sparkle top-[22%] right-[10%] !size-1 [animation-delay:-1.2s]" aria-hidden />
      <span className="sparkle bottom-[20%] left-[6%] !size-1 [animation-delay:-2.4s]" aria-hidden />
      <div className="walking-tiger">
        <div className="walking-tiger-viewport">
          {/* eslint-disable-next-line @next/next/no-img-element -- 애니메이션이 SVG 안에 들어 있어 원본을 그대로 씀 */}
          <img
            src="/brand/tgr-tiger-walk.svg"
            alt="앞으로 사뿐사뿐 걸어오는 Tgr의 아기 호랑이"
            width={360}
            height={366}
            className="walking-tiger-frames"
          />
        </div>
      </div>
      <div className="mist absolute inset-x-[5%] bottom-[4%] z-20 h-[22%]" aria-hidden />
    </div>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-28 text-center sm:px-8 sm:py-40">
      <p className="reveal font-serif text-xl text-ember-soft/70 italic">not the result, but the becoming</p>
      <p className="reveal mt-8 text-2xl leading-[1.6] font-light text-balance text-ivory/90 sm:text-4xl sm:leading-[1.55]">
        완성된 한 장면보다, 그곳에 닿기까지의
        <br className="hidden sm:block" /> <span className="text-dream font-medium">모든 날들</span>이 더 오래 빛난다고 믿어요.
      </p>
      <div className="glow-line reveal mx-auto mt-14 h-px w-40" aria-hidden />
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl scroll-mt-20 px-5 sm:px-8">
      <SectionLabel n="01" title="Our services" />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article id="willist" className="glass reveal relative flex scroll-mt-24 flex-col overflow-hidden rounded-[2rem] p-8 sm:p-10">
          <div className="pointer-events-none absolute -top-28 -left-20 size-80 rounded-full bg-willist-deep/25 blur-[100px]" aria-hidden />
          <div className="pointer-events-none absolute -right-16 -bottom-24 size-64 rounded-full bg-willist/10 blur-[90px]" aria-hidden />
          <div className="relative flex flex-1 flex-col">
            <WillistWordmark className="h-12 w-auto self-start" />
            <p className="mt-2 text-sm font-semibold text-willist-deep">과정을 기록하는 SNS</p>
            <h2 className="mt-1 font-display text-4xl font-extrabold tracking-tight text-willist">Willist</h2>
            <p className="mt-4 leading-relaxed text-ivory/70">
              운동, 공부, 식단처럼 하나의 목표를 Willist로 만들고 매일의 기록을 순서대로 쌓아요. 옆으로 넘기면 처음 모습부터
              지금까지의 변화가 한 흐름으로 이어져 보여요.
            </p>
            <ul className="mt-7 space-y-4 border-t border-white/10 pt-7">
              <Feature title="한 목표, 한 흐름" text="하나의 목표 아래 기록을 시간 순서대로 묶어 옆으로 넘겨 봐요." />
              <Feature title="크루" text="같은 목표를 가진 사람들이 모여 함께 기록하고 응원해요." />
              <Feature title="투표로 운영하는 크루" text="크루가 커지면 가입이나 규칙 변경을 멤버 투표로 정하고, 결과는 시스템이 그대로 실행해요." />
            </ul>
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-9">
              <a
                href="https://willist.app"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-willist px-5 py-2.5 text-sm font-semibold text-night shadow-[0_0_30px_-6px_rgba(242,122,122,0.7)] transition hover:brightness-105"
              >
                willist.app 바로가기 ↗
              </a>
              <span className="text-sm text-ivory/50">웹 서비스 운영 중 · 모바일 앱 준비 중</span>
            </div>
          </div>
        </article>

        <article id="ing" className="glass reveal relative flex scroll-mt-24 flex-col overflow-hidden rounded-[2rem] p-8 sm:p-10">
          <div className="pointer-events-none absolute -top-24 -right-16 size-80 rounded-full bg-ing-violet/35 blur-[100px]" aria-hidden />
          <div className="pointer-events-none absolute -bottom-28 -left-10 size-64 rounded-full bg-ing-rose/25 blur-[90px]" aria-hidden />
          <div className="relative flex flex-1 flex-col">
            {/* eslint-disable-next-line @next/next/no-img-element -- 정적 내보내기라 이미지 최적화를 쓰지 않음 */}
            <img src="/brand/ing-logo.svg" alt="Ing 로고" className="h-20 w-auto self-start" />
            <p className="mt-2 text-sm font-semibold text-ing-rose">여럿이 함께 출연하는 라이브 방송</p>
            <h2 className="mt-1 font-display text-4xl font-extrabold tracking-tight">Ing</h2>
            <p className="mt-4 leading-relaxed text-ivory/70">
              혼자 말하는 방송이 아니라, 시청자가 손을 들면 무대에 올라와 함께 이야기하는 라이브 방송이에요. Willist 계정 하나로
              바로 시작할 수 있어요.
            </p>
            <ul className="mt-7 space-y-4 border-t border-white/10 pt-7">
              <Feature title="멀티 게스트" text="시청자가 손을 들면 호스트가 무대로 초대해 함께 출연해요." />
              <Feature title="크루 방송" text="Willist 크루끼리 모여 함께 방송하고 함께 봐요." />
              <Feature title="쓰던 방송 프로그램 그대로" text="OBS로 송출하고, 유튜브·치지직에도 동시에 내보낼 수 있어요." />
              <Feature title="후원 선물" text="화면 가득 펼쳐지는 선물로 출연자를 응원해요." />
            </ul>
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-9">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold">
                <span className="size-2 animate-pulse rounded-full bg-ing-rose shadow-[0_0_10px_2px_rgba(244,63,94,0.7)]" aria-hidden />
                출시 준비 중
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="reveal flex items-center gap-4">
      <span className="font-serif text-lg text-ember-soft italic">{n}</span>
      <span className="h-px w-10 bg-gradient-to-r from-ember-soft/70 to-transparent" aria-hidden />
      <span className="font-serif text-lg tracking-wide text-mist italic">{title}</span>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <li>
      <p className="font-semibold">{title}</p>
      <p className="mt-0.5 text-[0.95rem] leading-relaxed text-ivory/55">{text}</p>
    </li>
  );
}

function Connected() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-40">
      <SectionLabel n="02" title="One account, one journey" />
      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="reveal">
          <h2 className="text-3xl leading-tight font-light tracking-tight text-balance sm:text-4xl">
            하나의 계정으로 <span className="text-dream font-semibold">이어져요</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-mist">
            Willist 계정으로 Ing에 로그인하고, Willist에서 만든 크루가 Ing에서 함께 방송해요. 쌓아 온 과정은 Willist에, 지금 하고
            있는 모습은 Ing에 담아요.
          </p>
        </div>
        <div className="relative">
          <div className="glow-line absolute top-1/2 right-6 left-6 hidden h-px sm:block" aria-hidden />
          <ol className="relative grid gap-4 sm:grid-cols-3">
            <Step n="I" title="Willist에서 기록" text="목표를 만들고 매일의 과정을 남겨요." glow="rgba(242,122,122,0.35)" />
            <Step n="II" title="크루로 모이기" text="같은 목표를 가진 사람들과 크루를 만들어요." glow="rgba(255,207,148,0.35)" />
            <Step n="III" title="Ing에서 함께 방송" text="크루끼리 지금 하는 모습을 라이브로 나눠요." glow="rgba(124,58,237,0.4)" />
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, text, glow }: { n: string; title: string; text: string; glow: string }) {
  return (
    <li className="glass reveal relative overflow-hidden rounded-3xl p-6">
      <div
        className="pointer-events-none absolute -top-10 -right-10 size-32 rounded-full blur-2xl"
        style={{ background: glow }}
        aria-hidden
      />
      <span className="relative font-serif text-3xl text-ember-soft italic">{n}</span>
      <p className="relative mt-8 font-semibold">{title}</p>
      <p className="relative mt-1 text-sm leading-relaxed text-mist">{text}</p>
    </li>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden">
      <div className="glow-line mx-auto h-px max-w-4xl opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-28 text-center sm:px-8 sm:py-36">
        <div className="pointer-events-none absolute top-1/2 left-1/2 size-[28rem] -translate-1/2 rounded-full bg-ember/10 blur-[120px]" aria-hidden />
        <div className="reveal relative">
          {/* eslint-disable-next-line @next/next/no-img-element -- 정적 내보내기라 이미지 최적화를 쓰지 않음 */}
          <img src="/brand/tgr-tiger.webp" alt="" className="tiger mx-auto w-28 sm:w-32" />
        </div>
        <h2 className="reveal relative mt-8 text-3xl font-light tracking-tight sm:text-4xl">
          함께 <span className="text-dream font-semibold">이야기해요</span>
        </h2>
        <p className="reveal relative mt-4 text-mist">서비스 문의와 제휴 제안은 메일로 보내 주세요.</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="reveal relative mt-10 inline-block font-serif text-3xl break-all text-ivory italic underline decoration-white/15 decoration-1 underline-offset-[10px] transition hover:text-ember-soft hover:decoration-ember-soft sm:text-5xl"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-mist sm:px-8">
        <p className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element -- 정적 내보내기라 이미지 최적화를 쓰지 않음 */}
          <img src="/brand/tgr-wordmark.webp" alt="Tgr" className="h-6 w-auto opacity-80" />
          <span>© 2026</span>
        </p>
        <p className="font-serif italic">willis-tgr.com</p>
      </div>
    </footer>
  );
}
