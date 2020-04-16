import React from 'react'
import { ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styled.js'

Icon.loadFont();

const TermsOfUse = ({
    navigation,
}) => {
    const { callBack, formatMessage } = navigation?.state?.params || {}

    return (
        <ScrollView
            contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'column',
                margin: 20,
                paddingBottom: 80,
                backgroundColor: 'rgba(240, 240, 240, 1)'
            }}
        >
            <S.Title>{formatMessage({ id: 'signup.form.terms_of_use' })}</S.Title>
            <S.Text>
            O aplicativo ________, os serviços oferecidos (os "Serviços") de utilização do aplicativo para fazer os serviços propostos são de propriedade, operados e mantidos, por Padme  LTDA. ("nós", "nosso" ou a "Companhia"). (1) Usando ou acessando o Aplicativo ou os Serviços, (2) acessando ou utilizando a plataforma, ou (3) instalando ou utilizando do aplicativo, o usuário (você) formaliza sua concordância com os termos e condições descritos abaixo ("Termos"). Em caso de discordância com estes termos, o Aplicativo não deverá ser utilizado. Para os efeitos deste Termo, "você", é aquele que tem o acesso aos serviços básicos propostos são oferecidos gratuitamente. Somente poderá ser utilizados para maiores de 18 anos.
1. Privacidade
Todas as informações pessoais submetidas no decorrer do uso do Aplicativo estarão sujeitas à Política de Privacidade, todas as informações dos usuários estarão disponíveis no sistema da Padme e somente serão transferidas para os parceiros, autores e terceiros com relacionamento formal com a Padme Ltda. Assim estes assumiram todas as regras de privacidade da mesma.
2. Serviço
Através dos nossos serviços, o Aplicativo permite aos usuários a utilização do aplicativo para a prática da meditação proposta ( Meditação nos Corações Gêmeos) .
3. Custos de Conectividade e Equipamentos
 O usuário é o único responsável por todos os serviços de telefonia, conexão à internet, e/ou outras taxas e custos associados ao seu acesso e uso dos Serviços, e pelos custos de manutenção de conexão, computadores e outros equipamentos necessários para o acesso e uso dos mesmos.
4. Custos e Taxas
Cadastrar-se ao Aplicativo, participar da meditação são caracterizados como serviços gratuitos, isto é, sem custos.
Em caso da oferta de outros serviços no futuro comercializados pelo aplicativo, será necessário o pagamento de acordo com os valores e a forma prevista para cada produto, mas que deverá ter novo aceite do usuário. Este termo atual não permite nenhuma cobrança.
5. Conteúdo
 O aplicativo é de propriedade da empresa Padme Ltda. Os direitos autorais da Meditação são de propriedade do (_____) e não está disponível para venda ou cópias neste aplicativo, simplesmente para utilização na sala de meditação virtual disponibilizada pela empresa Padme Ltda.
 6. Obrigações dos Usuários
 Como alguém que busca aprender a meditar a meditação especifica, o usuário concorda que:
Lerá e respeitará as informações de utilização com as regras de restrições:
Quem não têm permissão para praticar a Meditação nos Corações Gêmeos: 
Aqueles com menos de 18 (dezoito) anos de idade;
Aqueles com doenças cardíacas, hipertensão, glaucoma e doenças renais graves, e algumas mulheres grávidas. 
Não manipulará ou interferirá no aplicativo;
Não copiar de forma alguma os conteúdos.
 7. Registro e Proteção de Identidade
 Para utilizar os Serviços, o usuário precisará se cadastrar no aplicativo e obter uma conta de usuário e senha. Quando o usuário se registra, a informação que nos fornece durante o processo de registro irá ajudar a PADME na oferta de conteúdo, serviço ao cliente e gerenciamento de rede. O usuário é o único responsável por manter a confidencialidade da sua conta(s) nome(s) e senha(s) (a "Conta") e para todas as atividades e responsabilidades associadas com ou que ocorram em sua conta. O usuário deve notificar a Padme imediatamente sobre qualquer uso não autorizado de sua conta e qualquer outra violação de segurança, e (b) assegurar-se que saia de sua conta ao final de cada sessão. A Padme Online não pode e não será responsável por qualquer perda ou dano resultante de sua falha em cumprir com esta obrigação ou como resultado da utilização de sua conta, com ou sem o seu conhecimento. O ￼usuário pode ser responsabilizado pela Padme ou outra parte, por perdas sofridas caso outra pessoa utilize sua conta. O usuário não pode transferir sua conta e não pode usar a conta de qualquer outra pessoa a qualquer momento sem a autorização do titular da conta. Nos casos em que tiver autorizado ou registrado um outro indivíduo, incluindo um menor, ou usuário que tenha qualquer problema de saúde enquadrado nas restrições para meditação para usar sua conta, o usuário é totalmente responsável por qualquer dano causado a este usuário.
8. Veracidade de Informações 
Em relação ao seu uso dos Serviços, o usuário concorda em (a) fornecer informações verdadeiras, exatas, atuais e completas sobre si mesmo, conforme solicitado pelo formulário de registro no Serviço (tais informações: "Seus Dados"), (b) manter e atualizar prontamente Seus Dados para mantê-los verdadeiros, exatos, atuais e completos, e (c) cumprir os presentes Termos. Se o usuário fornecer qualquer informação que seja falsa, inexata, não atual ou incompleta, ou se acreditar-se que tal informação é falsa, inexata, não atual ou incompleta, a Padme se reserva no direito de suspender ou encerrar a conta(s) do usuário(s) e recusar ou restringir qualquer uso futuro dos Serviços.
 9. Copyright
 O usuário reconhece que o Aplicativo, a tecnologia dos Serviços, e todos os outros  projetos, materiais, informação, comunicação, texto, gráficos, links, arte eletrônica, animações, ilustrações, desenhos, clipes de áudio, vídeo clipes, fotos, imagens e outros dados ou material protegido por direitos autorais, incluindo a seleção e arranjos dos mesmos, prestados ou disponibilizados ao usuário em conexão com ao aplicativo são as obras de propriedade da Padme e/ou de seus afiliados e/ou terceiros prestadores e fornecedores (os "Terceiros") e são protegidos, sem limitação, de acordo com leis de direitos autorais.
 10. Uso Proibido do Conteúdo da Empresa
 Exceto quando expressamente autorizado pela Padme ou aos autores dos materiais do aplicativo ou por estes termos, o usuário não poderá copiar, reproduzir, publicar, distribuir, difundir, transmitir, distribuir, modificar, criar trabalhos derivados, alugar, arrendar, vender, ceder, transferir, transmitir, compilar ou recolher em um banco de dados, ou de qualquer forma explorar comercialmente o conteúdo do Aplicativo, do Conteúdo da Empresa ou dos Serviços, no todo ou em parte. O usuário não vai, de qualquer maneira, sem autorização prévia por escrito da Padme, descompilar, desmontar, fazer engenharia reversa, montagem reversa ou tentar descobrir o código-fonte, o Software ou qualquer conteúdo da empresa, o Aplicativo ou os Serviços. O usuário não pode armazenar qualquer parcela significativa de qualquer conteúdo Companhia ou os Serviços de qualquer forma, seja por meio de arquivos, arquivos legíveis por computador ou qualquer outro meio. O usuário não pode "espelhar" qualquer conteúdo da empresa ou dos serviços em qualquer servidor. Qualquer uso não autorizado ou proibido do software, o Conteúdo da Empresa, o Aplicativo ou os Serviços, coloca o infrator sujeito à responsabilidade civil e ação penal nas leis federais e estaduais.
11. Uso Permitido do Conteúdo da Empresa
 O usuário pode utilizar o conteúdo do aplicativo somente para uso pessoal, e a Padme lhe concederá um acesso ilimitada, não-perpétua, revogável, intransferível, não atribuível e não exclusiva, o acesso é livre de royalties para acessar e utilizar os Serviços, o Software e outro Conteúdo da Empresa para fins pessoais. 
 12. Violação de Direitos Autorais
 ￼A Padme não promove, fomenta ou tolera a cópia de material protegido por direitos autorais ou qualquer outra atividade ilícita. Qualquer uso não autorizado do aplicativo ou do seu conteúdo irá encerrar o acesso ilimitada concedida pela Padme..
Qualquer acesso no aplicativo que não realizado pelo usuário, por favor avisar imediatamente a Padme.
Informe pelo email: contatopadmemcks@gmail.com
 13. Informações Confidenciais
 O usuário concorda em proteger o Conteúdos da Empresa e dos Serviços ("Informação Privilegiada") e para prevenir o uso indevido, negligente ou acidental a divulgação de tal informação confidencial. O usuário não vai, sem o consentimento prévio da Padme e por escrito, diretamente ou indiretamente, utilizar ou divulgar a informação privilegiada a qualquer pessoa ou entidade comercial, exceto para um número limitado de funcionários que estão em uma necessidade de tomar conhecimento e quem concordar por escrito com estar vinculado a restrições de uso e divulgação estabelecidos nestes Termos. O usuário concorda em notificar, por escrito, a Padme de qualquer uso ou divulgação de informações privadas em violação destes Termos. O usuário reconhece que a utilização ou divulgação das informações protegidas de qualquer maneira inconsistente com estes Termos irá nos causar danos irreparáveis e que teremos o direito de (i) redução equitativa e cautelar para impedir o uso proibido ou divulgação dessas informações, e ￼(ii) recuperar o montante de todos os danos (incluindo honorários advocatícios e despesas) em relação ao uso proibido ou divulgação dessas informações.
 14. Links
 O Aplicativo não autoriza o envio de links sem a solicitação de cadastro e aceite dos termos de uso. Desta forma os convites e links podem serem enviados para outros possíveis usuários, mas os mesmos só poderão acessar o aplicativo caso efetivem seu cadastro e aceitem o termo de uso. 
 15. Marcas
 As marcas registradas, marcas de serviço e os logotipos (as "Marcas") usadas e apresentadas no Aplicativo ou em qualquer Conteúdo da Empresa são marcas registradas ou não, da Padme e outros, e são protegidos, sem limitação, de acordo com as leis brasileiras e de marca estrangeira. Nada no Aplicativo, nos Serviços devem ser interpretados como concessão, por implicação, preclusão ou de outra forma, qualquer licença ou direito de usar qualquer Marca apresentada neste Aplicativo ou em conexão com os Serviços de Conteúdo da Empresa ou Software, sem a escrita permissão do proprietário da marca registrada. A Padme agressivamente faz valer os seus direitos de propriedade intelectual em toda a extensão da lei. O usuário não poderá usar as Marcas, sejam da Padme ou de outros, de qualquer maneira sem a permissão prévia por escrito do proprietário da marca registrada. 
 16. Isenção de Garantia
 O CONTEÚDO DA EMPRESA, DO APLICATIVO, DOS SERVIÇOS E DE CADA PARTE DELES SÃO FORNECIDOS "COMO ESTÁ" SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA. AO LIMITE MÁXIMO DO POSSÍVEL DIREITO APLICÁVEL, REJEITAM TODAS AS GARANTIAS, EXPRESSAS OU IMPLÍCITAS, COM RELAÇÃO AO APLICATIVO, O CONTEÚDO DA EMPRESA, DOS SERVIÇOS E CADA ￼PARTE DELES, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO PARA UM DETERMINADO FIM, NÃO-VIOLAÇÃO OU OUTRA VIOLAÇÃO DE DIREITOS. A PADME NÃO GARANTE NEM FAZ DECLARAÇÕES SOBRE O USO, VIGÊNCIA, OU DE CONFIANÇA OU DOS RESULTADOS DO USO, OU QUALQUER OUTRA SITUAÇÃO DO CONTEÚDO DA EMPRESA, DO APLICATIVO, DOS SERVIÇOS DE CADA PARTE DELES OU SITES DE TERCEIROS.
 17. Limitação de Responsabilidade
 EM NENHUMA HIPÓTESE , INCLUINDO, MAS NÃO SE LIMITANDO A, NEGLIGÊNCIA, A PADME, SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, ESPECIAIS, FORTUITOS OU, INCLUINDO, MAS NÃO SE LIMITANDO A, PERDA DE DADOS OU LUCROS, DECORRENTES OU RELATIVOS AO USO OU A INCAPACIDADE DE USO DO CONTEÚDO DA EMPRESA, DO SITE, DOS SERVIÇOS OU QUALQUER PARTE DO MESMO, MESMO QUE O REPRESENTANTE AUTORIZADO TENHA SIDO AVISADO DA POSSIBILIDADE DE TAIS DANOS. SE A SUA UTILIZAÇÃO DO APLICATIVO, O CONTEÚDO DA EMPRESA, SERVIÇOS OU QUALQUER PARTE DO MESMO, RESULTAR NA NECESSIDADE DE REPARAÇÃO, MANUTENÇÃO OU CORREÇÃO DE EQUIPAMENTOS ou dados, O USUÁRIO ASSUME QUALQUER CUSTO DO MESMO. NEM A PADME, nem terceiros GARANTEM A EXATIDÃO DA INFORMAÇÃO, TEXTOS, GRÁFICOS, links ou outros itens CONSTANTES DO CONTEÚDO DA EMPRESA, DO APLICATIVO, DOS SERVIÇOS OU QUALQUER PARTE DO MESMO OU em todos os relatórios de serviços de verificação. O usuário concorda em não RESPONSABILIZAR a PADME POR QUALQUER INSTRUÇÃO, CONSULTORIA, ou serviços prestados que se originaram ATRAVÉS DO APLICATIVO, através de qualquer serviço de verificação OU EM LIGAÇÃO COM OCONTEÚDO DA EMPRESA, SERVIÇOS OU QUALQUER PARTE DO MESMO. NÃO será a PADME RESPONSÁVEL POR CONFLITOS, reclamações, perdas, lesões ou DANOS DE QUALQUER NATUREZA QUE POSSAM DECORRER DO ou se relacionam com CONDUTA DOS usuários.
 18. Indenização
 O usuário concorda em indenizar, defender e isentar a PADME, e nossas, fornecedores e terceiros (incluindo funcionários de nossos terceiros) de todas as perdas, despesas, danos, custos, reivindicações e demandas, incluindo honorários advocatícios razoáveis e custos e despesas, devido a ou resultante de qualquer Conteúdo Submetido que o usuário enviar, postar, enviar e-mail, ou transmitir ou através dos Serviços, o uso dos Serviços, o Conteúdo da Empresa ou qualquer parte dele, a sua ligação com os Serviços, ou sua violação destes Termos. A Padme se reserva no direito de, às suas expensas, assumir a defesa e o controle exclusivos de qualquer assunto sujeito a indenização pelo usuário e em tal caso, o usuário concorda em cooperar plenamente com essa defesa e reivindicar quaisquer defesas disponíveis.
 19. Modificação dos Serviços
 A Padme poderá adicionar, alterar ou eliminar características, nomenclaturas, incluir preços e outros aspectos dos serviços e fazer outras alterações a qualquer momento e estes Termos continuarão a aplicar-se aos Serviços modificados. A Padme se reserva no direito de a qualquer momento e de tempos em tempos, modificar ou descontinuar, temporariamente ou permanentemente, o Aplicativo ou os Serviços (ou qualquer parte dela) com ou sem aviso prévio. O usuário concorda que a Padme não será responsabilizada por este ou qualquer terceira parte por qualquer modificação, suspensão ou descontinuação do Aplicativo ou dos Serviços.
 20. Mudanças nos Termos de Serviço
 A Padme se reserva no direito, quando necessário, com ou sem aviso prévio, de alterar estes Termos a nosso critério exclusivo e absoluto. A versão mais recente destes Termos pode ser revista, clicando em "Termos de Serviço", localizado na parte inferior das páginas do site. A versão mais atual dos Termos substituirá todas as versões anteriores. O uso do site ou do uso continuado dos serviços após as alterações significa que o usuário concorda em ficar vinculado por tais alterações.
 21. Paralisação dos Serviços
 A Padme pode encerrar a sua utilização do Site ou dos Serviços imediatamente sem aviso por qualquer violação desses Termos ou de quaisquer de nossas políticas aplicáveis, conforme publicado no site de vez em quando. Além disso, podemos terminar o seu direito de utilizar o Aplicativo ou os Serviços para qualquer razão ou sem razão. 
 22. Acordo Completo
 Estes Termos e todas as políticas aplicáveis ao que o usuário postou no Aplicativo constituem o acordo integral entre as partes com relação ao assunto em questão, e substituem todos os anteriores acordos escritos ou verbais entre as partes com relação a esse assunto. Todos os direitos não expressamente concedidos nestes Termos são expressamente reservados. Este Termo reverterá em nosso benefício e em benefício dos nossos terceiros e parceiros.
 23. Divisibilidade
 Se qualquer disposição destes Termos for considerada ilegal ou inaplicável, estes Termos serão considerados reduzidos na medida do necessário para fazer o ponto de vista jurídico e executivo e continuará a ser modificado.
 24. Do Foro
 É eleito o Foro Central da Comarca de São Paulo como competente para dirigir quaisquer controvérsias oriundas do presente Termo, com renúncia expressa a qualquer outro.
 25. Notificação
 Qualquer notificação ou outra comunicação a ser nos Termos do presente será dada por escrito ou correio eletrônico.
            </S.Text>
              <Button
                onPress={ () => {
                    callBack()
                    navigation.goBack()
                }}
                containerStyle={{
                    width: '100%',
                    marginTop: 15,
                }}
                title={formatMessage({ id: 'signup.form.terms_of_use.agreement' })}
            />
        </ScrollView>
    )
}

export default TermsOfUse