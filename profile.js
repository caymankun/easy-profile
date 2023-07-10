// ポップアップオーバーレイ要素を作成
const overlay = document.createElement('div');
overlay.id = 'popup-overlay';
overlay.className = 'overlay';

// ポップアップ要素を作成
const popup = document.createElement('div');
popup.id = 'popup';
popup.className = 'popup';

// ポップアップを閉じるボタン要素を作成
const popupClose = document.createElement('img');
popupClose.className = 'popup-close';
popupClose.src = 'https://c-profile.pages.dev/back.svg';
popupClose.addEventListener('click', closePopup);

// ポップアップ内のコンテンツを作成
const popupContent = `
    <h2>profile</h2>
    <img src="https://caymankun.f5.si/image/logo/c-logo.webp" alt="caymankun-logo" height="50px" width="50px"><br>
    <b>name : caymankun</b><br>
    <b>food : sushi & strawberry</b><br>
    <b>thing : android</b><br>
`;

// ポップアップ要素にコンテンツを追加
popup.innerHTML = popupContent;
popup.insertBefore(popupClose, popup.firstChild);

// ボディ要素に要素を追加
document.body.appendChild(overlay);
document.body.appendChild(popup);

// スタイルを適用する関数
function applyStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9998;
        }

        .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 350px;
            height: 300px;
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            z-index: 9999;
            padding: 20px;
            box-sizing: border-box;
            border-radius: 10px;
            text-align: center;
        }

        .popup-close {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            padding: 3px;
            border-radius: 100px;
            width: 22px;
            height: 22px;
            text-align: center;
        }

        .popup-close:hover {
            background-color: #ccc;
        }
    `;
    document.head.appendChild(style);
}

// ポップアップを表示する関数
function openPopup() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

// ポップアップを閉じる関数
function closePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

// スタイルを適用
applyStyles();
