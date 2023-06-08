
<template>
    <div class="head-wrap">
        <div class="head-title">SMAGRAM</div>
        <div class="head-icon"><img src ="/src/assets/image/頭のアイコン.svg"/></div>
    </div>
    <h1 class="content-title">備品資材購入</h1>
    <p>※ここに表示されている金額以上の商品相殺はできません</p>
    <a href="/" class="content-button-wrap">
        <img src ="/src/assets/image/icon_cart.svg"/>
        <p class="content-button-text">備品資材購入へ</p>
    </a>
    <div class="claim-wrap">
        <p>本部宛請求金額 (〇月分)</p>
        <p><span class="content-amount">30,000</span>円 (確定分)</p>
    </div>
    <div class="content-explanation">
        <div class="content-explanation-title"><img src ="/src/assets/image/!.svg"/><span>注意点</span></div>
        <ul>
            <li class="content-explanation-message-1">上記に表示されている金額以上の相殺購入は出来ません。</li>
            <li class="content-explanation-message-2">備品購入は外部サイトとなります。</li>
            <li class="content-explanation-message-3">〇日までは当月、それ以降は来月の相殺となります。</li>
            <li class="content-explanation-message-4">クレジット決済の場合は【相殺】の商品を購入しても、その場で決済されます。※相殺にはなりません。</li>
            <li class="content-explanation-message-5">相殺の場合は本部にて翌日中に相殺可能か確認して「重要なお知らせ」にてご連絡致しますのでこの時点では確定ではございません。</li>
        </ul>
    </div>

    <div class="content-list-wrap">
        <div class="list-search">
            <img src ="/src/assets/image/分析アイコン.svg"/>
            <select name="" id="">
                <option value="">新しい順</option>
                <option value="">古い順</option>
            </select>
        </div>
        <div class="content-list">
            <div class="list-1">
                <p>商品名</p>
                <p>備考</p>
                <p>支払方法</p>
                <p>購入金額</p>
                <p>金額</p>
                <p>購入日</p>
                <p>ステータス</p>
            </div>
            <div class="list-2">
                <p>防水シート</p>
                <p>相殺希望</p>
                <p>銀行振込</p>
                <p>30,000円</p>
                <p>10,000</p>
                <p>2022/08/15</p>
                <p>相殺</p>
            </div>
        </div>
        <div class="list-button">
            <img src ="/src/assets/image/矢印右4.svg"/>
        </div>
    </div>

</template>