<style lang="scss" scoped>
    @use "/src/assets/css/cms.css"; 
</style>
<script setup>
    import titleView from '@/components/components/layouts/common/cms/title.vue';
    import contentView from '@/components/components/layouts/common/cms/content.vue';
    import imageView from '@/components/components/layouts/common/cms/image.vue';
    import isOpenView from '@/components/components/layouts/common/cms/is_open.vue';
    import publishDateView from '@/components/components/layouts/common/cms/publish_date.vue';
    import switchView from '@/components/components/layouts/common/cms/switch.vue';
    import categoryView from '@/components/components/layouts/common/cms/category.vue';
    import confirmView from '@/components/components/layouts/modal/confirm.vue';
    import deleteView from '@/components/components/layouts/modal/delete.vue';
</script>
<template>
    <div class="content-title row">
        <a href="/constructions/list">
            <img src="/src/assets/image/angle-left-solid.svg" alt="">
        </a>
        <h5>施工事例詳細</h5>
    </div>

    <div class="content-body">
        <div class="content-body-title">
            <h5>記事情報</h5>
        </div>
        <div class="container">
            <form action="/constructions/list" method="GET">

                <titleView />
                <categoryView />
                
                <div class="row mb-3">
                    <div class="column">サイト表示</div>
                    <div class="col-md-8 row">
                        <div class="row mb-3">
                            <isOpenView />
                            <publishDateView />
                        </div>

                        <switchView />
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="column">案件選択</div>
                    <div class="col-md-8 row">
                        <p class="demand-num">案件番号</p>
                        <div class="col-md-4 mb-3">
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3 col-md-4">
                            <button type="button" class="btn btn-orive sp-wide">検索</button>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="column">担当店舗</div>
                    <div class="col-md-8 row">
                        <p class="mb-3 col-md-4 ">加盟店A</p>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="column">エリア</div>
                    <div class="col-md-8 row">
                        <p class="mb-3 col-md-4 ">北海道</p>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="column">顧客種別</div>
                    <div class="col-md-8 row">
                        <div class="mb-3 col-md-4 ">個人</div>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="column"></div>
                    <div class="col-md-10 row demand-detail">
                        
                        <div class="befor-and-after row">
                            <div class="space-befor sp-hidden"></div>
                            <div class="demand-befor orive">施工前</div>
                            <div class="space-after sp-hidden"></div>
                            <div class="demand-after orive">施工後</div>
                        </div>
                        <div class="images mb-3">
                            <div class="image-select mb-2">
                                <select name="" id="" class="form-select">
                                    <option value="">-</option>
                                    <option value="">メイン</option>
                                    <option value="">1枚目</option>
                                    <option value="">2枚目</option>
                                    <option value="">3枚目</option>
                                </select>
                            </div>
                            <div class="col-md-8 image-area">
                                <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                    <div class="dz-default dz-message">
                                        <button class="dz-button" type="button">
                                            <img src="/src/assets/image/picture.svg" alt="">
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="bar">
                                <span></span>
                            </div>
                            <div class="col-md-8 image-area">
                                <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                    <div class="dz-default dz-message">
                                        <button class="dz-button" type="button">
                                            <img src="/src/assets/image/picture.svg" alt="">
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="images">
                            <div class="image-select mb-2">
                                <select name="" id="" class="form-select">
                                    <option value="">-</option>
                                    <option value="">メイン</option>
                                    <option value="">1枚目</option>
                                    <option value="">2枚目</option>
                                    <option value="">3枚目</option>
                                </select>
                            </div>
                            <div class="col-md-8 image-area">
                                <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                    <div class="dz-default dz-message">
                                        <button class="dz-button" type="button">
                                            <img src="/src/assets/image/picture.svg" alt="">
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="bar">
                                <span></span>
                            </div>
                            <div class="col-md-8 image-area">
                                <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                    <div class="dz-default dz-message">
                                        <button class="dz-button" type="button">
                                            <img src="/src/assets/image/picture.svg" alt="">
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="images">
                            <div class="image-select mb-2">
                                <select name="" id="" class="form-select">
                                    <option value="">-</option>
                                    <option value="">メイン</option>
                                    <option value="">1枚目</option>
                                    <option value="">2枚目</option>
                                    <option value="">3枚目</option>
                                </select>
                            </div>
                            <div class="col-md-8 image-area">
                                <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                    <div class="dz-default dz-message">
                                        <button class="dz-button" type="button">
                                            <img src="/src/assets/image/picture.svg" alt="">
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="bar">
                                <span></span>
                            </div>
                            <div class="col-md-8 image-area">
                                <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                    <div class="dz-default dz-message">
                                        <button class="dz-button" type="button">
                                            <img src="/src/assets/image/picture.svg" alt="">
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="images">
                            <div class="image-select mb-2">
                                <select name="" id="" class="form-select">
                                    <option value="">-</option>
                                    <option value="">メイン</option>
                                    <option value="">1枚目</option>
                                    <option value="">2枚目</option>
                                    <option value="">3枚目</option>
                                </select>
                            </div>
                            <div class="col-md-8 image-area">
                                <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                    <div class="dz-default dz-message">
                                        <button class="dz-button" type="button">
                                            <img src="/src/assets/image/picture.svg" alt="">
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="bar">
                                <span></span>
                            </div>
                            <div class="col-md-8 image-area">
                                <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                    <div class="dz-default dz-message">
                                        <button class="dz-button" type="button">
                                            <img src="/src/assets/image/picture.svg" alt="">
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="demand-under col-md-11 mx-auto">
                            <div class="row col-md-12 mb-3">
                                <div class="column">施工費用</div>
                                <div class="col-md-3">
                                    <input type="text" class="form-control">
                                </div>
                            </div>

                            <div class="mb-3">
                                <p class="mb-1 orive fw-bold">施工のポイント</p>
                                <div>
                                    <textarea class="form-control"></textarea>
                                </div>
                            </div>

                            <div class="mb-3">
                                <p class="mb-1 orive fw-bold">BPコメント</p>
                                <div>
                                    <textarea class="form-control"></textarea>
                                </div>
                            </div>

                            <div class="mb-3">
                                <p class="mb-1 orive fw-bold">お客様の声</p>
                                <div>
                                    <textarea class="form-control"></textarea>
                                </div>
                            </div>

                            <div class="mb-5">
                                <p class="mb-1 orive fw-bold">お客様評価</p>
                                <div>
                                    <span class="demand-star fs-2">★</span>
                                    <span class="demand-star fs-2">☆</span>
                                    <span class="demand-star fs-2">☆</span>
                                    <span class="demand-star fs-2">☆</span>
                                    <span class="demand-star fs-2">☆</span>
                                </div>
                            </div>

                            <div class="construction-images">
                                <p class="fw-bold orive fs-3">施工中の画像</p>
                                <div class="row mb-3">
                                    <div class="row construction-title mx-0 px-0">
                                        <p class="px-0 orive">画像１</p>
                                        <div class="px-0">
                                            <select name="" id="" class="form-select">
                                                <option value="">-</option>
                                                <option value="">1枚目</option>
                                                <option value="">2枚目</option>
                                                <option value="">3枚目</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12 row mb-3">
                                        <div class="construction-image">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="construction-content col-md-8">
                                            <textarea class="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="row construction-title mx-0 px-0">
                                        <p class="px-0 orive">画像２</p>
                                        <div class="px-0">
                                            <select name="" id="" class="form-select">
                                                <option value="">-</option>
                                                <option value="">1枚目</option>
                                                <option value="">2枚目</option>
                                                <option value="">3枚目</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12 row mb-3">
                                        <div class="construction-image">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="construction-content col-md-8">
                                            <textarea class="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="row construction-title mx-0 px-0">
                                        <p class="px-0 orive">画像３</p>
                                        <div class="px-0">
                                            <select name="" id="" class="form-select">
                                                <option value="">-</option>
                                                <option value="">1枚目</option>
                                                <option value="">2枚目</option>
                                                <option value="">3枚目</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12 row mb-3">
                                        <div class="construction-image">
                                            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                                                <div class="dz-default dz-message">
                                                    <button class="dz-button" type="button">
                                                        <img src="/src/assets/image/picture.svg" alt="">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="construction-content col-md-8">
                                            <textarea class="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>


                    </div>
                </div>

                <div class="mt-3 buttons">
                        <input type="button" class="btn btn-orive" value="登録" data-bs-toggle="modal" data-bs-target="#confirmModal">
                        <input type="button" class="btn btn-orive" value="削除" data-bs-toggle="modal" data-bs-target="#deleteModal">
                </div>
                
                <!-- 確認モーダル -->
                <confirmView />
                <!-- 削除モーダル -->
                <deleteView />
            </form>

                
        </div>
    </div>

</template>


<script>
    $(function(){
        // お客様評価押下時
        $('.demand-star').on('click', function () {
            var index = $('.demand-star').index(this);

            $('.demand-star').each(function(i){
                if(i <= index){
                    $(this).text('★');
                }else{
                    $(this).text('☆');
                }
            });
        });

    });
</script>