<template>
    <div class="content-title">
        <h6>備品資材詳細</h6>
    </div>

    <div class="content-body">
        <div class="content-body-title">
            <h6>備品資材情報</h6>
        </div>
        <div class="container">
            <form action="/0061" method="GET">
                <div class="row">
                    <div class="row mb-3 col-md-6">
                        <div class="column">購入BP店名</div>
                        <div class="col-md-6">
                            <select name="" id="" class="form-select">
                                <option value="">加盟店１</option>
                                <option value="">加盟店２</option>
                                <option value="">加盟店３</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3 col-md-6">
                        <div class="column">購入日</div>
                        <div class="col-md-6"><input type="date" class="form-control"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="row mb-3 col-md-6">
                        <div class="column">支払方法</div>
                        <div class="col-md-6">
                            <select name="" id="" class="form-select">
                                <option value="">クレジット</option>
                                <option value="">銀行振込</option>
                                <option value="">相殺</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3 col-md-6">
                        <div class="column">備考</div>
                        <div class="col-md-6"><input type="text" class="form-control"></div>
                    </div>
                </div>



                <div class="items">
                    <div class="item">

                            <div class="row mb-3">
                                <div class="column">商品名１</div>
                                <div class="col-md-3"><input type="text" class="form-control"></div>
                            </div>
                        <div class="row">
                            <div class="row mb-3 col-md-4 item-div">
                                <div class="column">購入金額</div>
                                <div class="number"><input type="text" class="form-control"></div>
                            </div>
                            <div class="row mb-3 col-md-4 item-div">
                                <div class="column">購入数</div>
                                <div class="number"><input type="text" class="form-control"></div>
                            </div>
                            <div class="row mb-3 col-md-4 item-div">
                                <div class="column">送料</div>
                                <div class="number"><input type="text" class="form-control"></div>
                            </div>
                        </div>


                        <div class="row mb-3">
                            <div class="column">原価</div>
                            <div class="number"><input type="text" class="form-control"></div>
                        </div>
                        <div class="row mb-3">
                            <div class="column">仕入先</div>
                            <div class="col-md-3">
                                <select name="" id="" class="form-select">
                                    <option value="">仕入先１</option>
                                    <option value="">仕入先２</option>
                                    <option value="">仕入先３</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="row mb-3">
                            <div class="column">商品名２</div>
                            <div class="col-md-3"><input type="text" class="form-control"></div>
                        </div>
                        <div class="row">
                            <div class="row mb-3 col-md-4">
                                <div class="column">購入金額</div>
                                <div class="number"><input type="text" class="form-control"></div>
                            </div>
                            <div class="row mb-3 col-md-4">
                                <div class="column">購入数</div>
                                <div class="number"><input type="text" class="form-control"></div>
                            </div>
                            <div class="row mb-3 col-md-4">
                                <div class="column">送料</div>
                                <div class="number"><input type="text" class="form-control"></div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="column">原価</div>
                            <div class="number"><input type="text" class="form-control"></div>
                        </div>
                        <div class="row mb-3">
                            <div class="column">仕入先</div>
                            <div class="col-md-3">
                                <select name="" id="" class="form-select">
                                    <option value="">仕入先１</option>
                                    <option value="">仕入先２</option>
                                    <option value="">仕入先３</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="add-buttons">
                        <img src="/src/assets/image/square_plus_icon.svg">
                        <img src="/src/assets/image/square_minus_icon.svg">
                    </div>

                </div>


                <div class="row mb-3">
                    <div class="column">合計金額</div>
                    <div class="number"><input type="text" class="form-control"></div>
                </div>


                <div class="row">
                    <div class="row mb-3 col-md-6">
                        <div class="column">入金日</div>
                        <div class="col-md-8"><input type="date" class="form-control"></div>
                    </div>
                    <div class="row mb-3 col-md-6">
                        <div class="column">ステータス</div>
                        <div class="col-md-8">
                            <select name="" id="" class="form-select">
                                <option value="">本部確認中</option>
                                <option value="">入金待</option>
                                <option value="">入金済</option>
                                <option value="">キャンセル</option>
                                <option value="">発注済</option>
                                <option value="">発送済</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row mb-3 col-md-6">
                        <div class="column">相殺</div>
                        <div class="col-md-8">
                            <input type="checkbox" value="1" checked="checked" id="offset">
                            <label for="offset" class="checkbox offset"></label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row mb-3 col-md-6">
                        <div class="column">キャンセル理由</div>
                        <div class="col-md-8"><textarea class="form-control"></textarea></div>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <input type="submit" class="btn btn-orive" value="登録">
                </div>
            </form>
        </div>
    </div>







</template>