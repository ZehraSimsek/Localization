import './App.css';
import { useState , useEffect} from 'react'
import { IntlProvider, FormattedMessage} from 'react-intl';

function App() {
  //seçilmiş local bir dil var mı yoksa default dili ata 
  const isLocale = localStorage.getItem('locale');
  const defaultLocale = (isLocale ? isLocale : navigator.language);//tarayıcının default dilini bulur
  console.log(defaultLocale);
  const messages = {
    "tr": {
      title: 'Merhaba',
      //count - values parametre gönderme şeklimiz
      description: '{count} yeni mesajınız var.'
    },
    "eng": {
      title: 'Hello',
      description: '{count} have new messages'
    }
  }
  const [locale, setLocale] = useState(defaultLocale)//language

  //component did mount anında default dili seçilen son dil yapar
  useEffect(() => {
      localStorage.setItem('locale', locale);
  }, [locale])

  return (
    <div className="App">
      {/* Provider data sağlıyor */}
      <IntlProvider locale={locale}  messages={messages[locale]}>
        <FormattedMessage id="title"/>
        <br /><br />
        <p>
          <FormattedMessage id="description" values={{count : 3}}/>
        </p>

        <br /><br />
        <button onClick={() => setLocale('tr')}>TR</button>
        <button onClick={() => setLocale('eng')}>ENG</button>
      </IntlProvider>
    </div>
  );
}

export default App;
