<template>

    <div class="content-title">
        <h5>仕入先一覧</h5>
    </div>

    <div class="content-header">
        <!-- PCのみ -->
        <div class="sp-hidden">
            <form action="/suppliers/list">
                <div class="search-area">
                    <div class="col-2">
                        <input type="text" class="form-control" placeholder="キーワードを入力してください">
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
                        <select class="form-select">
                            <option value="">本部確認中</option>
                            <option value="">入金待</option>
                            <option value="">入金済</option>
                            <option value="">キャンセル</option>
                            <option value="">発注済</option>
                            <option value="">発送済</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <input type="text" class="form-control" placeholder="仕入先コード">
                    </div>

                    <input type="submit" class="col-2 btn btn-orive search-button" value="検索する">

                </div>
            </form>
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
        
        <div class="sort-area d-flex justify-content-end mt-5">

            <a href="/suppliers/form" class="new-button">
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
                <li class="th">仕入先コード</li>
                <li class="th">仕入先名</li>
                <li class="th">担当者</li>
                <li class="th">注文方法</li>
                <li class="th">電話番号</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">001</li>
                <li class="td">田中資材店</li>
                <li class="td">氏家 勝之</li>
                <li class="td">メール</li>
                <li class="td">000-0000-0000</li>
                <li class="td sp-hidden">
                    <a href="/suppliers/form" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/suppliers/form">〉</a>
            </div>

            <!-- データの二週目以降の th に当たる箇所に sp-only のクラスを付与する必要あり -->
            <ul class="tr head sp-only">
                <li class="th">仕入先コード</li>
                <li class="th">仕入先名</li>
                <li class="th">担当者</li>
                <li class="th">注文方法</li>
                <li class="th">電話番号</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">002</li>
                <li class="td">鈴木資材店</li>
                <li class="td">氏家 勝之</li>
                <li class="td">メール</li>
                <li class="td">000-0000-0000</li>
                <li class="td sp-hidden">
                    <a href="/suppliers/form" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/suppliers/form">〉</a>
            </div>
            <ul class="tr head sp-only">
                <li class="th">仕入先コード</li>
                <li class="th">仕入先名</li>
                <li class="th">担当者</li>
                <li class="th">注文方法</li>
                <li class="th">電話番号</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">003</li>
                <li class="td">山田資材店</li>
                <li class="td">氏家 勝之</li>
                <li class="td">電話</li>
                <li class="td">000-0000-0000</li>
                <li class="td sp-hidden">
                    <a href="/suppliers/form" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <ul class="tr head sp-only">
                <li class="th">仕入先コード</li>
                <li class="th">仕入先名</li>
                <li class="th">担当者</li>
                <li class="th">注文方法</li>
                <li class="th">電話番号</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">004</li>
                <li class="td">カーマPRO</li>
                <li class="td">氏家 勝之</li>
                <li class="td">電話</li>
                <li class="td">000-0000-0000</li>
                <li class="td sp-hidden">
                    <a href="/suppliers/form" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/suppliers/form">〉</a>
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
                            <div class="col-12 mb-3">
                                <select class="form-select">
                                    <option value="">北海道</option>
                                    <option value="">青森県</option>
                                    <option value="">岩手県</option>
                                    <option value="">宮城県</option>
                                    <option value="">秋田県</option>
                                    <option value="">山形県</option>
                                </select>
                            </div>
                            <div class="col-12 mb-3">
                                <select class="form-select">
                                    <option value="">本部確認中</option>
                                    <option value="">入金待</option>
                                    <option value="">入金済</option>
                                    <option value="">キャンセル</option>
                                    <option value="">発注済</option>
                                    <option value="">発送済</option>
                                </select>
                            </div>
                            <div class="col-12 mb-5">
                                <input type="text" class="form-control" placeholder="仕入先コード">
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