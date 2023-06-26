<template>

    <div class="content-title">
        <h5>特別売上/費用管理一覧</h5>
    </div>

    <div class="content-header">
        <!-- PCのみ -->
        <div class="sp-hidden">
            <div class="search-area">
                <div class="col-2">
                    <input type="date" class="form-control" placeholder="キーワードを入力してください">
                </div>
                <div class="pt-2">～</div>
                <div class="col-2">
                    <input type="date" class="form-control" placeholder="キーワードを入力してください">
                </div>
                <div class="col-2">
                    <select class="form-select">
                        <option value="">北海道</option>
                        <option value="">青森県</option>
                        <option value="">岩手県</option>
                        <option value="">宮城県</option>
                        <option value="">秋田県</option>
                        <option value="">山形県</option>
                    </select>
                </div>
                <div class="col-2">
                    <select name="" id="" class="form-select">
                        <option value="">事業カテゴリ</option>
                        <option value="">smileガーデン</option>
                        <option value="">smileエクステリア</option>
                        <option value="">植木市場</option>
                        <option value="">GARDEM-JOB</option>
                        <option value="">お庭の達人</option>
                        <option value="">ガーデンビジネス協会</option>
                    </select>
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

            <a href="/expenses/form" class="new-button">
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
                <li class="th">加盟店コード</li>
                <li class="th">店舗</li>
                <li class="th">対象事業</li>
                <li class="th">名称</li>
                <li class="th">金額</li>
                <li class="th">請求日</li>
                <li class="th">入金日</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">001</li>
                <li class="td">加盟店A</li>
                <li class="td">smileガーデン</li>
                <li class="td">違約金</li>
                <li class="td">金額</li>
                <li class="td">2022/2/25</li>
                <li class="td">2022/3/25</li>
                <li class="td sp-hidden">
                    <a href="/expenses/form" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/expenses/form">〉</a>
            </div>

            <!-- データの二週目以降の th に当たる箇所に sp-only のクラスを付与する必要あり -->
            <ul class="tr head sp-only">
                <li class="th">加盟店コード</li>
                <li class="th">店舗</li>
                <li class="th">対象事業</li>
                <li class="th">名称</li>
                <li class="th">金額</li>
                <li class="th">請求日</li>
                <li class="th">入金日</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">001</li>
                <li class="td">加盟店A</li>
                <li class="td">smileガーデン</li>
                <li class="td">違約金</li>
                <li class="td">金額</li>
                <li class="td">2022/2/25</li>
                <li class="td">2022/3/25</li>
                <li class="td sp-hidden">
                    <a href="/expenses/form" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/expenses/form">〉</a>
            </div>

            <ul class="tr head sp-only">
                <li class="th">加盟店コード</li>
                <li class="th">店舗</li>
                <li class="th">対象事業</li>
                <li class="th">名称</li>
                <li class="th">金額</li>
                <li class="th">請求日</li>
                <li class="th">入金日</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">001</li>
                <li class="td">加盟店A</li>
                <li class="td">smileガーデン</li>
                <li class="td">違約金</li>
                <li class="td">金額</li>
                <li class="td">2022/2/25</li>
                <li class="td">2022/3/25</li>
                <li class="td sp-hidden">
                    <a href="/expenses/form" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/expenses/form">〉</a>
            </div>

            <ul class="tr head sp-only">
                <li class="th">加盟店コード</li>
                <li class="th">店舗</li>
                <li class="th">対象事業</li>
                <li class="th">名称</li>
                <li class="th">金額</li>
                <li class="th">請求日</li>
                <li class="th">入金日</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">001</li>
                <li class="td">加盟店A</li>
                <li class="td">smileガーデン</li>
                <li class="td">違約金</li>
                <li class="td">金額</li>
                <li class="td">2022/2/25</li>
                <li class="td">2022/3/25</li>
                <li class="td sp-hidden">
                    <a href="/expenses/form" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/expenses/form">〉</a>
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
                <form action="/expenses/list">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <p class="modal-title">顧客を検索する</p>
                            <div class="col-12 mb-3">
                                <input type="text" class="form-control" placeholder="キーワードを入力してください">
                            </div>
                            <div class="col-12 mb-3">
                                <select class="form-select">
                                    <option value="">掲載場所</option>
                                    <option value="">スマイルガーデン</option>
                                    <option value="">スマイルエクステリア</option>
                                    <option value="">愛知農園</option>
                                    <option value="">スマイルガーデン庭造り</option>
                                    <option value="">GARDEN-JOB</option>
                                    <option value="">お庭の窓口</option>
                                    <option value="">ガーデンメーカ</option>
                                    <option value="">植木市場</option>
                                    <option value="">お庭の達人</option>
                                </select>
                            </div>
                            <div class="col-12 mb-5">
                                <select class="form-select">
                                    <option value="">表示状態</option>
                                    <option value="">予約</option>
                                    <option value="">表示</option>
                                    <option value="">非表示</option>
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