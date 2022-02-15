import * as UI from '../src/index.tsx';

import '../fonts.css';

export function App() {
  return (
    <UI.Context>
      <UI.Block theme='alternate' bottom={10} top={10}>
        <UI.Section>
          <UI.Column
            width={50}
            css={{
              br: '$border300',
            }}>
            <UI.Tooltip trigger={<UI.Button>Hover me</UI.Button>}>
              yarnLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan tempus feugiat. Duis sagittis laoreet magna, eget vestibulum felis dictum sit amet.
              Nullam eget est malesuada, fermentum massa id, faucibus mi. Curabitur nec ornare est. Maecenas euismod venenatis orci, nec eleifend sapien interdum sit amet. Mauris
              non orci sit amet eros facilisis dictum ac ut purus. Mauris vel orci convallis, mattis dolor sed, egestas est. Nam vehicula enim id mi egestas, sit amet volutpat orci
              laoreet. Nulla sed massa nec nunc scelerisque mollis ut at felis. Donec ut convallis sapien, sit amet facilisis risus. Donec a turpis non felis lobortis tincidunt.
              Fusce gravida, ante sed laoreet tincidunt, turpis libero viverra libero, et blandit odio ligula et odio. Praesent vulputate pulvinar urna, tincidunt finibus enim
              rhoncus vitae. Aenean tellus turpis, molestie sed consequat vel, mattis eget tellus. Nulla facilisi. Integer id mauris id lectus molestie semper vitae nec purus. Sed
              nec scelerisque leo. Pellentesque lacus metus, viverra vitae lobortis sed, rhoncus id mi. Fusce congue mauris massa, nec ultrices nulla dapibus sed. Donec posuere
              ante est, sed dapibus purus pharetra id. Etiam ultrices leo nec metus volutpat, ut accumsan libero malesuada. Maecenas venenatis purus vel est porta tempus. Donec et
              semper est. Maecenas pellentesque varius consectetur. Curabitur condimentum mattis leo sit amet laoreet. In velit urna, lacinia vel tincidunt nec, varius a risus.
              Proin eu eros eu lacus blandit mollis non eget lorem. Quisque ultricies odio nisi, sed efficitur mi bibendum sit amet. Donec tincidunt leo quis iaculis molestie. In
              urna diam, dapibus ac sem ut, ultrices ornare est. Aenean malesuada justo at ipsum mollis, quis venenatis velit ultrices.
            </UI.Tooltip>
          </UI.Column>
          <UI.Column
            width={50}
            css={{
              br: '$border300',
            }}>
            <UI.Checkbox
              tooltip='Nullam eget est malesuada, fermentum massa id, faucibus mi. Curabitur nec ornare est. Maecenas euismod venenatis orci, nec eleifend sapien interdum sit amet. Mauris
              non orci sit amet eros facilisis dictum ac ut purus. Mauris vel orci convallis, mattis dolor sed, egestas est. Nam vehicula enim id mi egestas, sit amet volutpat orci
              laoreet. Nulla sed massa nec nunc scelerisque mollis ut at felis. Donec ut convallis sapien, sit amet facilisis risus. Donec a turpis non felis lobortis tincidunt.
              Fusce gravida, ante sed laoreet tin'>
              hey
            </UI.Checkbox>
          </UI.Column>
        </UI.Section>
      </UI.Block>

      <UI.Cookies token={Math.random()} />
    </UI.Context>
  );
}
