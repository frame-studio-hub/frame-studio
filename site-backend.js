// Public website integration: project briefs and reviews use the FRAME LAB API.
const API_BASE = 'https://frame-lab-3wx.pages.dev';
const $ = (selector) => document.querySelector(selector);
const setStatus = (el, message, bad=false) => {
  if (!el) return;
  el.textContent = message;
  el.classList.toggle('is-error', bad);
};

async function api(path, options={}) {
  const response = await fetch(API_BASE + path, {
    ...options,
    headers: {'Content-Type':'application/json', ...(options.headers||{})}
  });
  const data = await response.json().catch(()=>({}));
  if (!response.ok) throw new Error(data.error || `Ошибка сервера (${response.status})`);
  return data;
}

async function loadReviews() {
  const host = $('#public-reviews');
  if (!host) return;
  try {
    const data = await api('/public/reviews');
    const reviews = data.reviews || [];
    host.innerHTML = reviews.length ? reviews.map(review => `
      <article class="review-card">
        <div class="review-stars">${'★'.repeat(Number(review.rating)||0)}${'☆'.repeat(5-(Number(review.rating)||0))}</div>
        <h3>${escapeHtml(review.author)}</h3>
        <small class="review-meta">${escapeHtml(review.project || 'Клиент FRAME LAB')}</small>
        <p>${escapeHtml(review.body)}</p>
      </article>`).join('') : '<p class="reviews-empty">Пока нет опубликованных отзывов. Будьте первым.</p>';
  } catch (error) {
    host.innerHTML = '<p class="reviews-empty">Не удалось загрузить отзывы. Попробуйте обновить страницу.</p>';
    console.error('[FRAME LAB reviews]', error);
  }
}
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

loadReviews();

const reviewForm = $('#review-form');
if (reviewForm) reviewForm.addEventListener('submit', async event => {
  event.preventDefault();
  const button = reviewForm.querySelector('button[type="submit"]');
  if (button) button.disabled = true;
  const values = Object.fromEntries(new FormData(reviewForm).entries());
  try {
    await api('/public/reviews', {method:'POST', body:JSON.stringify(values)});
    setStatus($('#review-status'), 'Спасибо! Отзыв отправлен на модерацию.');
    reviewForm.reset();
  } catch (error) {
    setStatus($('#review-status'), 'Не удалось отправить отзыв: ' + error.message, true);
    console.error('[FRAME LAB review]', error);
  } finally {
    if (button) button.disabled = false;
  }
});
