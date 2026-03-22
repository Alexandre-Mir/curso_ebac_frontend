<template>
  <div class="calculator-card">
    <div class="calculator-header">
      <div class="header-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="10" y2="10" />
          <line x1="14" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="10" y2="14" />
          <line x1="14" y1="14" x2="16" y2="14" />
          <line x1="8" y1="18" x2="16" y2="18" />
        </svg>
      </div>
      <h1>Calculadora</h1>
      <p class="subtitle">Calculadora aritmética reativa</p>
    </div>

    <div class="calculator-body">
      <div class="input-group">
        <label for="numero1">Primeiro número</label>
        <input
          id="numero1"
          type="number"
          v-model.number="numero1"
          placeholder="0"
          autocomplete="off"
        />
      </div>

      <div class="operation-group">
        <label for="operacao">Operação</label>
        <div class="select-wrapper">
          <select id="operacao" v-model="operacao">
            <option value="+">+ Soma</option>
            <option value="-">− Subtração</option>
            <option value="*">× Multiplicação</option>
            <option value="/">÷ Divisão</option>
          </select>
          <div class="select-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>

      <div class="input-group">
        <label for="numero2">Segundo número</label>
        <input
          id="numero2"
          type="number"
          v-model.number="numero2"
          placeholder="0"
          autocomplete="off"
        />
      </div>
    </div>

    <div class="result-section" :class="{ 'result-error': isErro }">
      <span class="result-label">Resultado</span>
      <div class="result-display">
        <span class="result-expression">{{ expressao }}</span>
        <span class="result-value" :key="resultado">{{ resultado }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const numero1 = ref(0)
const numero2 = ref(0)
const operacao = ref('+')

const isErro = computed(() => {
  return operacao.value === '/' && numero2.value === 0
})

const expressao = computed(() => {
  const simbolos = { '+': '+', '-': '−', '*': '×', '/': '÷' }
  const n1 = numero1.value ?? 0
  const n2 = numero2.value ?? 0
  return `${n1} ${simbolos[operacao.value]} ${n2} =`
})

const resultado = computed(() => {
  const n1 = numero1.value ?? 0
  const n2 = numero2.value ?? 0

  switch (operacao.value) {
    case '+':
      return formatarNumero(n1 + n2)
    case '-':
      return formatarNumero(n1 - n2)
    case '*':
      return formatarNumero(n1 * n2)
    case '/':
      if (n2 === 0) return 'Erro: divisão por zero'
      return formatarNumero(n1 / n2)
    default:
      return '0'
  }
})

function formatarNumero(valor) {
  if (Number.isInteger(valor)) return valor.toString()
  return parseFloat(valor.toFixed(8)).toString()
}
</script>

<style scoped>
.calculator-card {
  width: 100%;
  max-width: 440px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

.calculator-header {
  text-align: center;
  padding: 32px 32px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.header-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 16px;
  color: white;
  margin-bottom: 16px;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);
}

h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0 0 4px;
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: 0.875rem;
  color: rgba(148, 163, 184, 0.8);
  margin: 0;
}

.calculator-body {
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group,
.operation-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

input[type="number"] {
  width: 100%;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: #f1f5f9;
  font-size: 1.125rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  outline: none;
  transition: all 0.25s ease;
  box-sizing: border-box;
}

input[type="number"]:focus {
  border-color: rgba(99, 102, 241, 0.6);
  background: rgba(99, 102, 241, 0.06);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 0.3;
}

.select-wrapper {
  position: relative;
}

select {
  width: 100%;
  padding: 14px 44px 14px 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: #f1f5f9;
  font-size: 1.125rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  transition: all 0.25s ease;
  box-sizing: border-box;
}

select:focus {
  border-color: rgba(99, 102, 241, 0.6);
  background: rgba(99, 102, 241, 0.06);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

select option {
  background: #1e293b;
  color: #f1f5f9;
  padding: 8px;
}

.select-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #94a3b8;
}

.result-section {
  margin: 0 32px 32px;
  padding: 24px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(139, 92, 246, 0.08));
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.result-section.result-error {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.12), rgba(220, 38, 38, 0.08));
  border-color: rgba(239, 68, 68, 0.25);
}

.result-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
}

.result-display {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.result-expression {
  font-size: 0.9rem;
  color: rgba(148, 163, 184, 0.7);
  font-weight: 400;
}

.result-value {
  font-size: 2rem;
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: -0.03em;
  line-height: 1.2;
  animation: fadeIn 0.2s ease;
}

.result-error .result-value {
  color: #f87171;
  font-size: 1.1rem;
  font-weight: 600;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .calculator-card {
    border-radius: 20px;
  }

  .calculator-header {
    padding: 24px 20px 20px;
  }

  .calculator-body {
    padding: 20px;
  }

  .result-section {
    margin: 0 20px 20px;
  }

  .result-value {
    font-size: 1.6rem;
  }
}
</style>
