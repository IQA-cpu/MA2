// Course intro — animated motion-graphic for "Management Accounting 1".
// Mounts on window.CourseIntro; reads the timeline engine globals.
const { Stage, Sprite, TextSprite, ImageSprite, useSprite, Easing, clamp } = window;

// Palette (matches the course site)
const CREAM = '#f5f4ef';
const NAVY = '#16293f';
const ACCENT = '#b08d4f';
const ACCENT_DEEP = '#97743a';
const SLATE = '#3a4550';
const MUTED = '#6b7480';
const LIGHT = '#9fb0c0';

const HEAD = "'Schibsted Grotesk', system-ui, sans-serif";
const BODY = "'Public Sans', system-ui, sans-serif";
const PHOTO = 'lecturer-mean-udam.jpg';

// Full-bleed background panel with an opacity crossfade (no scaling).
function Bg({ color }) {
  const { localTime, duration } = useSprite();
  const fade = 0.5;
  const exitStart = Math.max(0, duration - fade);
  let opacity = 1;
  if (localTime < fade) opacity = clamp(localTime / fade, 0, 1);
  else if (localTime > exitStart) opacity = 1 - clamp((localTime - exitStart) / fade, 0, 1);
  return React.createElement('div', {
    style: { position: 'absolute', left: 0, top: 0, width: 1280, height: 720, background: color, opacity },
  });
}

// Thin accent rule that wipes in from the left.
function AccentRule({ x, y, w = 86, color = ACCENT }) {
  const { localTime } = useSprite();
  const t = Easing.easeOutCubic(clamp(localTime / 0.5, 0, 1));
  return React.createElement('div', {
    style: {
      position: 'absolute', left: x, top: y, width: w * t, height: 6,
      background: color, borderRadius: 3, transformOrigin: 'left center',
    },
  });
}

