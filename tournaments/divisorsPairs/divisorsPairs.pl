use strict;
use warnings;

sub divisorsPairs {
    my ($sequence) = @_;

    my $len = @$sequence;
    my $result = 0;

    for (my $i = 0; $len > $i; ++$i) {
        for (my $j = $i + 1; $len > $j; ++$j) {
            if (!(@$sequence[$i] % @$sequence[$j]) || !(@$sequence[$j] % @$sequence[$i])) {
                ++$result;
            }
        }
    }

    return $result;
}