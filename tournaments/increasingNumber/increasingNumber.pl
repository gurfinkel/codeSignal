use strict;
use warnings;

sub increasingNumber {
    my ($x, $n) = @_;

    for (my $i = 1; $n >= $i; ++$i) {
        while ($x % $i) {
            ++$x;
        }
    }

    return $x;
}
