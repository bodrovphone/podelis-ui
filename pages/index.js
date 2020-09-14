import Layout, { Main, H1, Description } from '../components/layouts';
import CategoryWidget from '../components/categoryWidget';

export default function Home() {
  return (
    <Layout>
      <Main>
        <H1>
          <div>
            Zadelis
          </div>
          <span>На прокат бери - деньги береги.</span>
          {/*укр: В оренду забирай - грошi зберiгай. */}
        </H1>

        <CategoryWidget categories={['clothes', 'tools', 'electronics', 'transport', 'hobby', 'business']} />

        <Description>
          <span>
            Простой и удобный шаринг-сервис для тебя.
            Арендуй поблизости. Пользуйся тем что нужно, не покупая.
            Тут возможно еще текст - более развернутый...<span className='text-truncated'>возможно при клике или при ховере
            суть в том чтобы на фоне поставить заманчивую картинку и ... чтобы текст интриговал
            </span>
          </span>
        </Description>


          <p>
            Тут у меня будут thumbnails с картинками основных категорий ?
          </p>

          <p>
            Тут у меня будет форма поиска
            И возможно когда на нее ставится фокус она поднимается вверх
            а еще я хочу эту хрень которая самописная в инпут, да?
            Или эту хрень поставить выше под описанием сервиса?
            Вот вот я уже начал думать, неплохо
          </p>

          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
      </Main>
    </Layout>
  )
}
