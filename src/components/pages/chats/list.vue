<template>

    <div class="content-title">
        <h5>チャット一覧</h5>
    </div>

    <div class="content-header">
        <!-- PCのみ -->
        <div class="sp-hidden">
            <div class="search-area">
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="キーワードを入力してください">
                </div>
                <div class="col-2">
                    <input type="text" class="form-control" placeholder="氏名">
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="住所">
                </div>

                <button class="col-1 btn btn-orive search-button">検索する</button>
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
                <li class="th">顧客コード</li>
                <li class="th">氏名</li>
                <li class="th">電話番号</li>
                <li class="th">住所</li>
                <li class="th">最後のメッセージ</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">00000001</li>
                <li class="td">氏名</li>
                <li class="td">電話番号</li>
                <li class="td">住所</li>
                <li class="td">最後のメッセージ</li>
                <li class="td sp-hidden">
                    <a href="/chats/form" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/chats/form">〉</a>
            </div>

            <!-- データの二週目以降の th に当たる箇所に sp-only のクラスを付与する必要あり -->
            <ul class="tr head sp-only">
                <li class="th">顧客コード</li>
                <li class="th">氏名</li>
                <li class="th">電話番号</li>
                <li class="th">住所</li>
                <li class="th">最後のメッセージ</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">00000001</li>
                <li class="td">氏名</li>
                <li class="td">電話番号</li>
                <li class="td">住所</li>
                <li class="td">最後のメッセージ</li>
                <li class="td sp-hidden">
                    <a href="/chats/form" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/chats/form">〉</a>
            </div>

            <ul class="tr head sp-only">
                <li class="th">顧客コード</li>
                <li class="th">氏名</li>
                <li class="th">電話番号</li>
                <li class="th">住所</li>
                <li class="th">最後のメッセージ</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">00000001</li>
                <li class="td">氏名</li>
                <li class="td">電話番号</li>
                <li class="td">住所</li>
                <li class="td">最後のメッセージ</li>
                <li class="td sp-hidden">
                    <a href="/chats/form" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/chats/form">〉</a>
            </div>

            <ul class="tr head sp-only">
                <li class="th">顧客コード</li>
                <li class="th">氏名</li>
                <li class="th">電話番号</li>
                <li class="th">住所</li>
                <li class="th">最後のメッセージ</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">00000001</li>
                <li class="td">氏名</li>
                <li class="td">電話番号</li>
                <li class="td">住所</li>
                <li class="td">最後のメッセージ</li>
                <li class="td sp-hidden">
                    <a href="/chats/form" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/chats/form">〉</a>
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
                <form action="/chats/list">
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