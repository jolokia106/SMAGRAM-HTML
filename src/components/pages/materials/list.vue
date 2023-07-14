<template>

    <div class="content-title">
        <h5>備品資材一覧</h5>
    </div>

    <div class="content-header">
        <!-- PCのみ -->
        <div class="sp-hidden">
            <div class="search-area">
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="キーワードを入力してください">
                </div>
                <div class="row col-md-3 pref-wrap">
                    <p class="col-md-4">ステータス</p>
                    <div class="col-md-8">
                        <select class="form-select">
                            <option value="">本部確認中</option>
                            <option value="">入金待</option>
                            <option value="">入金済</option>
                            <option value="">キャンセル</option>
                            <option value="">発注済</option>
                            <option value="">発送済</option>
                        </select>
                    </div>
                </div>


                <button class="col-2 btn btn-orive search-button">検索する</button>
            </div>
        </div>
        <!-- /PCのみ -->
        <!-- SP のみ -->
        <div class="sp-only">
            <div class="search-area">
                <button type="button" class="btn btn-search col-md-12 sp-wide" data-bs-toggle="modal" data-bs-target="#searchModal">
                    顧客を検索する
                </button>
            </div>
        </div>
        <!-- /SP のみ -->


        <div class="sort-area d-flex justify-content-end mt-5">

            <a href="/materials/form" class="new-button me-auto">
                <img src="/src/assets/image/plus_icon.svg" alt="">
                <span>新規登録</span>
            </a>

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
                <li class="th">BP名</li>
                <li class="th">商品名</li>
                <li class="th">備考</li>
                <li class="th">支払方法</li>
                <li class="th">購入金額</li>
                <li class="th">購入請求金額</li>
                <li class="th">購入日</li>
                <li class="th">ステータス</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">A店</li>
                <li class="td">防水シート</li>
                <li class="td">相殺希望</li>
                <li class="td">クレジット</li>
                <li class="td">1,200</li>
                <li class="td">2,200</li>
                <li class="td">2022/09/25</li>
                <li class="td">本部確認中</li>
                <li class="td sp-hidden">
                    <a href="/materials/form" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/materials/form">〉</a>
            </div>

            <!-- データの二週目以降の th に当たる箇所に sp-only のクラスを付与する必要あり -->
            <ul class="tr head sp-only">
                <li class="th">BP名</li>
                <li class="th">商品名</li>
                <li class="th">備考</li>
                <li class="th">支払方法</li>
                <li class="th">購入金額</li>
                <li class="th">購入請求金額</li>
                <li class="th">購入日</li>
                <li class="th">ステータス</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">B店</li>
                <li class="td">あああ</li>
                <li class="td">支給欲しい</li>
                <li class="td">銀行振込</li>
                <li class="td">1,200</li>
                <li class="td">2,200</li>
                <li class="td">2022/09/25</li>
                <li class="td">本部確認中</li>
                <li class="td sp-hidden">
                    <a href="/materials/form" class="btn btn-detail">詳細</a>
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/materials/form">〉</a>
            </div>

            <ul class="tr head sp-only">
                <li class="th">BP名</li>
                <li class="th">商品名</li>
                <li class="th">備考</li>
                <li class="th">支払方法</li>
                <li class="th">購入金額</li>
                <li class="th">購入請求金額</li>
                <li class="th">購入日</li>
                <li class="th">ステータス</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">B店</li>
                <li class="td">あああ</li>
                <li class="td">支給欲しい</li>
                <li class="td">銀行振込</li>
                <li class="td">1,200</li>
                <li class="td">2,200</li>
                <li class="td">2022/09/25</li>
                <li class="td">本部確認中</li>
                <li class="td sp-hidden">
                    <a href="/materials/form" class="btn btn-detail">詳細</a>
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/materials/form">〉</a>
            </div>

            <ul class="tr head sp-only">
                <li class="th">BP名</li>
                <li class="th">商品名</li>
                <li class="th">備考</li>
                <li class="th">支払方法</li>
                <li class="th">購入金額</li>
                <li class="th">購入請求金額</li>
                <li class="th">購入日</li>
                <li class="th">ステータス</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">B店</li>
                <li class="td">あああ</li>
                <li class="td">支給欲しい</li>
                <li class="td">銀行振込</li>
                <li class="td">1,200</li>
                <li class="td">2,200</li>
                <li class="td">2022/09/25</li>
                <li class="td">本部確認中</li>
                <li class="td sp-hidden">
                    <a href="/materials/form" class="btn btn-detail">詳細</a>
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/materials/form">〉</a>
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
    <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form action="/suppliers/list">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <p class="modal-title">顧客を検索する</p>
                            <div class="col-12 mb-3">
                                <input type="text" class="form-control" placeholder="キーワードを入力してください">
                            </div>
                            <div class="col-12 mb-5">
                                <select class="form-select">
                                    <option value="">本部確認中</option>
                                    <option value="">入金待</option>
                                    <option value="">入金済</option>
                                    <option value="">キャンセル</option>
                                    <option value="">発注済</option>
                                    <option value="">発送済</option>
                                </select>
                            </div>
                            <div class="col-12 text-center mb-2 search-submit">
                                <input type="submit" class="btn btn-orive col-12" value="検索する">
                            </div>
                            <div class="text-center cancel" data-bs-dismiss="modal">
                                <a href="javascript:void(0)">キャンセル</a>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>


</template>