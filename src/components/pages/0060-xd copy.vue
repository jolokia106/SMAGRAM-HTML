<script setup>
import B00421 from '@/components/components/B0040/B00421.vue';
import B00422 from '@/components/components/B0040/B00422.vue';
import B00423 from '@/components/components/B0040/B00423.vue';
import B00424 from '@/components/components/B0040/B00424.vue';
import B00425 from '@/components/components/B0040/B00425.vue';
</script>
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
            <table>
                <tbody>
                    <tr>
                        <th>商品名</th>
                        <td>防水シート</td>
                    </tr>
                    <tr>
                        <th>備考</th>
                        <td>相殺希望</td>
                    </tr>
                    <tr>
                        <th>支払方法</th>
                        <td>銀行振込</td>
                    </tr>
                    <tr>
                        <th>購入金額</th>
                        <td>30,000円</td>
                    </tr>
                    <tr>
                        <th>金額</th>
                        <td>10,000</td>
                    </tr>
                    <tr>
                        <th>購入日</th>
                        <td>2022/08/15</td>
                    </tr>
                    <tr>
                        <th>ステータス</th>
                        <td>相殺</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>