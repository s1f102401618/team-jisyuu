function reserveService(serviceName, price) {
  const reservationData = {
    id: '#' + Math.floor(10000 + Math.random() * 90000),
    name: serviceName,
    price: price,
    date: new Date().toLocaleDateString('ja-JP') + ' 10:00〜14:00'
  };

  // ブラウザのストレージに予約データを保存
  localStorage.setItem('currentReservation', JSON.stringify(reservationData));
  alert(serviceName + ' の予約を受け付けました！\n「予約確認」メニューから内容を確認できます。');
}