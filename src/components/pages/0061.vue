<template>

    <div class="content-title">
        <h5>備品資材一覧</h5>
    </div>

    <div class="content-header">
        <div class="search-area">
            <div class="col-3">
                <input type="text" class="form-control" placeholder="キーワードを入力してください">
            </div>
            <div class="col-3">
                <select class="form-control">
                    <option value="">本部確認中</option>
                    <option value="">入金待</option>
                    <option value="">入金済</option>
                    <option value="">キャンセル</option>
                    <option value="">発注済</option>
                    <option value="">発送済</option>
                </select>
            </div>

            <button class="col-2 btn btn-orive search-button">検索する</button>
        </div>
        <div class="sort-area d-flex justify-content-end mt-5">
            <div class="col-2 new-button">
                <a href="/0062">
                    <img src="/src/assets/image/plus_icon.svg" alt="">
                    <span>新規案件登録</span>
                </a>
            </div>
            <img src="/src/assets/image/analysis.svg" alt="">
            <div class="col-1">
                <select name="" id="" class="form-control">
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
                    <a href="/0062" class="btn btn-detail">詳細</a> 
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/0062">〉</a>
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
                    <a href="/0062" class="btn btn-detail">詳細</a>
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/0062">〉</a>
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
                    <a href="/0062" class="btn btn-detail">詳細</a>
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/0062">〉</a>
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
                    <a href="/0062" class="btn btn-detail">詳細</a>
                </li>
            </ul>
            <div class="sp-detail sp-only">
                <a href="/0062">〉</a>
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





</template>