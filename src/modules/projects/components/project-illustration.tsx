type ProjectIllustrationProps = {
  projectId: string;
  variant?: "card" | "detail";
};

const PROJECT_IDS = new Set([
  "gestion-patrimonios",
  "abonos-bancarios",
  "gestion-emisiones",
  "inkari-cafe",
  "comparapet-data",
  "contapack",
]);

/** Decorative, synthetic artwork: it communicates each project's domain without exposing company UI or data. */
export function ProjectIllustration({ projectId, variant = "card" }: ProjectIllustrationProps) {
  return (
    <div className={`project-illustration project-illustration--${projectId} project-illustration--${variant}`} aria-hidden="true">
      <svg
        viewBox="0 0 520 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio={variant === "card" ? "xMidYMid slice" : "xMidYMid meet"}
      >
        <defs>
          <linearGradient id={`wash-${projectId}`} x1="48" y1="20" x2="462" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--illustration-wash)" />
            <stop offset="1" stopColor="var(--illustration-wash-end)" />
          </linearGradient>
          <filter id={`shadow-${projectId}`} x="0" y="0" width="520" height="260" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="var(--foreground)" floodOpacity=".08" />
          </filter>
        </defs>
        <rect x="16" y="14" width="488" height="232" rx="22" fill={`url(#wash-${projectId})`} />
        <path className="project-illustration__grid" d="M40 55H480M40 95H480M40 135H480M40 175H480M40 215H480M80 35V225M120 35V225M160 35V225M200 35V225M240 35V225M280 35V225M320 35V225M360 35V225M400 35V225M440 35V225" />
        {projectId === "gestion-patrimonios" && <Patrimonios />}
        {projectId === "abonos-bancarios" && <Abonos />}
        {projectId === "gestion-emisiones" && <Emisiones />}
        {projectId === "inkari-cafe" && <Cafe />}
        {projectId === "comparapet-data" && <Comparapet />}
        {projectId === "contapack" && <Contapack />}
        {!PROJECT_IDS.has(projectId) && <Generic />}
      </svg>
      <span className="project-illustration__caption">VISTA CONCEPTUAL <i>·</i> DATOS ILUSTRATIVOS</span>
    </div>
  );
}

function Patrimonios() {
  return (
    <g filter="url(#shadow-gestion-patrimonios)">
      <rect className="illustration-paper" x="96" y="49" width="238" height="164" rx="14" />
      <path className="illustration-line" d="M117 75h93" />
      <rect className="illustration-soft" x="117" y="89" width="194" height="30" rx="8" />
      <circle className="illustration-accent-fill" cx="134" cy="104" r="6" />
      <path className="illustration-line" d="M151 101h84m-84 7h58" />
      <rect className="illustration-soft" x="117" y="128" width="194" height="30" rx="8" />
      <circle className="illustration-primary-fill" cx="134" cy="143" r="6" />
      <path className="illustration-line" d="M151 140h103m-103 7h65" />
      <rect className="illustration-soft" x="117" y="167" width="194" height="30" rx="8" />
      <circle className="illustration-muted-fill" cx="134" cy="182" r="6" />
      <path className="illustration-line" d="M151 179h75m-75 7h49" />
      <rect className="illustration-paper" x="291" y="93" width="132" height="119" rx="15" />
      <rect className="illustration-primary-fill" x="312" y="113" width="34" height="34" rx="10" />
      <path className="illustration-on-primary" d="M320 130l5 5 12-13" />
      <path className="illustration-line" d="M357 121h45m-45 9h33" />
      <path className="illustration-muted-line" d="M312 164h91" />
      <rect className="illustration-accent-fill" x="312" y="177" width="63" height="13" rx="6.5" />
    </g>
  );
}

function Abonos() {
  return (
    <g filter="url(#shadow-abonos-bancarios)">
      <rect className="illustration-paper" x="62" y="74" width="126" height="116" rx="17" />
      <path className="illustration-primary-line" d="M91 101h54m-54 14h54m-54 14h35" />
      <path className="illustration-accent-line" d="M91 151h52" />
      <circle className="illustration-accent-fill" cx="163" cy="157" r="8" />
      <path className="illustration-route" d="M194 131h64m-12-12 12 12-12 12" />
      <rect className="illustration-paper" x="268" y="53" width="170" height="68" rx="16" />
      <circle className="illustration-primary-fill" cx="294" cy="87" r="11" />
      <path className="illustration-on-primary" d="M289 87l4 4 7-8" />
      <path className="illustration-line" d="M316 82h98m-98 11h65" />
      <rect className="illustration-paper" x="268" y="145" width="170" height="68" rx="16" />
      <circle className="illustration-accent-fill" cx="294" cy="179" r="11" />
      <path className="illustration-on-accent" d="M289 179h10m-5-5v10" />
      <path className="illustration-line" d="M316 174h98m-98 11h65" />
      <circle className="illustration-route-node" cx="233" cy="131" r="7" />
      <path className="illustration-route" d="M233 131v-44h25m-25 44v48h25" />
    </g>
  );
}

function Emisiones() {
  return (
    <g filter="url(#shadow-gestion-emisiones)">
      <rect className="illustration-paper" x="66" y="49" width="365" height="164" rx="16" />
      <path className="illustration-line" d="M89 74h112" />
      <rect className="illustration-soft" x="89" y="88" width="92" height="47" rx="10" />
      <path className="illustration-primary-line" d="M102 119v-10m12 10V99m12 20v-15m12 15V95m12 24v-8" />
      <rect className="illustration-soft" x="191" y="88" width="92" height="47" rx="10" />
      <path className="illustration-accent-line" d="M205 119h62m-62-10h48m-48-10h35" />
      <rect className="illustration-soft" x="293" y="88" width="115" height="47" rx="10" />
      <path className="illustration-primary-line" d="M309 119l15-13 13 6 19-16 17 7 20-12" />
      <path className="illustration-line" d="M89 151h319" />
      <path className="illustration-muted-line" d="M89 166h319m-319 14h319m-319 14h319" />
      <path className="illustration-primary-line" d="M135 151v43m91-43v43m88-43v43" />
      <circle className="illustration-accent-fill" cx="376" cy="151" r="5" />
      <circle className="illustration-primary-fill" cx="396" cy="151" r="5" />
    </g>
  );
}

