<script>
import { useDropzone } from "vue3-dropzone";

export default {
    name: "UseDropzoneDemo",
    setup() {
        function onDrop(acceptFiles, rejectReasons) {
            console.log(acceptFiles);
            console.log(rejectReasons);
        }

        const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });

        return {
            getRootProps,
            getInputProps,
            ...rest,
        };
    },
};
</script>
<style scoped lang="scss">
.dropzone{
    margin: 0;
    padding: 0;
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    border: 2px dashed #41b883;
    background-color: white;
    box-sizing:border-box;
    transition: 0.3s ease all;
};

input{
    display: none;
}

</style>
<template>

    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            店舗写真
        </div>
        <div class="dropzone col-auto">
            <div v-bind="getRootProps()">
                <input v-bind="getInputProps()" />
                <p v-if="isDragActive">ko ...</p>
                <p v-else>ここにファイルをドラッグアンドドロップしてください。</p>
            </div>
            <!-- <button @click="open">open</button> -->
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            店長写真
        </div>
        <div class="dropzone col-auto">
            <div v-bind="getRootProps()">
                <input v-bind="getInputProps()" />
                <p v-if="isDragActive">Drop the files here ...</p>
                <p v-else>ここにファイルをドラッグアンドドロップしてください。</p>
            </div>
            <!-- <button @click="open">open</button> -->
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>店舗名
            </label>
        </div>
        <div class="col-auto">
            <input type="text" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>店舗名（カナ）
            </label>
        </div>
        <div class="col-auto">
            <input type="text" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>店長名
            </label>
        </div>
        <div class="col-auto">
            <input type="text" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>店長名（カナ）
            </label>
        </div>
        <div class="col-auto">
            <input type="text" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label></label>
        </div>
        <div class="col-auto">
            <div class="form-check">
                <input class="form-check-input" type="radio" value="">
                <label class="form-check-label">
                    店長名を公開しない
                </label>
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>営業時間</label>
        </div>
        <div class="col-auto">
            <select class="form-select">
                <option value="1">8:00</option>
                <option value="2">9:00</option>
            </select>
        </div>
        <div class="col-auto">
            <select class="form-select">
                <option value="1">15:00</option>
                <option value="2">17:00</option>
            </select>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label></label>
        </div>
        <div class="col-auto">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label">
                    定休日なし
                </label>
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label></label>
        </div>
        <div class="col-auto">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label">
                    臨時休業日なし
                </label>
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label></label>
        </div>
        <div class="col-auto">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label">
                    見積りまでの最短期間なし
                </label>
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label></label>
        </div>
        <div class="col-auto">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label">
                    作業までの最短期間なし
                </label>
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>キャッチコピー</label>
        </div>
        <div class="col-sm-10">
            <textarea class="form-control" rows="5"></textarea>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>事業内容</label>
        </div>
        <div class="col-sm-10">
            <textarea class="form-control" rows="5"></textarea>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>お客様へのメッセージ</label>
        </div>
        <div class="col-sm-10">
            <textarea class="form-control" rows="5"></textarea>
        </div>
    </div>
</template>