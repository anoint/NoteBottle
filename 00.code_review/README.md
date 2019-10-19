# NoteBottle 리뷰

컴포넌트를 나누고 _Router_ 와 _Vuex_ 를 사용해서 전체적으로 *Vue* 구성에 맞게 잘 짰습니다.

_Vue_ 에서의 아쉬운 부분보다는 `axios` 의 사용이 조금 아쉽습니다.

`axios` 에서 `post` 방식으로 통신을 하는 경우 `token` 이라는 값을 항상 `body` 에 넣어서 요청을 보내고 있는데,

이런 부분을 매번 호출할 때마다 작성하는 것이 아니라 `post` 방식으로 호출할 때마다 자동으로 `token` 값을 `body` 에 넣도록 하는 것이 가능합니다.

`axios`의 `interceptors` 를 이용하면 됩니다.

```
import axios from 'axios'
import authStore from './vuex/auth'

axios.interceptors.request.use(config => {
    if(config.method === 'post') {
        config.data.token = authStore.state.token
    }
})
```

이런 식으로 하면 매번 _Vue Component_ 에서 `token` 값을 가져와 넣어주지 않아도 됩니다.

---

그리고 `axios` 로 `http` 통신을 할 때마다 매번 같은 `host`(_http://notebottle.api.test_) 를 작성하고 있는데 이 부분도 개선할 수 있습니다.

이 부분은 `axios` 의 [*Creating an instance*](https://github.com/axios/axios#creating-an-instance) 를 참고 하시면 될 것 같아요.

---

`axios` 도 전역변수로 사용하기 보다는 _Vuex_ 에서 `axios` 로 _API_ 를 호출 하는 방식으로 코드를 작성하시는게 더 좋습니다.

_api.js_ 라는 파일을 만들고 여기서 `axios` 로 _API_ 를 호출 하는 코드를 작성하고, 이거를 _Vuex_ 에서 호출하는 구조로 하시면 됩니다.

```
// src/api.js
import axios from 'axios'

const api = {
    getPageList({ count, offset }) {
        axios.get(`/page/list?count=${count}&offset=${offset}`)
            .then(res => {
                /* 성공처리 */
            })
            .catch(err => {
                /* Error 처리 */
            })
    }
}
```

```
// vuex/page.js
import api from '../api'

const page = {
    actions: {
        getList(context, { count, offset }) {
            return api.getPageList({ count, offset })
        }
    }
}
```

```
// Vue Component

export default {
    ...,

    methods: {
        postView() {
            this.$store.dispatch('page/getList', { count, offset })
                .then(res => {
                    /* 성공처리 */
                })
                .catch(err => {
                    /* Error 처리 */
                })
        }
    }
}
```