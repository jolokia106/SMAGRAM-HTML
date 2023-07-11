<template>

    <div class="content-title">
        <h5>BI管理</h5>
    </div>

    <div class="content-header">
        <div class="sort-area d-flex justify-content-end mt-5">
            <a href="https://about.meta.com/ja/" class="new-button" target="_blank">
                <img src="/src/assets/image/plus_icon.svg" alt="">
                <span>表の作成</span>
            </a>
        </div>
    </div>

    <div class="content-body">
        <div class="list-table">
            <ul class="tr head">
                <li class="th">表名</li>
                <li class="th">ステータス</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">表名1</li>
                <li class="td">加盟店表示中</li>
                <li class="td sp-hidden">
                    <a href="javascript:void(0)" class="btn btn-detail" data-bs-toggle="modal" data-bs-target="#confirmModal">変更</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="javascript:void(0)">〉</a>
            </div>

            <!-- データの二週目以降の th に当たる箇所に sp-only のクラスを付与する必要あり -->
            <ul class="tr head sp-only">
                <li class="th">表名</li>
                <li class="th">ステータス</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">表名2</li>
                <li class="td">本部表示中</li>
                <li class="td sp-hidden">
                    <a href="javascript:void(0)" class="btn btn-detail" data-bs-toggle="modal" data-bs-target="#confirmModal">変更</a>
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="javascript:void(0)">〉</a>
            </div>

            <ul class="tr head sp-only">
                <li class="th">表名</li>
                <li class="th">ステータス</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">表名3</li>
                <li class="td">本部表示中</li>
                <li class="td sp-hidden">
                    <a href="javascript:void(0)" class="btn btn-detail" data-bs-toggle="modal" data-bs-target="#confirmModal">変更</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="javascript:void(0)">〉</a>
            </div>

            <ul class="tr head sp-only">
                <li class="th">表名</li>
                <li class="th">ステータス</li>
                <li class="th sp-hidden"></li>
            </ul>
            <ul class="tr body">
                <li class="td">表名4</li>
                <li class="td">非表示</li>
                <li class="td sp-hidden">
                    <a href="javascript:void(0)" class="btn btn-detail" data-bs-toggle="modal" data-bs-target="#confirmModal">変更</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="javascript:void(0)">〉</a>
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
    <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body">
                    <div class="container-fluid">
   
                       <p class="mt-3 mb-5 text-center">入力した内容を登録します。</p>
                        <div class="col-12 text-center mb-2 search-submit">
                            <input type="submit" class="btn btn-orive col-12" value="本部に表示">
                        </div>
                        <div class="col-12 text-center mb-2 search-submit">
                            <input type="submit" class="btn btn-orive col-12" value="加盟店に表示">
                        </div>
                        <div class="text-center cancel" data-bs-dismiss="キャンセル">
                            <a href="javascript:void(0)" data-bs-dismiss="modal" aria-label="Close">キャンセル</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>