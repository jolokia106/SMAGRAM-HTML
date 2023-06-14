
<template>

    <div class="content-title">
        <h5>備品資材購入</h5>
    </div>
    <div class="content-header">
        <p class="annotation">※ここに表示されている金額以上の商品相殺はできません</p>
        <a href="https://ueki-ichiba.com/" target="_blank" class="link-orive sp-wide">
            <img src ="/src/assets/image/icon_cart.svg"/>
            <span>備品資材購入へ</span>
        </a>
        <div class="claim-wrap mt-5 text-center">
            <p>本部宛請求金額 (〇月分)</p>
            <p><span class="fw-bold fs-1">30,000</span>円 (確定分)</p>
        </div>

        <div class="content-explanation">
            <div class="content-explanation-title"><img src ="/src/assets/image/!.svg"/><span class="orive fw-bold ms-2">注意点</span></div>
            <ul>
                <li class="content-explanation-message-1 fw-bold">上記に表示されている金額以上の相殺購入は出来ません。</li>
                <li class="content-explanation-message-2">備品購入は外部サイトとなります。</li>
                <li class="content-explanation-message-3">〇日までは当月、それ以降は来月の相殺となります。</li>
                <li class="content-explanation-message-4">クレジット決済の場合は【相殺】の商品を購入しても、その場で決済されます。<br>※相殺にはなりません。</li>
                <li class="content-explanation-message-5">相殺の場合は本部にて翌日中に相殺可能か確認して「重要なお知らせ」にてご連絡致しますのでこの時点では確定ではございません。</li>
            </ul>
        </div>
        <div class="sort-area d-flex justify-content-end mt-5">
            <img src="/src/assets/image/analysis.svg" alt="">
            <div class="col-1">
                <select name="" id="" class="form-select">
                    <option value="">新しい順</option>
                    <option value="">古い順</option>
                </select>
            </div>
        </div>
    </div>
        <div class="content-body">
            <div class="list-table">
                <ul class="tr head">
                    <li class="th">商品名</li>
                    <li class="th">備考</li>
                    <li class="th">支払方法</li>
                    <li class="th">購入金額</li>
                    <li class="th">購入日</li>
                    <li class="th">ステータス</li>
                    <li class="th sp-hidden"></li>
                </ul>
                <ul class="tr body">
                    <li class="td">防水シート</li>
                    <li class="td">相殺希望</li>
                    <li class="td">銀行振込</li>
                    <li class="td">30,000円</li>
                    <li class="td">2022/8/15</li>
                    <li class="td">相殺</li>
                    <li class="td sp-hidden">
                        <a href="javascript: vaid(0);" class="btn btn-detail"  data-bs-toggle="modal" data-bs-target="#buyModal">詳細</a> 
                    </li>
                </ul>
                <div class="sp-detail sp-only">
                    <a href="javascript: vaid(0);" data-bs-toggle="modal" data-bs-target="#buyModal">〉</a>
                </div>

                <!-- データの二週目以降の th に当たる箇所に sp-only のクラスを付与する必要あり -->
                <ul class="tr head sp-only">
                    <li class="th">商品名</li>
                    <li class="th">備考</li>
                    <li class="th">支払方法</li>
                    <li class="th">購入金額</li>
                    <li class="th">購入日</li>
                    <li class="th">ステータス</li>
                    <li class="th sp-hidden"></li>
                </ul>
                <ul class="tr body">
                    <li class="td">防水シート</li>
                    <li class="td">相殺希望</li>
                    <li class="td">銀行振込</li>
                    <li class="td">30,000円</li>
                    <li class="td">2022/8/15</li>
                    <li class="td">相殺</li>
                    <li class="td sp-hidden">
                        <a href="javascript: vaid(0);" class="btn btn-detail" data-bs-toggle="modal" data-bs-target="#buyModal">詳細</a> 
                    </li>
                </ul>
                <div class="sp-detail sp-only">
                    <a href="javascript: vaid(0);" data-bs-toggle="modal" data-bs-target="#buyModal">〉</a>
                </div>

                <ul class="tr head sp-only">
                    <li class="th">商品名</li>
                    <li class="th">備考</li>
                    <li class="th">支払方法</li>
                    <li class="th">購入金額</li>
                    <li class="th">購入日</li>
                    <li class="th">ステータス</li>
                    <li class="th sp-hidden"></li>
                </ul>
                <ul class="tr body">
                    <li class="td">防水シート</li>
                    <li class="td">相殺希望</li>
                    <li class="td">銀行振込</li>
                    <li class="td">30,000円</li>
                    <li class="td">2022/8/15</li>
                    <li class="td">相殺</li>
                    <li class="td sp-hidden">
                        <a href="javascript: vaid(0);" class="btn btn-detail" data-bs-toggle="modal" data-bs-target="#buyModal">詳細</a> 
                    </li>
                </ul>
                <div class="sp-detail sp-only">
                    <a href="javascript: vaid(0);" data-bs-toggle="modal" data-bs-target="#buyModal">〉</a>
                </div>

                <ul class="tr head sp-only">
                    <li class="th">商品名</li>
                    <li class="th">備考</li>
                    <li class="th">支払方法</li>
                    <li class="th">購入金額</li>
                    <li class="th">購入日</li>
                    <li class="th">ステータス</li>
                    <li class="th sp-hidden"></li>
                </ul>
                <ul class="tr body">
                    <li class="td">防水シート</li>
                    <li class="td">相殺希望</li>
                    <li class="td">銀行振込</li>
                    <li class="td">30,000円</li>
                    <li class="td">2022/8/15</li>
                    <li class="td">相殺</li>
                    <li class="td sp-hidden">
                        <a href="javascript: vaid(0);" class="btn btn-detail" data-bs-toggle="modal" data-bs-target="#buyModal">詳細</a> 
                    </li>
                </ul>
                <div class="sp-detail sp-only">
                    <a href="javascript: vaid(0);" data-bs-toggle="modal" data-bs-target="#buyModal">〉</a>
                </div>

            </div>

        </div>

        <div class="content-footer">
            <ul class="pager">
                <li class="pager-prev"><a href="/">←</a></li>
                <li class="pager-num"><a href="/">1</a></li>
                <li class="pager-num"><a href="/">2</a></li>
                <li class="pager-num"><a href="/">3</a></li>
                <li class="pager-num"><a href="/">4</a></li>
                <li class="pager-num"><a href="/">5</a></li>
                <li class="pager-next"><a href="/">→</a></li>
            </ul>
        </div>
   <!-- モーダル -->
   <div class="modal fade" id="buyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body">
                    <form action="/">
                        <div class="container-fluid text-center col-10">
                            <div class="buy-item text-left">
                                <table>
                                    <tr>
                                        <th>購入日</th>
                                        <td>2022/11/02</td>
                                    </tr>
                                    <tr>
                                        <th>支払方法</th>
                                        <td>銀行振込</td>
                                    </tr>
                                    <tr>
                                        <th>備考</th>
                                        <td>相殺希望</td>
                                    </tr>
                                    <tr>
                                        <th>商品名</th>
                                        <td>防水シート 20㎡ 1,200円</td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td>人工芝 20㎡ 1,000円</td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td>合計金額 2,200円</td>
                                    </tr>
                                    <tr>
                                        <th>入金日</th>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th>ステータス</th>
                                        <td>キャンセル</td>
                                    </tr>
                                    <tr>
                                        <th>キャンセル理由</th>
                                        <td>相殺金不足</td>
                                    </tr>
                                </table>

                            </div>
                            <div class="col-8 text-center mb-2 mx-auto">
                                <button type="button" class="btn btn-orive col-12" data-bs-toggle="modal" data-bs-target="#applyModal">購入キャンセル申請</button>
                            </div>
                            <div class="text-center cancel" data-bs-dismiss="modal">
                                <a href="javascript:void(0)">キャンセル</a>
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
    <div class="modal fade" id="applyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                <p class="mx-auto my-4">購入キャンセル</p>
                <div class="col-8 text-center mx-auto mb-5">
                    <button class="btn btn-orive col-12" data-bs-toggle="modal" data-bs-target="#complateModal">申請する</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="complateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                <p class="mx-auto my-4">購入キャンセル申請が完了しました。</p>
                <div class="col-8 text-center mx-auto mb-5">
                    <button class="btn btn-secondary col-12" data-bs-dismiss="modal" aria-label="Close">閉じる</button>
                </div>
            </div>
        </div>
    </div>
</template>