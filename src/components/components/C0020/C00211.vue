<template>

    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>顧客コード:</label>
        </div>
        <div class="col-auto">
            0000000002
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>法人個人区分:</label>
        </div>
        <div class="col-auto">
            <select class="form-select">
                <option value="1">個人</option>
                <option value="2">一般法人</option>
                <option value="3">大口法人</option>
            </select>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>法人格前後区分:</label>
        </div>
        <div class="col-auto">
            <select class="form-select">
                <option value="1">前</option>
                <option value="2">後</option>
            </select>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>法人格:</label>
        </div>
        <div class="col-auto">
            <select class="form-select">
                <option value="1">株式会社</option>
                <option value="2">財団法人</option>
            </select>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>送客元:</label>
        </div>
        <div class="col-auto">
            <select class="form-select">
                <option value="1">本部</option>
                <option value="2">コープぎふ</option>
            </select>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>締め:</label>
        </div>
        <div class="col-sm-4">
            <select class="form-select">
                <option value="1">当月</option>
                <option value="2">翌月</option>
            </select>
        </div>
        <div class="col-sm-4">
            <select class="form-select">
                <option value="1">1</option>
                <option value="2">5</option>
                <option value="3">10</option>
                <option value="4">15</option>
                <option value="5">20</option>
                <option value="6">25</option>
                <option value="7">末</option>
            </select>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>支払予定日:</label>
        </div>
        <div class="col-sm-4">
            <select class="form-select">
                <option value="1">当月</option>
                <option value="2">翌月</option>
                <option value="2">翌々月</option>
            </select>
        </div>
        <div class="col-sm-4">
            <select class="form-select">
                <option value="1">1</option>
                <option value="2">5</option>
                <option value="3">10</option>
                <option value="4">15</option>
                <option value="5">20</option>
                <option value="6">25</option>
                <option value="7">末</option>
            </select>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>先方への確認:</label>
        </div>
        <div class="col-auto">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>ブラック判定:</label>
        </div>
        <div class="col-auto">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>氏名:</label>
        </div>
        <div class="col-sm-4">
            <input type="text" class="form-control" placeholder="苗字 ..." value="">
        </div>
        <div class="col-sm-4">
            <input type="text" class="form-control" placeholder="名前 ..." value="">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>シメイ:</label>
        </div>
        <div class="col-sm-4">
            <input type="text" class="form-control" placeholder="ミョウジ ..." value="">
        </div>
        <div class="col-sm-4">
            <input type="text" class="form-control" placeholder="ナマエ ..." value="">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>部署・担当者等:</label>
        </div>
        <div class="col-sm-8">
            <input type="text" class="form-control" placeholder="部署担当 ..." value="">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>住所:</label>
        </div>
        <div class="col-sm-8">
            〒400-0001
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
        </div>
        <div class="col-sm-8">
            愛知県名古屋市中村区那古野1-1-1
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
        </div>
        <div class="col-auto">
            アイチケンナゴヤシナカムラクナコノ
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div>
            <button type="submit" class="btn btn-primary w-100">住所設定</button>
        </div>
    </div>

    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-3 col-form-label">
            <label>TEL:</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="radio" value=""
                        aria-label="Radio button for following text input">
                </div>
                <input type="text" class="form-control" aria-label="Text input with radio button">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-3 col-form-label">
            <label>TEL:</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="radio" value=""
                        aria-label="Radio button for following text input">
                </div>
                <input type="text" class="form-control" aria-label="Text input with radio button">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-3 col-form-label">
            <label>TEL:</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="radio" value=""
                        aria-label="Radio button for following text input">
                </div>
                <input type="text" class="form-control" aria-label="Text input with radio button">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-3 col-form-label">
            <label>携帯電話:</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="radio" value=""
                        aria-label="Radio button for following text input">
                </div>
                <input type="text" class="form-control" aria-label="Text input with radio button">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-3 col-form-label">
            <label>メールアドレス:</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="radio" value=""
                        aria-label="Radio button for following text input">
                </div>
                <input type="text" class="form-control" aria-label="Text input with radio button">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-3 col-form-label">
            <label>FAX:</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="radio" value=""
                        aria-label="Radio button for following text input">
                </div>
                <input type="text" class="form-control" aria-label="Text input with radio button">
            </div>
        </div>
    </div>

</template>