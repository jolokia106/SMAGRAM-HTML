<style lang="scss" scoped>
    @use "/src/assets/css/style.css";
</style>
<script setup>
    import addressModal from '@/components/components/layouts/modal/address_modal.vue';
</script>
<template>
    <div class="content-title">
        <h5>仕入先詳細</h5>
    </div>

    <div class="content-body">
        <form action="/suppliers/list" method="GET">
            <div class="content-body-title">
                <h5>本社情報</h5>
            </div>
            <div class="container mb-5">
            
                <div class="row mb-3 col-md-6">
                    <div class="column">本社選択</div>
                    <div class="col-md-6">
                        <select name="" id="" class="form-select">
                            <option value="">新規作成</option>
                            <option value="">本社1</option>
                            <option value="">本社2</option>
                            <option value="">本社3</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-3 col-md-6">
                    <div class="column">法人名</div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="〇〇店">
                    </div>
                </div>
                <div class="row mb-3 col-md-6">
                    <div class="column">法人名 (カナ)</div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="〇〇テン">
                    </div>
                </div>

                <div class="row">
                    <div class="row mb-3 col-md-12">
                        <div class="column">担当者名</div>
                        <div class="col-6 col-md-4">
                            <input type="text" class="form-control" placeholder="姓">
                        </div>
                        <div class="col-6 col-md-4">
                            <input type="text" class="form-control" placeholder="名">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row mb-3 col-md-12">
                        <div class="column">担当者名 (カナ)</div>
                        <div class="col-6 col-md-4">
                            <input type="text" class="form-control" placeholder="セイ">
                        </div>
                        <div class="col-6 col-md-4">
                            <input type="text" class="form-control" placeholder="メイ">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row mb-3 col-md-12">
                        <div class="column">適格事業者</div>
                        <div class="col-md-2">
                            <input type="checkbox" value="1" checked="checked" id="offset">
                            <label for="offset" class="checkbox offset"></label>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" placeholder="番号">
                        </div>
                    </div>
                </div>
                <div class="row mb-3 col-md-12">
                    <div class="row col-md-6">
                        <div class="column">TEL</div>
                        <div class="col-md-6">
                            <input type="text" class="form-control"  placeholder="000-0000-0000">
                        </div>
                    </div>
                    <div class="row col-md-6">
                        <div class="column">メールアドレス</div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="xxx@gmail.com">
                        </div>
                    </div>
                </div>
                <div class="row mb-3 col-md-12">
                    <div class="column">FAX番号</div>
                    <div class="col-md-4">
                        <input type="text" class="form-control"  placeholder="000-0000-0000">
                    </div>
                </div>
                <div class="row mb-3 col-md-12">
                    <div class="column">住所</div>
                    <div class="col-md-4">
                        <p class="col-md-12">400-0001</p>
                        <button type="button" class="btn btn-orive col-md-12 sp-wide" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            住所設定
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="column">注文方法</div>
                    <div class="col-md-8">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radio" id="email">
                            <label class="form-check-label" for="email">
                                メール
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radio" id="tel" >
                            <label class="form-check-label" for="tel">
                                電話
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radio" id="fax" >
                            <label class="form-check-label" for="fax">
                                FAX
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radio" id="other" >
                            <label class="form-check-label" for="other">
                                その他
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row mb-3 col-md-12 account">
                    <div class="column">振込先情報</div>

                    <div class="col-md-9">

                        <div class=" row col-md-12">
                            <p class="col-md-2 account-column">銀行選択</p>
                            <div class="col-md-6">
                                <select name="" id="selectAccount" class="form-select">
                                    <option value="1">その他銀行</option>
                                    <option value="2">ゆうちょ銀合</option>
                                </select>
                            </div>
                        </div>

                        <div class="row col-md-12">
                            <p class="col-md-2 account-column">シメイ</p>
                            <div class="col-md-6">
                                <input type="text" class="form-control"  placeholder="セイ メイ">
                            </div>
                        </div>

                        <!-- その他銀行のみ表示 -->
                        <div class="row other">
                            <div class="column"></div>
                            <div class="row col-md-12">
                                <p class="col-md-2 account-column other">銀行コード</p>
                                <div class="col-md-6">
                                    <input type="text" class="form-control"  placeholder="0000">
                                </div>
                            </div>
                        </div>
                        <div class="row other">
                            <div class="column"></div>
                            <div class="row col-md-12">
                                <p class="col-md-2 account-column">銀行名</p>
                                <div class="col-md-6">
                                    <input type="text" class="form-control"  placeholder="銀行名">
                                </div>
                            </div>   
                        </div>
                        <div class="row other">
                            <div class="column"></div>
                            <div class="row col-md-12">
                                <p class="col-md-2 account-column">支店コード</p>
                                <div class="col-md-6">
                                    <input type="text" class="form-control"  placeholder="0000">
                                </div>
                            </div>
                        </div>
                        <div class="row other">
                            <div class="column"></div>
                            <div class="row col-md-12">
                                <p class="col-md-2 account-column">支店名称</p>
                                <div class="col-md-6">
                                    <input type="text" class="form-control"  placeholder="〇〇店">
                                </div>
                            </div>
                        </div>
                        <!-- /その他銀行のみ表示 -->
                        <!-- 郵貯銀行のみ表示 -->
                        <div class="row yutyo">
                            <div class="row col-md-12">
                                <p class="col-md-2 account-column">店名 (漢数字3桁)</p>
                                <div class="col-md-6">
                                    <input type="text" class="form-control"  placeholder="000">
                                </div>
                            </div>
                        </div>
                        <div class="row yutyo">
                            <div class="row col-md-12">
                                <p class="col-md-2 account-column">店名 (カタカナ)</p>
                                <div class="col-md-6">
                                    <input type="text" class="form-control"  placeholder="〇〇テン">
                                </div>
                            </div>
                        </div>
                        <!-- /郵貯銀行のみ表示 -->

                        <div class="column"></div>
                        <div class="row col-md-12">
                            <p class="col-md-2 account-column">種目</p>
                            <div class="col-md-6">
                                <select name="" id="" class="form-select">
                                    <option value="">普通</option>
                                    <option value="">当座</option>
                                    <option value="">定期</option>
                                    <option value="">貯蓄</option>
                                    <option value="">外資</option>
                                    <option value="">通知</option>
                                    <option value="">別段</option>
                                    <option value="">納税準備</option>
                                </select>
                            </div>
                        </div>
                        <div class="column"></div>
                        <div class="row col-md-12">
                            <p class="col-md-2 account-column">口座番号</p>
                            <div class="col-md-6">
                                <input type="text" class="form-control"  placeholder="0000">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row mb-3 col-md-12">
                        <div class="column">備考</div>
                        <div class="col-md-6">
                            <textarea class="form-control" placeholder="備考用のテキストを入力"></textarea>
                        </div>
                    </div>
                </div>
            </div>


            <div class="content-body-title">
                <h5>営業所情報</h5>
            </div>
            <div class="container mb-5">
                <div class="row mb-3 col-md-6">
                    <div class="column">法人名</div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="〇〇店">
                    </div>
                </div>
                <div class="row mb-3 col-md-6">
                    <div class="column">法人名 (カナ)</div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="〇〇テン">
                    </div>
                </div>

                <div class="row">
                    <div class="row mb-3 col-md-12">
                        <div class="column">担当者名</div>
                        <div class="col-6 col-md-4">
                            <input type="text" class="form-control" placeholder="姓">
                        </div>
                        <div class="col-6 col-md-4">
                            <input type="text" class="form-control" placeholder="名">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row mb-3 col-md-12">
                        <div class="column">担当者名 (カナ)</div>
                        <div class="col-6 col-md-4">
                            <input type="text" class="form-control" placeholder="セイ">
                        </div>
                        <div class="col-6 col-md-4">
                            <input type="text" class="form-control" placeholder="メイ">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row mb-3 col-md-12">
                        <div class="column">適格事業者</div>
                        <div class="col-md-2">
                            <input type="checkbox" value="1" checked="checked" id="offset">
                            <label for="offset" class="checkbox offset"></label>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" placeholder="番号">
                        </div>
                    </div>
                </div>
                <div class="row mb-3 col-md-12">
                    <div class="row col-md-6">
                        <div class="column">TEL</div>
                        <div class="col-md-6">
                            <input type="text" class="form-control"  placeholder="000-0000-0000">
                        </div>
                    </div>
                    <div class="row col-md-6">
                        <div class="column">メールアドレス</div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="xxx@gmail.com">
                        </div>
                    </div>
                </div>
                <div class="row mb-3 col-md-12">
                    <div class="column">FAX番号</div>
                    <div class="col-md-4">
                        <input type="text" class="form-control"  placeholder="000-0000-0000">
                    </div>
                </div>
                <div class="row mb-3 col-md-12">
                    <div class="column">住所</div>
                    <div class="col-md-4">
                        <p class="col-md-12">400-0001</p>
                        <button type="button" class="btn btn-orive col-md-12 sp-wide" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            住所設定
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="column">注文方法</div>
                    <div class="col-md-8">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radio" id="email">
                            <label class="form-check-label" for="email">
                                メール
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radio" id="tel" >
                            <label class="form-check-label" for="tel">
                                電話
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radio" id="fax" >
                            <label class="form-check-label" for="fax">
                                FAX
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radio" id="other" >
                            <label class="form-check-label" for="other">
                                その他
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-body-title">
                <h5>請求書保存</h5>
            </div>
            <div class="container mb-5">
                <button type="button" class="btn btn-orive sp-wide">請求書確認</button>
            </div>
            <div class="container text-center mb-3">
                <input type="submit" class="btn btn-orive sp-wide" value="登録">
            </div>
        </form>
    </div>

    <!-- モーダル -->
    <addressModal />

</template>

<script>
    $(function(){
        // 銀行選択時の処理
        $('#selectAccount').on('change', function(){
            if($('#selectAccount').val() == 1){
                $('.other').show();
                $('.yutyo').hide();
            }else{
                $('.other').hide();
                $('.yutyo').show();
            }
        });
    });
</script>