<style lang="scss" scoped>
    @use "/src/assets/css/style.css";
</style>
<script setup>
    import addressModal from '@/components/components/layouts/modal/address_modal.vue';
    import confirmView from '@/components/components/layouts/modal/confirm.vue';
</script>
<template>
    <div class="content-title row">
        <a href="/suppliers/list">
            <img src="/src/assets/image/angle-left-solid.svg" alt="">
        </a>
        <h5>仕入先詳細</h5>
    </div>

    <div class="content-body suppliers-wrap">
        <form action="/suppliers/list" method="GET">
            <div class="content-body-title">
                <h5>本社情報</h5>
            </div>
            <div class="container mb-5 ">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row mb-3 col-md-12">
                            <div class="column">本社選択</div>
                            <div class="col-md-6 grow-1">
                                <select name="" id="" class="form-select">
                                    <option value="">新規作成</option>
                                    <option value="">本社1</option>
                                    <option value="">本社2</option>
                                    <option value="">本社3</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3 col-md-12">
                            <div class="column">法人名</div>
                            <div class="col-md-6 grow-1">
                                <input type="text" class="form-control" placeholder="〇〇店">
                            </div>
                        </div>
                        <div class="row mb-3 col-md-12">
                            <div class="column">法人名 (カナ)</div>
                            <div class="col-md-6 grow-1">
                                <input type="text" class="form-control" placeholder="〇〇テン">
                            </div>
                        </div>

                        <div class="row">
                            <div class="row mb-3 col-md-12">
                                <div class="column">担当者名</div>
                                <div class="col-6 col-md-4 grow-1">
                                    <input type="text" class="form-control" placeholder="姓">
                                </div>
                                <div class="col-6 col-md-4 grow-1">
                                    <input type="text" class="form-control" placeholder="名">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="row mb-3 col-md-12">
                                <div class="column">担当者名 (カナ)</div>
                                <div class="col-6 col-md-4 grow-1">
                                    <input type="text" class="form-control" placeholder="セイ">
                                </div>
                                <div class="col-6 col-md-4 grow-1">
                                    <input type="text" class="form-control" placeholder="メイ">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="row mb-3 col-md-12">
                                <div class="column">適格事業者</div>
                                <div class="col-md-8 grow-1">
                                    <div class="col-md-2">
                                        <input type="checkbox" value="1" checked="checked" id="offset">
                                        <label for="offset" class="checkbox offset"></label>
                                    </div>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" placeholder="番号">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 col-md-12">
                            <div class="column">TEL</div>
                            <div class="col-md-8 grow-1">
                                <input type="text" class="form-control"  placeholder="000-0000-0000">
                            </div>
                        </div>
                        <div class="row mb-3 col-md-12">
                            <div class="column">E-mail</div>
                            <div class="col-md-8 grow-1">
                                <input type="text" class="form-control" placeholder="xxx@gmail.com">
                            </div>
                        </div>
                        <div class="row mb-3 col-md-12">
                            <div class="column">FAX番号</div>
                            <div class="col-md-4 grow-1">
                                <input type="text" class="form-control"  placeholder="000-0000-0000">
                            </div>
                        </div>
                        <div class="row mb-3 col-md-12">
                            <div class="column">住所</div>
                            <div class="col-md-6 grow-1">
                                <textarea class="form-control" placeholder="住所を入力"></textarea>
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
                    <div class="col-md-6">
                        <div class="row mb-3 col-md-12">
                            <div class="column">振込先情報</div>

                            <div class="col-md-12 account">
                                
                                <div class=" row col-md-12 mb-3">
                                    <p class="col-md-2 account-column">銀行選択</p>
                                    <div class="col-md-6">
                                        <select name="" id="selectAccount" class="form-select">
                                            <option value="1">その他銀行</option>
                                            <option value="2">ゆうちょ銀合</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="row col-md-12 mb-3">
                                    <p class="col-md-2 account-column">シメイ</p>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control"  placeholder="セイ メイ">
                                    </div>
                                </div>

                                <!-- その他銀行のみ表示 -->
                                <div class="row other mb-3">
                                    <div class="column"></div>
                                    <div class="row col-md-12">
                                        <p class="col-md-2 account-column other">銀行コード</p>
                                        <div class="col-md-6">
                                            <input type="text" class="form-control"  placeholder="0000">
                                        </div>
                                    </div>
                                </div>
                                <div class="row other mb-3">
                                    <div class="column"></div>
                                    <div class="row col-md-12">
                                        <p class="col-md-2 account-column">銀行名</p>
                                        <div class="col-md-6">
                                            <input type="text" class="form-control"  placeholder="銀行名">
                                        </div>
                                    </div>   
                                </div>
                                <div class="row other mb-3">
                                    <div class="column"></div>
                                    <div class="row col-md-12">
                                        <p class="col-md-2 account-column">支店コード</p>
                                        <div class="col-md-6">
                                            <input type="text" class="form-control"  placeholder="0000">
                                        </div>
                                    </div>
                                </div>
                                <div class="row other mb-3">
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
                                <div class="row yutyo mb-3">
                                    <div class="row col-md-12">
                                        <p class="col-md-2 account-column">店名 (漢数字3桁)</p>
                                        <div class="col-md-6">
                                            <input type="text" class="form-control"  placeholder="000">
                                        </div>
                                    </div>
                                </div>
                                <div class="row yutyo mb-3">
                                    <div class="row col-md-12">
                                        <p class="col-md-2 account-column">店名 (カタカナ)</p>
                                        <div class="col-md-6">
                                            <input type="text" class="form-control"  placeholder="〇〇テン">
                                        </div>
                                    </div>
                                </div>
                                <!-- /郵貯銀行のみ表示 -->

                                <div class="column"></div>
                                <div class="row col-md-12 mb-3">
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
                                <div class="col-md-6 grow-1">
                                    <textarea class="form-control" placeholder="備考用のテキストを入力"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="supplier-border"></div>

            <div class="content-body-title">
                <h5>営業所情報</h5>
            </div>
            <div class="container mb-5">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row mb-3 col-md-12">
                            <div class="column">営業所名</div>
                            <div class="col-md-6 grow-1">
                                <input type="text" class="form-control" placeholder="〇〇店">
                            </div>
                        </div>
                        <div class="row mb-3 col-md-12">
                            <div class="column">営業所名 (カナ)</div>
                            <div class="col-md-6 grow-1">
                                <input type="text" class="form-control" placeholder="〇〇テン">
                            </div>
                        </div>

                        <div class="row">
                            <div class="row mb-3 col-md-12">
                                <div class="column">担当者名</div>
                                <div class="col-6 col-md-4 grow-1">
                                    <input type="text" class="form-control" placeholder="姓">
                                </div>
                                <div class="col-6 col-md-4 grow-1">
                                    <input type="text" class="form-control" placeholder="名">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="row mb-3 col-md-12">
                                <div class="column">担当者名 (カナ)</div>
                                <div class="col-6 col-md-4 grow-1">
                                    <input type="text" class="form-control" placeholder="セイ">
                                </div>
                                <div class="col-6 col-md-4 grow-1">
                                    <input type="text" class="form-control" placeholder="メイ">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="row mb-3 col-md-12">
                                <div class="column">適格事業者</div>
                                <div class="col-md-8 grow-1">
                                    <div class="col-md-2">
                                        <input type="checkbox" value="1" checked="checked" id="offset">
                                        <label for="offset" class="checkbox offset"></label>
                                    </div>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" placeholder="番号">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 col-md-12">
                            <div class="column">TEL</div>
                            <div class="col-md-6 grow-1">
                                <input type="text" class="form-control"  placeholder="000-0000-0000">
                            </div>
                        </div>
                        <div class="row mb-3 col-md-12">
                            <div class="column">E-mail</div>
                            <div class="col-md-6 grow-1">
                                <input type="text" class="form-control" placeholder="xxx@gmail.com">
                            </div>
                        </div>
                        <div class="row mb-3 col-md-12">
                            <div class="column">FAX番号</div>
                            <div class="col-md-4 grow-1">
                                <input type="text" class="form-control"  placeholder="000-0000-0000">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row mb-3 col-md-12">
                            <div class="column">住所</div>
                            <div class="col-md-6 grow-1">
                                <textarea class="form-control" placeholder="住所を入力"></textarea>
                            </div>
                        </div>
                        <div class="row mb-3">
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
                        <div class="row">
                            <div class="row mb-3 col-md-12">
                                <div class="column">備考</div>
                                <div class="col-md-6 grow-1">
                                    <textarea class="form-control" placeholder="備考用のテキストを入力"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="supplier-border"></div>
            <div class="content-body-title">
                <h5>請求書保存</h5>
            </div>
            <div class="row">
                <div class="container mb-5 w-auto">
                    <button type="button" class="btn btn-orive sp-wide"  data-bs-toggle="modal" data-bs-target="#invoiceModal">2022年</button>
                </div>
                <div class="container mb-5 w-auto">
                    <button type="button" class="btn btn-orive sp-wide"  data-bs-toggle="modal" data-bs-target="#invoiceModal">2023年</button>
                </div>
                <div class="container mb-5 w-auto">
                    <button type="button" class="btn btn-orive sp-wide"  data-bs-toggle="modal" data-bs-target="#invoiceModal">2024年</button>
                </div>
            </div>


            <div class="container text-center mb-3">
                <input type="button" class="btn submit-btn btn-orive sp-wide" value="登録する" data-bs-toggle="modal" data-bs-target="#confirmModal">
            </div>

            <!-- 請求書モーダル -->
            <div class="modal fade invoices-modal" id="invoiceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="modal-body">
                            <div class="container-fluid">
        
                                <p class="mt-3 mb-5 text-center">入力した内容を登録します。</p>
                                <div class="row text-center">
                                    <div class="mb-5 col-md-6 justify-content-center">
                                        <p>1月</p>
                                        <div class="col-md-8 image-area mx-auto">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="mb-5 col-md-6 justify-content-center">
                                        <p>2月</p>
                                        <div class="col-md-8 image-area mx-auto">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div class="mb-5 col-md-6 justify-content-center">
                                        <p>3月</p>
                                        <div class="col-md-8 image-area mx-auto">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="mb-5 col-md-6 justify-content-center">
                                        <p>4月</p>
                                        <div class="col-md-8 image-area mx-auto">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div class="mb-5 col-md-6 justify-content-center">
                                        <p>5月</p>
                                        <div class="col-md-8 image-area mx-auto">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="mb-5 col-md-6 justify-content-center">
                                        <p>6月</p>
                                        <div class="col-md-8 image-area mx-auto">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div class="mb-5 col-md-6 justify-content-center">
                                        <p>7月</p>
                                        <div class="col-md-8 image-area mx-auto">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="mb-5 col-md-6 justify-content-center">
                                        <p>8月</p>
                                        <div class="col-md-8 image-area mx-auto">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div class="mb-5 col-md-6 justify-content-center">
                                        <p>9月</p>
                                        <div class="col-md-8 image-area mx-auto">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="mb-5 col-md-6 justify-content-center">
                                        <p>10月</p>
                                        <div class="col-md-8 image-area mx-auto">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div class="mb-5 col-md-6 justify-content-center">
                                        <p>11月</p>
                                        <div class="col-md-8 image-area mx-auto">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="mb-5 col-md-6 justify-content-center">
                                        <p>12月</p>
                                        <div class="col-md-8 image-area mx-auto">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                
                                

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 確認モーダル -->
            <confirmView />

        </form>
    </div>

    <!-- モーダル -->
    <addressModal />

</template>

<script>
    $(function(){
        changeAccount();
        // 銀行選択時の処理
        $('#selectAccount').on('change', function(){
            changeAccount();
        });

        function changeAccount(){
            if($('#selectAccount').val() == 1){
                $('.other').show();
                $('.yutyo').hide();
            }else{
                $('.other').hide();
                $('.yutyo').show();
            }
        }
    });
</script>