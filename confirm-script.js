window.onload = function() {
  const container = document.getElementById('reservation-container');
  const savedData = localStorage.getItem('currentReservation');

  if (savedData) {
    const data = JSON.parse(savedData);
    container.innerHTML = `
      <div class="card">
        <div class="card-top">
          <span style="font-size: 0.8rem; color: var(--sub-text);">予約ID: ${data.id}</span>
          <span class="status-badge">予約確定</span>
        </div>
        <div class="card-title">${data.name}</div>
        <div class="info-row">
          <div class="info-label">利用日時</div>
          <div class="info-value">${data.date}</div>
        </div>
        <div class="info-row">
          <div class="info-label">料金目安</div>
          <div class="info-value" style="color: #E53935; font-weight: bold;">¥${data.price} / 1時間</div>
        </div>
        <button class="btn-cancel" onclick="clearReservation()">予約をキャンセル</button>
      </div>
    `;
  } else {
    container.innerHTML = `<div class="empty-message">現在、確定した予約はありません。</div>`;
  }
};

function clearReservation() {
  if (confirm('予約をキャンセルしますか？')) {
    localStorage.removeItem('currentReservation');
    location.reload();
  }
}