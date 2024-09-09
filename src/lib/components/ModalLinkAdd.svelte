<script>
    import { onMount } from 'svelte';
    import { modalOpenIdStore } from '$store/panel-store';

    export let id = '';
    export let ariaHidden = 'false';
    export let dataAddText = '';

    onMount(() => {});

    const checkYouTubeUrl = () => {
        // 필요한 로직 추가
    };

    const hiddenModal = (event) => {
        if (event.target.id === $modalOpenIdStore) {
            modalOpenIdStore.set('');
        }
    };
</script>

<div
    {id}
    class="fixed bottom-0 left-0 right-0 top-0 z-[3000] h-full w-full items-center justify-center bg-black/25"
    class:flex={ariaHidden === 'false'}
    class:hidden={ariaHidden === 'true'}
    aria-hidden={ariaHidden !== 'false'}
    data-subscribe="유튜브 공유하기 링크를 붙여넣어주세요. 올바르지 않은 링크거나 퍼가기가 불가한 링크인 경우 영상이 송출되지 않습니다."
    data-add-text={dataAddText}
    on:click={hiddenModal}
>
    <div class="relative w-[41rem] rounded-12 bg-[#2a2a2a] px-40 py-40 shadow-lg">
        <p class="text-bold text-25 text-white">Link Embed</p>

        <div class="flex flex-col rounded-t-8 bg-[#3a3a3a] p-16">
            <label for="iframeYoutube" class="text-15 text-[#707070]">TEXT</label>
            <div class="mt-15">
                <input
                    type="text"
                    class="h-52 w-full rounded-12 border border-solid border-[#585858] bg-[#3a3a3a] px-16 text-left text-18 text-[#fff]"
                    name="iframeYoutube"
                    id="iframeYoutube"
                    placeholder="https://youtu.be/ &amp; https://www.youtube.com/"
                    title="youtube url"
                    on:input={checkYouTubeUrl}
                />
            </div>
        </div>

        <div class="flex flex-col rounded-b-8 bg-[#3a3a3a] p-16">
            <label for="iframeYoutube" class="text-15 text-[#707070]">URL</label>
            <div class="mt-15">
                <input
                    type="text"
                    class="h-52 w-full rounded-12 border border-solid border-[#585858] bg-[#3a3a3a] px-16 text-left text-18 text-[#fff]"
                    name="iframeYoutube"
                    id="iframeYoutube"
                    placeholder="https://"
                    title="youtube url"
                    on:input={checkYouTubeUrl}
                />
            </div>
        </div>

        <div class="mt-30 text-center">
            <button
                type="button"
                class="inline-flex h-54 w-230 items-center justify-center rounded-12 bg-[#327aff] disabled:bg-[#cccccc] disabled:opacity-30"
                aria-label={dataAddText}
                title={dataAddText}
                data-edit-type="video"
                disabled
            >
                <span class="text-20 text-white">{dataAddText}</span>
            </button>
        </div>

        <div class="absolute right-0 top-0">
            <button
                type="button"
                class="inline-flex h-40 w-40 items-center justify-center"
                aria-label="modal close"
                title="modal close"
                on:click={() => modalOpenIdStore.set('')}
            >
                <icon-svg
                    data-name="modal-close"
                    data-width="24"
                    data-height="24"
                    data-fill="#d8d8d8"
                    data-stroke="#d8d8d8"
                ></icon-svg>
                <span class="sr-only">modal close</span>
            </button>
        </div>
    </div>
</div>
