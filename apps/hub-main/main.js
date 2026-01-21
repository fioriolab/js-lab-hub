import './style.css'

// 1. Seus dados de projetos
const projetos = [
  {
    title: "Tabela IMC",
    description: "Ferramenta de saúde que calcula o Índice de Massa Corporal e classifica o resultado conforme os padrões da OMS, com feedback visual imediato.",
    tech: ["JavaScript", "Logic", "DOM"],
    linkGithub: "https://github.com/fioriolab/js-lab-hub/tree/main/apps/tabela-imc",
    linkDemo: "https://js-lab-hub-tabela-imc.vercel.app/",
    image: "/tabela-imc.png"
  },
  {
    title: "Título do Projeto",
    description: "Descrição do Projeto.",
    tech: ["JavaScript", "Logica", "Math"],
    linkGithub: "https://github.com/fioriolab",
    linkDemo: "#",
    image: "/etanol-gasolina.png"
  }
];

// 2. Injetar Projetos no HTML
const listaContainer = document.querySelector('#lista-projetos');

// Adicionei os ícones da Lucide no HTML gerado abaixo:
listaContainer.innerHTML = projetos.map(proj => `
  <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 md:gap-8 lg:hover:!opacity-100 border border-transparent hover:border-slate-800 p-4 rounded-lg hover:bg-slate-800/50">
    <div class="sm:col-span-2">
      <img src="${proj.image}" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 object-cover w-full h-auto" />
    </div>
    <div class="sm:col-span-6">
      <h4 class="font-medium leading-tight text-slate-200">
        <a href="${proj.linkDemo}" target="_blank" class="flex items-center gap-2 hover:text-yellow-500">
          ${proj.title} <i data-lucide="github" class="w-5 h-5 inline-block"></i>
        </a>
      </h4>
      <p class="mt-2 text-sm leading-normal text-slate-400">${proj.description}</p>
      
      <ul class="mt-4 flex flex-wrap gap-2">
        ${proj.tech.map(t => `<li class="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-500">${t}</li>`).join('')}
      </ul>

      <div class="mt-4 flex gap-4">
        <a href="${proj.linkGithub}" target="_blank" class="text-xs text-slate-400 hover:text-yellow-500 flex items-center gap-1">
          <i data-lucide="github" class="w-5 h-5 inline-block"></i>Código no GitHub
        </a>
      </div>
    </div>
  </div>
`).join('');

// 🚩 IMPORTANTE: Esta linha deve vir APÓS o innerHTML
// Ela varre o documento em busca de tags <i data-lucide="...">
const renderIcons = () => {
  // Verificamos se a biblioteca Lucide está disponível globalmente
  if (typeof lucide !== 'undefined') {
    lucide.createIcons({
      attrs: {
        class: ['lucide-icon', 'w-5', 'h-5'] // Garante que todos os ícones tenham tamanho
      }
    });
    console.log("Ícones renderizados com sucesso!");
  } else {
    console.log("Aguardando biblioteca Lucide...");
    setTimeout(renderIcons, 100);
  }
};

renderIcons();

// 3. Efeito Spotlight
const spotlight = document.querySelector('#spotlight');
window.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  spotlight.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(247, 223, 30, 0.1), transparent 80%)`;
});