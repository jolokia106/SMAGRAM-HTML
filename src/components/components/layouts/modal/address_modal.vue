<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                <div class="row mb-3 col-md-12">
                    <div class="column">郵便番号</div>
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="000-0000">
                    </div>
                </div>
                <div class="row mb-3 col-md-12">
                    <div class="column">都道府県</div>
                    <div class="col-md-12">
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
                <div class="row mb-3 col-md-12">
                    <div class="column">住所 (カナ)</div>
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="ジュウショ">
                    </div>
                </div>
                <div class="row mb-3 col-md-12">
                    <div class="column">市区町村</div>
                    <div class="col-md-12">
                        <select class="form-select">
                            <option value="">札幌市</option>
                            <option value="">函館市</option>
                            <option value="">小樽市</option>
                            <option value="">旭川市</option>
                            <option value="">室蘭市</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-3 col-md-12">
                    <div class="column">町名・番地以降</div>
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="〇〇町">
                    </div>
                </div>
                <div class="row mb-3 col-md-12">
                    <div class="column">ビル・建物名・部屋番号など</div>
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="〇〇ビル 101">
                    </div>
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-orive">設定</button>
                </div>
            </div>

            
        </div>
        </div>
    </div>
</div>

</template>