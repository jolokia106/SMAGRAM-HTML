<style lang="scss" scoped>
    @use "/src/assets/css/style.css";
</style>
<script setup>
    import confirmModal from '@/components/components/layouts/modal/confirm.vue';
</script>
<template>
    <div class="content-title">
        <h5>サービス先住所詳細</h5>
    </div>

    <div class="content-body">
        <form action="/service_address/list" method="GET">
            <div class="content-body-title">
                <h5>基本情報</h5>
            </div>


            <div class="row mb-3 col-md-6">
                <div class="column">対象顧客</div>
                <div class="col-md-6">
                    <select class="form-select">
                        <option value="">顧客A</option>
                        <option value="">顧客B</option>
                        <option value="">顧客C</option>
                        <option value="">顧客D</option>
                        <option value="">顧客E</option>
                        <option value="">顧客F</option>
                    </select>
                </div>
            </div>

            <div class="row mb-3 col-md-6">
                <div class="column">サービス先名</div>
                <div class="col-md-6">
                    <input type="text" class="form-control">
                </div>
            </div>

            <div class="row mb-3 col-md-6">
                <div class="column">郵便番号</div>
                <div class="col-md-6">
                    <input type="number" class="form-control">
                </div>
            </div>

            <div class="row">
                <div class="row mb-3 col-md-6">
                    <div class="column">都道府県</div>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option value="">北海道</option>
                            <option value="">青森県</option>
                            <option value="">岩手県</option>
                            <option value="">宮城県</option>
                            <option value="">秋田県</option>
                            <option value="">山形県</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-3 col-md-6">
                    <div class="column">市区町村</div>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option value="">札幌市</option>
                            <option value="">函館市</option>
                            <option value="">小樽市</option>
                            <option value="">旭川市</option>
                            <option value="">室蘭市</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row mb-3 col-md-12">
                <div class="column">市区群以下</div>
                <div class="col-md-6">
                    <textarea class="form-control"></textarea>
                </div>
            </div>
            <div class="row mb-3 col-md-12">
                <div class="column">住所カナ</div>
                <div class="col-md-6">
                    <textarea class="form-control"></textarea>
                </div>
            </div>

            <div class="row">
                <div class="row mb-3 col-md-6">
                    <div class="column">緯度</div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" disabled>
                    </div>
                </div>
                <div class="row mb-3 col-md-6">
                    <div class="column">経度</div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" disabled>
                    </div>
                </div>
            </div>

            <div class="mt-5 buttons">
                    <input type="button" class="btn btn-orive" value="登録" data-bs-toggle="modal" data-bs-target="#confirmModal">
                    <input type="button" class="btn btn-orive" value="削除" data-bs-toggle="modal" data-bs-target="#deleteModal">
            </div>

            <!-- モーダル -->
            <confirmModal />

        </form>
    </div>



</template>


<script scoped>
    $(function(){
      

    });
</script>