function CourseIntro() {
  return (
    <Stage width={1280} height={720} duration={39} background={CREAM}
           fps={60} loop="false" autoplay="false" persistKey="courseintro">

      {/* ── Scene 1 — Welcome ─────────────────────────────── */}
      <Sprite start={0} end={6.6}><Bg color={NAVY} /></Sprite>
      <Sprite start={0.3} end={6.6}>
        <ImageSprite src={PHOTO} x={862} y={126} width={300} height={468} radius={18} kenBurns />
      </Sprite>
      <Sprite start={0.5} end={6.6}>
        <TextSprite text="MANAGEMENT ACCOUNTING 1  ·  ACCT 221" x={110} y={196} size={20} weight={700} color={ACCENT} font={HEAD} letterSpacing="0.14em" />
      </Sprite>
      <Sprite start={0.7} end={6.6}><AccentRule x={112} y={244} /></Sprite>
      <Sprite start={0.9} end={6.6}>
        <TextSprite text="Welcome." x={108} y={266} size={104} weight={800} color={CREAM} font={HEAD} letterSpacing="-0.03em" />
      </Sprite>
      <Sprite start={1.4} end={6.6}>
        <TextSprite text={"Hi everyone — I'm so glad\nyou're here."} x={110} y={408} size={31} weight={500} color={LIGHT} font={BODY} letterSpacing="-0.01em" />
      </Sprite>

      {/* ── Scene 2 — What the course is about ────────────── */}
      <Sprite start={6.8} end={13.4}>
        <TextSprite text="WHAT THIS COURSE IS ABOUT" x={110} y={150} size={20} weight={700} color={ACCENT_DEEP} font={HEAD} letterSpacing="0.14em" />
      </Sprite>
      <Sprite start={7.0} end={13.4}><AccentRule x={112} y={198} /></Sprite>
      <Sprite start={7.1} end={13.4}>
        <TextSprite text={"Turning numbers into\nbetter decisions."} x={108} y={222} size={66} weight={800} color={NAVY} font={HEAD} letterSpacing="-0.02em" />
      </Sprite>
      <Sprite start={7.7} end={13.4}>
        <TextSprite text={"How accounting information is prepared, processed and\npresented to support managers in planning, control\nand decision-making."} x={110} y={426} size={26} weight={400} color={SLATE} font={BODY} letterSpacing="0" />
      </Sprite>

      {/* ── Scene 3 — Five areas ──────────────────────────── */}
      <Sprite start={13.6} end={21.6}><Bg color={NAVY} /></Sprite>
      <Sprite start={13.9} end={21.6}>
        <TextSprite text="FIVE AREAS WE'LL EXPLORE" x={110} y={104} size={20} weight={700} color={ACCENT} font={HEAD} letterSpacing="0.14em" />
      </Sprite>
      <Sprite start={14.1} end={21.6}><AccentRule x={112} y={150} /></Sprite>
      {[
        ['01', 'Management information'],
        ['02', 'Cost recording'],
        ['03', 'Costing techniques'],
        ['04', 'Decision-making'],
        ['05', 'Cash management'],
      ].map((row, i) => (
        <Sprite key={i} start={14.5 + i * 0.55} end={21.6}>
          <TextSprite text={row[0]} x={112} y={196 + i * 88} size={30} weight={800} color={ACCENT} font={HEAD} />
          <TextSprite text={row[1]} x={188} y={194 + i * 88} size={40} weight={700} color={CREAM} font={HEAD} letterSpacing="-0.01em" />
        </Sprite>
      ))}

      {/* ── Scene 4 — How we'll learn ─────────────────────── */}
      <Sprite start={21.8} end={28.8}>
        <TextSprite text="HOW WE'LL LEARN" x={110} y={140} size={20} weight={700} color={ACCENT_DEEP} font={HEAD} letterSpacing="0.14em" />
      </Sprite>
      <Sprite start={22.0} end={28.8}><AccentRule x={112} y={188} /></Sprite>
      <Sprite start={22.1} end={28.8}>
        <TextSprite text="Learn by doing." x={108} y={212} size={66} weight={800} color={NAVY} font={HEAD} letterSpacing="-0.02em" />
      </Sprite>
      <Sprite start={22.7} end={28.8}>
        <TextSprite text={"Lectures  ·  Problem-solving  ·  Practice & quizzes\nGroup work  ·  A real company visit"} x={110} y={330} size={28} weight={600} color={ACCENT_DEEP} font={HEAD} letterSpacing="-0.01em" />
      </Sprite>
      <Sprite start={23.4} end={28.8}>
        <TextSprite text={"Plus a group assignment on real company cost\nmanagement — connecting the classroom to practice."} x={110} y={470} size={25} weight={400} color={SLATE} font={BODY} />
      </Sprite>

      {/* ── Scene 5 — The goal ────────────────────────────── */}
      <Sprite start={29.0} end={34.3}><Bg color={NAVY} /></Sprite>
      <Sprite start={29.3} end={34.3}>
        <TextSprite text="MY GOAL FOR YOU" x={110} y={170} size={20} weight={700} color={ACCENT} font={HEAD} letterSpacing="0.14em" />
      </Sprite>
      <Sprite start={29.5} end={34.3}><AccentRule x={112} y={218} /></Sprite>
      <Sprite start={29.7} end={34.3}>
        <TextSprite text={"Not just the calculations —\nhow management accounting\ndrives real decisions."} x={108} y={244} size={54} weight={700} color={CREAM} font={HEAD} letterSpacing="-0.02em" />
      </Sprite>

      {/* ── Scene 6 — Let's begin (holds on the final frame, no exit fade) ── */}
      <Sprite start={34.5} end={45}>
        <ImageSprite src={PHOTO} x={110} y={232} width={158} height={246} radius={16} />
      </Sprite>
      <Sprite start={34.8} end={45}>
        <TextSprite text="Let's get started." x={312} y={250} size={64} weight={800} color={NAVY} font={HEAD} letterSpacing="-0.02em" />
      </Sprite>
      <Sprite start={35.2} end={45}><AccentRule x={314} y={344} /></Sprite>
      <Sprite start={35.4} end={45}>
        <TextSprite text={"I look forward to working with you\nthroughout the semester."} x={314} y={372} size={27} weight={400} color={SLATE} font={BODY} />
      </Sprite>
      <Sprite start={35.9} end={45}>
        <TextSprite text="Mean Udam, MSc, ACCA" x={314} y={470} size={24} weight={700} color={ACCENT_DEEP} font={HEAD} letterSpacing="0" />
      </Sprite>

    </Stage>
  );
}

window.CourseIntro = CourseIntro;
