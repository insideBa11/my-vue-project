<template>
  <form
      id="data-form-container"
      class="data-form-container"
  >
    <div class="form-item">
      <div class="input-area">
        <input type="text"
               maxlength="10"
               placeholder="用户昵称"
               v-model="fromData.nickname"
               @focus="nicknameFocus"
        />
        <span class="tip">{{ this.fromData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea maxlength="300"
                  placeholder="输入内容"
                  v-model="fromData.content"
                  @focus="contentFocus"
        ></textarea>
        <span class="tip">{{ this.fromData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button @click="submit" v-on:click.self.prevent :disabled="isSubmitting">
          {{ isSubmitting ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import showMessage from '@/utils/messageAlert/showMessage'

export default {
  name: 'DataForm',
  data() {
    return {
      error: {
        nickname: "",
        content: "",
      },
      fromData: {
        nickname: "",
        content: "",
      },
      isSubmitting: false,
    }
  },
  methods: {
    submit() {
      if (this.error.nickname === "" && this.error.content === "") {
        if (this.fromData.nickname && this.fromData.content) {
          this.isSubmitting = true;
          this.$emit('submit', this.fromData, (successMsg) => {
            showMessage({
              content: successMsg, type: 'success', callback: () => {
                this.fromData.nickname = "";
                this.fromData.content = "";
                this.isSubmitting = false;
              },
            });
          });
        } else {
          this.error.nickname = this.fromData.nickname ? "" : '请输入用户昵称'
          this.error.content = this.fromData.content ? "" : '请输入评论内容'
          showMessage({content: '提交信息有误', type: 'error'})
        }
      }
    },
    nicknameFocus() {
      this.error.nickname = ""
    },
    contentFocus() {
      this.error.content = ""
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.data-form-container {
  margin: 40px 0;
  overflow: hidden;
}

.form-item {
  margin-bottom: 8px;
}

.input-area {
  width: 50%;
  position: relative;
}

.text-area {
  position: relative;
}

.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #b4b8bc;
  font-size: 12px;
}

input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed @gray;
  outline: none;
  color: @words;
  font-size: 14px;
  border-radius: 4px;

  &:focus {
    border-color: @primary;
  }
}

input {
  padding: 0 15px;
  height: 40px;
}

textarea {
  resize: none;
  padding: 8px 15px;
  height: 120px;
}

.error {
  margin-top: 6px;
  color: @danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}

button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: @primary;

  &:hover {
    background: darken(@primary, 10%);
  }

  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>