function Cafe() {
  return (
    <g filter="url(#shadow-inkari-cafe)">
      <rect className="illustration-paper" x="70" y="48" width="380" height="166" rx="17" />
      <path className="illustration-line" d="M92 73h96m-84 0v120" />
      <circle className="illustration-accent-fill" cx="110" cy="93" r="7" />
      <path className="illustration-line" d="M126 90h47m-47 8h31" />
      <path className="illustration-muted-line" d="M103 119h65m-65 12h65m-65 12h51" />
      <rect className="illustration-coffee" x="207" y="80" width="66" height="105" rx="12" />
      <path className="illustration-coffee-fold" d="M218 80v-9h44v9" />
      <path className="illustration-coffee-label" d="M219 113h42v36h-42z" />
      <path className="illustration-coffee-ink" d="M231 137c5-13 11-13 17 0m-14-12c2-3 5-3 7 0m-17 30h27" />
      <rect className="illustration-soft" x="292" y="90" width="58" height="95" rx="11" />
      <path className="illustration-accent-line" d="M306 115h30m-30 10h25m-25 37h30" />
      <circle className="illustration-coffee-bean" cx="321" cy="146" r="11" />
      <path className="illustration-coffee-ink" d="M316 141c5 4 5 7 1 11" />
      <rect className="illustration-soft" x="366" y="90" width="60" height="95" rx="11" />
      <path className="illustration-primary-line" d="M382 120h28m-28 10h22m-28 37h37" />
      <path className="illustration-accent-line" d="M391 149c0-9 13-9 13 0v7h-13v-7Zm-4 7h21" />
    </g>
  );
}

function Comparapet() {
  return (
    <g filter="url(#shadow-comparapet-data)">
      <rect className="illustration-paper" x="64" y="59" width="391" height="150" rx="17" />
      <rect className="illustration-soft" x="86" y="78" width="248" height="28" rx="14" />
      <circle className="illustration-muted-line" cx="101" cy="92" r="5" />
      <path className="illustration-line" d="M115 92h116" />
      <rect className="illustration-soft" x="86" y="119" width="102" height="68" rx="11" />
      <path className="illustration-product" d="M110 145h54l-5 28h-44l-5-28Zm13 0a14 14 0 0 1 28 0" />
      <circle className="illustration-accent-fill" cx="171" cy="128" r="4" />
      <rect className="illustration-soft" x="199" y="119" width="102" height="68" rx="11" />
      <path className="illustration-product" d="M223 145h54l-5 28h-44l-5-28Zm13 0a14 14 0 0 1 28 0" />
      <circle className="illustration-primary-fill" cx="284" cy="128" r="4" />
      <circle className="illustration-lens" cx="366" cy="145" r="32" />
      <path className="illustration-primary-line" d="m389 168 24 24" />
      <path className="illustration-muted-line" d="M347 144h38m-19-19v38" />
    </g>
  );
}

function Contapack() {
  return (
    <g filter="url(#shadow-contapack)">
      <path className="illustration-relation" d="M165 104h87m34 0h69m-190 20v35m-1 0h88m34 0h69m-155 0v29m111-64v35" />
      <rect className="illustration-paper" x="75" y="72" width="91" height="64" rx="12" />
      <rect className="illustration-primary-fill" x="75" y="72" width="91" height="18" rx="12" />
      <path className="illustration-table-head" d="M86 82h48" />
      <path className="illustration-muted-line" d="M88 103h65m-65 12h40" />
      <rect className="illustration-paper" x="252" y="72" width="91" height="64" rx="12" />
      <rect className="illustration-accent-fill" x="252" y="72" width="91" height="18" rx="12" />
      <path className="illustration-table-head" d="M263 82h47" />
      <path className="illustration-muted-line" d="M265 103h65m-65 12h40" />
      <rect className="illustration-paper" x="361" y="72" width="91" height="64" rx="12" />
      <rect className="illustration-primary-fill" x="361" y="72" width="91" height="18" rx="12" />
      <path className="illustration-table-head" d="M372 82h47" />
      <path className="illustration-muted-line" d="M374 103h65m-65 12h40" />
      <rect className="illustration-paper" x="142" y="158" width="91" height="54" rx="12" />
      <path className="illustration-line" d="M156 176h62m-62 12h44" />
      <rect className="illustration-paper" x="286" y="158" width="91" height="54" rx="12" />
      <path className="illustration-line" d="M300 176h62m-62 12h44" />
      <circle className="illustration-route-node" cx="252" cy="104" r="5" />
      <circle className="illustration-route-node" cx="252" cy="159" r="5" />
      <circle className="illustration-route-node" cx="342" cy="159" r="5" />
    </g>
  );
}

function Generic() {
  return (
    <g>
      <rect className="illustration-paper" x="112" y="60" width="296" height="144" rx="16" />
      <path className="illustration-primary-line" d="M139 95h158m-158 16h224m-224 16h190" />
      <path className="illustration-muted-line" d="M139 151h224m-224 16h175" />
      <circle className="illustration-accent-fill" cx="375" cy="95" r="8" />
    </g>
  );
}
